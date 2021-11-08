const Tag = require('../tag/tag');
const { v4: uuidv4 }    = require('uuid');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

let CompileHTMLTextContentBindingSyntax = require('./html/CompileHTMLTextContentBindingSyntax');

let CompileTextContent = function(code){

    let result='';

    for(let i=0;i<code.length;i++){

        if(code[i]=='`'){
            result+='`+"`"+`';
        }
        else{
            result+=code[i];
        }

    }

    return result;

}

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let compiledCode = ``;

    for (let i = 0; i < contents.length; i++) {
        if(contents[i].type=='childCode'){
            compiledCode += contents[i].code + ',';
        }
        else{

            let htmlBindingSyntaxRs = CompileHTMLTextContentBindingSyntax(contents[i].code);

            for(let htmlBindingSyntaxR of htmlBindingSyntaxRs){
                if(htmlBindingSyntaxR.type=='textContent'){
                    let textContentCode = CompileTextContent(htmlBindingSyntaxR.value);
                    compiledCode += '`'+textContentCode + '`,';
                }
                else{
                    compiledCode += ''+htmlBindingSyntaxR.value + ',';
                }
            }

            //compiledCode += '`'+contents[i].code + '`,';
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

    compiledCode = `(()=>{
        
                        let __result__${rfid} = [${compiledCode}];  

                        return __result__${rfid};
                    })()`;

    return compiledCode;
}

module.exports = tag;
