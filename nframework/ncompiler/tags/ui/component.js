const Tag = require('../../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    if(!element.forSV){
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

    
        let contents = tag.GetContent(element, childsCode, code);
    
        let compiledCode='';
    
        for (let i = 0; i < contents.length; i++) {
            compiledCode += contents[i].code;
        }

        compiledCode = `
            class ${componentName}_class extends HTMLElement{

                constructor(){
                    super();
                }                

            ${compiledCode}
        
            }

            customElements.define('${rawComponentName}', ${componentName}_class);

        `;
    
        return compiledCode;
    }
    else{
        return '';
    }
}


module.exports = tag;
