const Tag = require('../tag/tag');
let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let inputs = tag.GetInputs(element, childsCode, code);

    let compiledCode = `
        ${inputs[0]}=
    `;

    for (let i = 0; i < contents.length; i++)
        compiledCode += contents[i].code;

    compiledCode += `

    `;

    return compiledCode;
}

module.exports = tag;
