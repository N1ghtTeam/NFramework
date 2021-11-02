const Tag = require('../../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code,manager,nlcPath,compiler) {
    let inputs = tag.GetInputs(element, childsCode, code);
    return ``;
}


module.exports = tag;
