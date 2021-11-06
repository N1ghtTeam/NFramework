const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let inputs = tag.GetInputs(element, childsCode, code);

    let pageName = inputs[0];

    return `

        ((req,res)=>{
            var framework=manager.NFramework;

            var modules=manager.pages['${pageName}'].modules;

            var miejs='';

            var frameworkCLEJS=framework.clejs;

            miejs+=frameworkCLEJS;
            
            miejs+="\\n<nlc>";

            if(modules=='*')
            {
                modules=Object.keys(manager.modules);
            }
            
            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                if(manager.modules[module].side=='both' || manager.modules[module].side=='client')
                    miejs+=' <script  src="/nlc/'+module+'"></script>';
            }

            var globalObjects=manager.pages['${pageName}'].customTypeDatas;

            for(var globalObjectName of globalObjects){
                miejs+="\\n<script src='/nlc/"+globalObjectName+"'></script>";
            }
            
            var uiComponents=manager.pages['${pageName}'].uiComponents;

            if(uiComponents=='*')
            {
                uiComponents=manager.uiComponents;
            }
            
            for(var uiComponent of uiComponents){
                miejs+="\\n<script src='/nlc/"+uiComponent+"'></script>";
            }

            miejs+="\\n</nlc>";

            miejs+="\\n<script src='/appcl'></script>";

            miejs="<nframework-scripts>" +miejs+ "</nframework-scripts>";


            res.render( manager.pages['${pageName}'].src,{
                NFramework:miejs
            });
        })(req,res);

    `;
}


module.exports = tag;
