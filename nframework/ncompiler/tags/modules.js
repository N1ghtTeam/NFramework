const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.Compile = function(element, childsCode, code) {
    let inputs = tag.GetInputs(element, childsCode, code);

    let code = `
    `;

    for (let i = 0; i < inputs.length; i++) {
        code += `this.modules.push('${inputs[i]}');
        `;
    }

    return `

        ${code}

    `;
}


module.exports = tag;
