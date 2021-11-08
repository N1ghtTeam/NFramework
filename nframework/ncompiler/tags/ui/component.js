const Tag = require('../../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.oneTime=true;

tag.Compile = function(element, childsCode, code,manager, nlcPath, compiler) {

    let inputs = tag.GetInputs(element, childsCode, code);

    let newInputs = [];

    for(let input of inputs){
        if(input[0]=='}' && input.length!=1){
            newInputs.push('}');
            newInputs.push(input.substring(1,input.length));
        }
        else
        if(input[input.length-1]=='{' && input.length!=1){
            newInputs.push(input.substring(0,input.length-1));
            newInputs.push('{');
        }
        else{
            newInputs.push(input);
        }
    }

    inputs = newInputs;

    let extendClass='UIComponent';

    for(let i=0;i<inputs[0].length;i++){
        if(inputs[i]=='extends'){
            extendClass=inputs[i+2];
            break;
        }
    }

    let compiledExtends=`'${extendClass}'`;

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
                            class ${componentName}_class extends uiManager.uiComponentClasses[${compiledExtends}]{
                        
                
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

            manager.uiComponents.push('${rawComponentName}');

            express_server.get(${componentName}_path, (req, res) => {

                res.send(${componentName}_code);

            });

        
        `;
    }
}


module.exports = tag;
