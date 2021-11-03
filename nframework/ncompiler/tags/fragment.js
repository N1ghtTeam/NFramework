const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let compiledCode = ``;

    for (let i = 0; i < contents.length; i++) {
        if(contents[i].type=='childCode'){
            compiledCode += contents[i].code + ',';
        }
    }

    compiledCode = `[${compiledCode}]`;


    return compiledCode;
}

module.exports = tag;
