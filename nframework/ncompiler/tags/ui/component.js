const Tag = require('../../tag/tag');
const { v4: uuidv4 }    = require('uuid');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.oneTime=true;

tag.Compile = function(element, childsCode, code,manager, nlcPath, compiler) {

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

    let extendClass='"UIComponent"';

    for(let i=0;i<inputs[0].length;i++){
        if(inputs[i]=='extends'){
            extendClass=inputs[i+2];
            break;
        }
    }

    let compiledExtends=`${extendClass}`;

    let componentName='';
    let rawComponentName=inputs[0];

    for(let i=0;i<inputs[0].length;i++){
        if(inputs[0][i]=='-'){
            componentName += '_';
        }
        else{
            componentName += inputs[0][i];
        }
    }

    compiler.customTags.push({
        'key':'ui',
        'name':componentName
    });

    let contents = tag.GetContent(element, childsCode, code);

    let compiledCode='';

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    let componentTag='""';

    for(let i=0;i<inputs[0].length;i++){
        if(inputs[i]=='tag'){
            componentTag=inputs[i+2];
            break;
        }
    }

    let rfid  = uuidv4();
    let rfid2 = '';

    for(let i=0;i<rfid.length;i++){
        if(rfid[i]=='-'){
            rfid2+='_';
        }
        else{
            rfid2+=rfid[i];
        }
    }

    rfid=rfid2;

    if(!element.forSV){

        compiledCode = `
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['${componentName}']=true;

            /*
            class ${componentName}_class extends UIComponent{    

            ${compiledCode}
        
            }
            */


            (()=>{

                var uiManager = window.NFramework.uiManager;
                //uiManager.uiComponentClasses['${rawComponentName}']=${componentName}_class;

                let UIClass = function(name){
                    return uiManager.uiComponentClasses[name];
                }

                uiManager.uiComponentClassCreators.push(
                    {
                        'classCreator': ()=>{

                            let baseClassName = (()=>{
                                try{
                                    return (${compiledExtends});
                                }
                                catch{  
                                    return `+'`'+`${compiledExtends}`+'`'+`;
                                }
                            })();

                            class ${componentName}_class extends uiManager.uiComponentClasses[baseClassName]{
                        
                
                            ${compiledCode}
                        
                            }

                            ${componentName}_class.prototype.componentName='${rawComponentName}';
                            ${componentName}_class.prototype.UIClass=UIClass;

                            ${componentName}_class.render=function(target){
                                let result=[];
                                if(${componentName}_class.prototype.render!=null){
                                    result = ${componentName}_class.prototype.render.call(target);
                                }
                                result.add=function(data){
                                    for(let element of data){
                                        result.push(element);
                                    }
                                    return result;
                                }
                                result.addBefore=function(data){
                                    let nData=data;
                                    for(let element of result){
                                        nData.push(element);
                                    }
                                    return nData;
                                }
                                return result;
                            }

                            if(${componentTag}=='main'){
                                uiManager.mainUIComponentClass = ${componentName}_class;
                                uiManager.mainUIComponentName = '${rawComponentName}';
                                uiManager.mainComponentNUI_id = '${rfid}';
                            }


                            return ${componentName}_class;
                        },
                        'extends':${compiledExtends},
                        'name':'${rawComponentName}'
                    }
                );

            })();

        `;
    
        return compiledCode;
    }
    else{
        return `
        
            var fs=require('fs');

            var ${componentName}_code=fs.readFileSync(JSCLPath).toString();

            var express_server = manager.NFramework.express_server;

            var ${componentName}_path='/nlc/${rawComponentName}';

            var parsedPath = '';

            for (let i=0;i<${componentName}_path.length;i++){
                if(${componentName}_path[i]==':'){
                    parsedPath += '--';
                }
                else{
                    parsedPath += ${componentName}_path[i];
                }
            }

            ${componentName}_path = parsedPath;

            manager.uiComponents.push('${rawComponentName}');

            express_server.get(${componentName}_path, (req, res) => {

                res.send(${componentName}_code);

            });

        
        `;
    }
}


module.exports = tag;
