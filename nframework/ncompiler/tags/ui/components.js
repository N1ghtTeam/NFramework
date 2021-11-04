const Tag = require('../../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.oneTime=true;

tag.Compile = function(element, childsCode, code,manager, nlcPath, compiler) {
    
    let inputs = tag.GetInputs(element, childsCode, code);

    
    if(inputs[0]=='*'){
        return `
            this.uiComponents='*';
        `;
    }

    let compiledCode=`
    
    `;
    
    for (let i = 0; i < inputs.length; i++) {
        compiledCode += `this.uiComponents.push('${inputs[i]}');
        `;
    }

    return `
        ${compiledCode}
        
    `;
}


module.exports = tag;
