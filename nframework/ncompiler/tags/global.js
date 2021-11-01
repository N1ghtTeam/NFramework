const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.oneTime = true;

tag.Compile = function(element, childsCode, code, manager) {
    let inputs = tag.GetInputs(element, childsCode, code);

    let contents = tag.GetContent(element, childsCode, code);

    let compiledCode = '';

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    if (element.forSV) {

        let compiledJSCode = '' + compiledCode + '';

        manager.jsCode[inputs[0]] = compiledJSCode;

        compiledCode = `
        (()=>{
            let fs=require('fs');
            let clientVersion=JSCLPath;
            let client_js_code=fs.readFileSync(clientVersion).toString();
            manager.globalObjectSourceCodes['${inputs[0]}']=client_js_code;
            let data=${compiledCode};
            return data;
        })()`

        return `exports.customTypeDatas.Add('${inputs[0]}',${compiledCode})`;
    } else{

        return ` manager.customTypeDatas['${inputs[0]}']=(()=>{
            let data=${compiledCode};
            return data;
        })();`;
    }
}


module.exports = tag;
