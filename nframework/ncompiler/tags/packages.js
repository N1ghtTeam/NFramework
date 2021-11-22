const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let inputs = tag.GetInputs(element, childsCode, code);
 
    let result = ``;

    if(inputs[0]=='*'){
        return `
            this.packages='*';
        `;
    }

    for (let i = 0; i < inputs.length; i++) {
        result += `this.packages.push('${inputs[i]}');
        `;
    }

    return `

        ${result}

    `;
}


module.exports = tag;
