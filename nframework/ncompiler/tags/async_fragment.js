const Tag = require('../tag/tag');
const { v4: uuidv4 }    = require('uuid');

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

    let rfid  = uuidv4();
    let rfid2 = '';

    for(let i=0;i<rfid.length;i++){
        if(rfid[i]=='-'){
            rfid2+='_';
        }
        else{
            rfid2+=rfid[i];
        }
    }

    rfid=rfid2;

    compiledCode = `await (async ()=>{
                        let __result__${rfid} = [${compiledCode}];  

                        return __result__${rfid};
                    })()`;

    return compiledCode;
}

module.exports = tag;
