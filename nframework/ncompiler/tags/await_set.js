const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let inputs = tag.GetInputs(element, childsCode, code);

    let contents = tag.GetContent(element, childsCode, code);

    let compiledCode = '';

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    return `await this.AsyncSet('${inputs[0]}',${compiledCode})`;
}


module.exports = tag;
