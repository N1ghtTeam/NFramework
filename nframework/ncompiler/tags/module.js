const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.oneTime = true;

let parsed__dirname = '';

for (let i = 0; i < __dirname.length; i++) {
    if (__dirname[i] == '\\') {
        parsed__dirname += '\\\\';
    } else {
        parsed__dirname += __dirname[i];
    }
}

let nmodulePath = parsed__dirname + '/../../nmodule/nmodule';

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let inputs = tag.GetInputs(element, childsCode, code);

    function checkInput(inputs){
        let newInputs = [];

        let needReCheck = false;

        for(let input of inputs){
            if(input[0]=='}' && input.length!=1){
                newInputs.push('}');
                newInputs.push(input.substring(1,input.length));
                needReCheck = true;
            }
            else
            if(input[input.length-1]=='{' && input.length!=1){
                newInputs.push(input.substring(0,input.length-1));
                newInputs.push('{');
                needReCheck = true;
            }
            else if(input[input.length-1]=='}' && input.length!=1){
                newInputs.push(input.substring(0,input.length-1));
                newInputs.push('}');
                needReCheck = true;
            }
            else if(input[0]=='{' && input.length!=1){
                newInputs.push('{');
                newInputs.push(input.substring(1,input.length));
                needReCheck = true;
            }
            else{
                newInputs.push(input);
            }
        }

        if(needReCheck){
            newInputs = checkInput(newInputs);
        }

        return newInputs;

    }

    inputs = checkInput(inputs);

    //get side
    let side=`'both'`;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i]=='side'){
            side=inputs[i+2];
            break;
        }
    }

    //get extendedModule
    let extendedModulesStr='';

    let extendedModules=[];

    let isNeedGetExtendedModuleName=false;

    for(let i=0;i<inputs.length;i++){
        if(isNeedGetExtendedModuleName && inputs[i]=='}'){
            break;
        }
        if(isNeedGetExtendedModuleName){

            extendedModules.push(inputs[i]);

        }
        if(inputs[i]=='extends'){
            isNeedGetExtendedModuleName=true;
            i++;
        }
    }
    
    for(let i=0;i<extendedModules.length;i++){
        extendedModules[i]=`
            (()=>{
                let me=(()=>{
                    try{
                        return (${extendedModules[i]});
                    }
                    catch{
                        return `+'`'+`${extendedModules[i]}`+'`'+`;
                    }
                })();
                if(me instanceof NModule){
                    return me.name;
                }
                else{
                    return me;
                }
            })()
        `;
    }

    for(let i=0;i<extendedModules.length;i++){
        extendedModulesStr+=`${extendedModules[i]}`;
        if(i<extendedModules.length-1){
            extendedModulesStr+=',';
        }
    }
    extendedModulesStr = `[${extendedModulesStr}]`;

    let moduleName = inputs[0];

    moduleName = `

        ((()=>{
            
            if(namespace.length==0){
                return `+'`'+`${moduleName}`+'`'+`;
            }
            else{
                let result=`+'`'+`${moduleName}`+'`'+`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    `;

    let nmoduleImportCode = `
        function() {
            return require("${nmodulePath}");
        }()

    `;

    if (!element.forSV) {
        nmoduleImportCode = `
            function() {
                return window.NFramework.NModule;
            }()

        `;
    }

    if (!element.forSV) {

    }

    let compiledCode = `

        var NModule=${nmoduleImportCode};

        var nmodule=new NModule();

        var This=nmodule;

        var nmoduleName = ${moduleName};

        nmodule.name=nmoduleName;

        nmodule.shortName=`+'`'+`${inputs[0]}`+'`'+`;

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = ${extendedModulesStr};

        nmodule.side = ${side};

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    `;

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    compiledCode += `
        });
    `;

    if (element.forSV) {
        compiledCode += `

        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);
        

        var parsedPath = '';

        for (let i=0;i<nmoduleName.length;i++){
            if(nmoduleName[i]==':'){
                parsedPath += '--';
            }
            else{
                parsedPath += nmoduleName[i];
            }
        }

        if(nmodule.side!='server'){
            nmodule.Routing('/nlc/'+parsedPath, (req, res) => res.send(nmodule.client_js_code));
        }

        `;
    } else {
        compiledCode += `

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        `;
    }

    if (element.forSV) {
        compiledCode += `

            nmodules.push(nmodule);

        `;
    }



    if (!element.forSV) {
        compiledCode = `
            (()=>{
                ${compiledCode}
            })();
        `;
    }

    return compiledCode;
}


module.exports = tag;
