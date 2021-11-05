const Tag = require('../../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;
tag.isJSTag=true;

tag.Compile = function(element, childsCode, code) {
    let inputs = ['NLC'] //tag.GetInputs(element,childsCode,code);
    let result = ``;

    for (let i = 0; i < inputs.length; i++) {
        result += `this.modules.push('${inputs[i]}');
        `;
    }

    return `

        ${result}

    `;
}


module.exports = tag;
