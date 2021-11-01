const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let inputs = tag.GetInputs(element, childsCode, code);

    return `nmodule.Set('${inputs[0]}',nmodule.Get('${inputs[0]}')+1)`;
}


module.exports = tag;
