const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);
    let inputs = tag.GetInputs(element, childsCode, code);

    let compiledCode = `
        namespace.push('${inputs[0]}');
        'NFRAMEWORK';'NAMESPACE';'${inputs[0]}';
    `;

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    compiledCode += `
        namespace.splice(namespace.length-1,1);
        'NFRAMEWORK';'ENDNAMESPACE';
    `;


    return compiledCode;
}

module.exports = tag;
