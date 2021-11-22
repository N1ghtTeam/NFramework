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

                
                let parsedPath = '';

                for (let i=0;i<url.length;i++){
                    if(url[i]==':'){
                        parsedPath += '--';
                    }
                    else{
                        parsedPath += url[i];
                    }
                }
                
                url = parsedPath;

                let data = manager.globalObjectSourceCodes[globalObjName];

                data = `
                    ${data}
                `;

                let compiler = manager.NFramework.ncompiler;

                let compiledData = compiler.CompileNModuleFastGetterAndSetter(data);

                compiledData = compiledData.code;
                compiledData = compiler.CompileFastGet(compiledData);

                express_server.get(url, (req, res) => {
                    res.send(compiledData);
                });
            }
        }
    }

    GetDataFromPackage(pack){
        let manager = this.manager;
        if(this.modules!='*'){
            let moduleNamesObj = new Object();

            for(let moduleName of this.modules){
                moduleNamesObj[moduleName] = true;
            }

            for(let moduleName of pack.modules){
                moduleNamesObj[moduleName] = true;
            }

            let moduleNames = Object.keys(moduleNamesObj);

            this.modules = moduleNames;
        }
        
        if(pack.modules == '*') this.modules = pack.modules;

        if(!this.useAllGlobalObjects){
            let namesObj = new Object();

            for(let name of this.customTypeDatas){
                namesObj[name] = true;
            }

            for(let name of pack.customTypeDatas){
                namesObj[name] = true;
            }

            let names = Object.keys(namesObj);

            this.customTypeDatas = names;
        }

        if(pack.useAllGlobalObjects) this.useAllGlobalObjects = '*';
        
        if(this.uiComponents != '*'){
            let namesObj = new Object();

            for(let name of this.uiComponents){
                namesObj[name] = true;
            }

            for(let name of pack.uiComponents){
                namesObj[name] = true;
            }

            let names = Object.keys(namesObj);

            this.uiComponents = names;
        }
        if(pack.uiComponents == '*') this.uiComponents = pack.uiComponents;

        for(let packChildName of pack.packages){
            var packChild = manager.Get(packChildName);
            this.GetDataFromPackage(packChild);
        }
    }

    GetDataFromPackages(){
        let manager = this.manager;
        
        for(let packName of this.packages){
            
            var pack = manager.Get(packName);

            this.GetDataFromPackage(pack);
            
        }

    }

    AfterSetup() {
        this.GetDataFromPackages();
        //this.SetupGlobalObjectsRouter();
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
            
            var parsedPath = '';

            for (let i=0;i<module.length;i++){
                if(module[i]==':'){
                    parsedPath += '--';
                }
                else{
                    parsedPath += module[i];
                }
            }

            if(this.manager.modules[module].side=='both' || this.manager.modules[module].side=='client')
                miejs+=' <script  src="/nlc/'+parsedPath+'"></script>';
        }

        var globalObjects=this.customTypeDatas;

        if(this.useAllGlobalObjects)
        {
            
            for(var globalObjectName of Object.keys(this.manager.customTypeDatas)){
                
                var parsedPath = '';
    
                for (let i=0;i<globalObjectName.length;i++){
                    if(globalObjectName[i]==':'){
                        parsedPath += '--';
                    }
                    else{
                        parsedPath += globalObjectName[i];
                    }
                }
    
                miejs+="\n<script src='/nlc/"+parsedPath+"'></script>";
            }
        }
        else
        for(var globalObjectName of globalObjects){
            
            var parsedPath = '';

            for (let i=0;i<globalObjectName.length;i++){
                if(globalObjectName[i]==':'){
                    parsedPath += '--';
                }
                else{
                    parsedPath += globalObjectName[i];
                }
            }

            miejs+="\n<script src='/nlc/"+parsedPath+"'></script>";
        }
        
        var uiComponents=this.uiComponents;

        if(uiComponents=='*')
        {
            uiComponents=this.manager.uiComponents;
        }
        
        for(var uiComponent of uiComponents){
            
            var parsedPath = '';

            for (let i=0;i<uiComponent.length;i++){
                if(uiComponent[i]==':'){
                    parsedPath += '--';
                }
                else{
                    parsedPath += uiComponent[i];
                }
            }

            miejs+="\n<script src='/nlc/"+parsedPath+"'></script>";
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
