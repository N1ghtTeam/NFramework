const Tag = require('../../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.oneTime=true;

tag.Compile = function(element, childsCode, code,manager, nlcPath, compiler) {

    let inputs = tag.GetInputs(element, childsCode, code);

    let extendClass='UIComponent';

    if(inputs[1]=='extends'){
        extendClass=inputs[2];
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


    if(!element.forSV){

        compiledCode = `
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['${componentName}']=true;

            /*
            class ${componentName}_class extends UIComponent{

                constructor(){
                    super();
                    this.componentName='${rawComponentName}';
                }                

            ${compiledCode}
        
            }
            */


            (()=>{

                var uiManager = window.NFramework.uiManager;
                //uiManager.uiComponentClasses['${rawComponentName}']=${componentName}_class;

                uiManager.uiComponentClassCreators.push(
                    {
                        'classCreator': ()=>{
                            return class ${componentName}_class extends uiManager.uiComponentClasses[${compiledExtends}]{
                
                                constructor(){
                                    super();
                                    this.componentName='${rawComponentName}';
                                }                
                
                            ${compiledCode}
                        
                            }
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
