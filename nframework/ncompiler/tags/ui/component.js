const Tag = require('../../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.oneTime=true;

tag.Compile = function(element, childsCode, code,manager, nlcPath, compiler) {

    let inputs = tag.GetInputs(element, childsCode, code);


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
            class ${componentName}_class extends HTMLElement{

                constructor(){
                    super();
                    this.componentName='${rawComponentName}';
                }                

            ${compiledCode}
        
            }

            customElements.define('${rawComponentName}', ${componentName}_class);



        `;
    
        return compiledCode;
    }
    else{
        return `
        
            var fs=require('fs');

            var ${componentName}_code=fs.readFileSync(JSCLPath).toString();

            let express_server = manager.NFramework.express_server;

            let ${componentName}_path='/nlc/${rawComponentName}';

            manager.uiComponents.push('${rawComponentName}');

            express_server.get(${componentName}_path, (req, res) => {

                res.send(${componentName}_code);

            });

        
        `;
    }
}


module.exports = tag;
