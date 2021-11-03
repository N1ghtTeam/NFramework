const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let compiledCode = ``;

    let elementsCode = ``;

    for (let i = 0; i < contents.length; i++) {
        if(contents[i].type=='childCode'){
            compiledCode += contents[i].code + ',';
            elementsCode += contents[i].code + ',';
        }
        else{
            compiledCode += '`'+contents[i].code + '`,';
        }
    }

    compiledCode = `(()=>{
                        let __result__453yh5b6jnu76imk76 = [${compiledCode}];  

                        __result__453yh5b6jnu76imk76.elements=[${elementsCode}];

                        return __result__453yh5b6jnu76imk76;
                    })()`;

    return compiledCode;
}

module.exports = tag;
