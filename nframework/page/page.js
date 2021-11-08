const fs = require('fs');

class Page {
    constructor() {}

    SetupGlobalObjectsRouter() {
        let manager = this.manager;

        for (let globalObjName of this.customTypeDatas) {
            let info = manager.customTypeDataInfos[globalObjName];

            if(!info.isSetupCLRouter) {
                let express_server = manager.NFramework.express_server;

                let url = `/nlc/${globalObjName}`;

                let data = manager.globalObjectSourceCodes[globalObjName];

                data = `
                    ${data}
                `;

                let compiler = manager.NFramework.ncompiler;

                let compiledData = compiler.CompileNModuleFastGetterAndSetter(data);

                compiledData = compiledData.code;
                compiledData = compiler.CompileFastGet(compiledData);

                express_server.get(url, (req, res) => res.send(compiledData));
            }
        }
    }

    AfterSetup() {
        this.SetupGlobalObjectsRouter();
    }

    Render(req,res){
        var framework=this.manager.NFramework;

        var modules=this.modules;

        var miejs='';

        var frameworkCLEJS=framework.clejs;

        miejs+=frameworkCLEJS;
        
        miejs+="\n<nlc>";

        if(modules=='*')
        {
            modules=Object.keys(this.manager.modules);
        }
        
        for(var i=0;i<modules.length;i++){
            var module=modules[i];
            if(this.manager.modules[module].side=='both' || this.manager.modules[module].side=='client')
                miejs+=' <script  src="/nlc/'+module+'"></script>';
        }

        var globalObjects=this.customTypeDatas;

        for(var globalObjectName of globalObjects){
            miejs+="\n<script src='/nlc/"+globalObjectName+"'></script>";
        }
        
        var uiComponents=this.uiComponents;

        if(uiComponents=='*')
        {
            uiComponents=this.manager.uiComponents;
        }
        
        for(var uiComponent of uiComponents){
            miejs+="\n<script src='/nlc/"+uiComponent+"'></script>";
        }

        miejs+="\n</nlc>";

        miejs+="\n<script src='/appcl'></script>";

        miejs="<nframework-scripts>" +miejs+ "</nframework-scripts>";


        res.render( this.src,{
            NFramework:miejs
        });
    }

}

module.exports = Page;
