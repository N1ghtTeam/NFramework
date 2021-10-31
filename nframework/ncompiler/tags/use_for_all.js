const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.Compile = function(element, childsCode, code) {
    return '';
}

module.exports = tag;
