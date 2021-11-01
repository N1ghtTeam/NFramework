var Tag = require('../tag/tag');

var tag = new Tag();

tag.isAutoClose = true;

tag.Compile = function(element, childsCode, code) {
    var inputs = tag.GetInputs(element, childsCode, code);

    var pageName = inputs[0];

    return `

        ((req,res)=>{
            var framework=manager.NFramework;

            var modules=manager.pages['${pageName}'].modules;

            var miejs='';

            var frameworkCLEJS=framework.clejs;

            miejs+=frameworkCLEJS;

            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                miejs+=' <script  src="/nlc/'+module+'"></script>';
            }

            var globalObjects=manager.pages['${pageName}'].customTypeDatas;

            for(var globalObjectName of globalObjects){
                miejs+="\\n<script src='/nlc/"+globalObjectName+"'></script>";
            }

            miejs+="\\n<script src='/appcl'></script>";

            miejs="<nframework-scripts>" +miejs+ "</nframework-scripts>";

            res.render( manager.pages['${pageName}'].src,{
                NFramework:miejs
            });
        })(req,res);

    `;
}


module.exports = tag;
