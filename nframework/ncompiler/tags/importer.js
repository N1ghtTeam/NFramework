const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    return `

        let Import=function(path){
            return require(path);
        }

    `;
}


module.exports = tag;
