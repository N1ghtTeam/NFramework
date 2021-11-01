const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {

    return `
        this.useAllGlobalObjects=true;
    `;
}


module.exports = tag;
