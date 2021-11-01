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


    return compiledCode;
}

module.exports = tag;
