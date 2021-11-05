const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let inputs = tag.GetInputs(element, childsCode, code);

    let codeFunc = '';
    for (let i = 0; i < contents.length; i++) {
        codeFunc += contents[i].code;
    }

    let compiledCodeFunc = '';

    let start = 0;
    let regex = /^[a-zA-Z0-9]+$/;

    for (; start < codeFunc.length; start++) {
        if (codeFunc[start].match(regex)) {
            start;
            break;
        }
    }

    for (let i = start; i < codeFunc.length; i++) {
        let strChar = '';

        if (codeFunc[i] == '"' || codeFunc[i] == '`' || codeFunc[i] == `"`) {
            strChar = codeFunc[i];
            compiledCodeFunc += strChar;
            i++;
            for (; i < codeFunc.length; i++) {
                if (codeFunc[i] == strChar) {
                    break;
                }
                compiledCodeFunc += codeFunc[i];
            }
            compiledCodeFunc += strChar;
        } else {
            /*
            if(codeFunc[i]+codeFunc[i+1]+codeFunc[i+2]+codeFunc[i+3]=='this'){
                i=i+3;
                compiledCodeFunc+='nmodule';
            }
            else*/
            {
                compiledCodeFunc += codeFunc[i];
            }
        }

        if (i >= codeFunc.length) {
            break;
        }


    }

    compiledCodeFunc = 'async ' + compiledCodeFunc;

    let compiledCode = `
        this.AddMethod('${inputs[0]}',async (...args)=>{
                let f=${compiledCodeFunc}
                let f2=f.bind(this);
                return await f2(...args);
            }

        );

    `;

    return compiledCode;
}

module.exports = tag;
