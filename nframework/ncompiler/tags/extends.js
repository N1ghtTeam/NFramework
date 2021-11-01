const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let inputs = tag.GetInputs(element, childsCode, code);
    let baseModules = ``;

    if (inputs.length == 1) {
        baseModules = `'${inputs[0]}'`;
    } else {
        for (let i = 0; i < inputs.length - 1; i++) {
            baseModules += `'${inputs[i]}',`;
        }
        baseModules += `'${inputs[inputs.length-1]}'`;
    }

    return `

        this.baseModules = [${baseModules}];

    `;
}


module.exports = tag;
