const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let inputs = tag.GetInputs(element, childsCode, code);

    let compiledPath = inputs[0];

    return `

        this.src='${compiledPath}';

    `;
}


module.exports = tag;
