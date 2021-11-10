const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let compiledCode = ``;

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    compiledCode = `
        var preISPUBLIC=IS_PUBLIC;
        IS_PUBLIC = 1;
        ${compiledCode}
        IS_PUBLIC = preISPUBLIC;    
    `;

    return compiledCode;
}

module.exports = tag;
