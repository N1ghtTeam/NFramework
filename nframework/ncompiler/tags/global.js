const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.Compile = function(element, childsCode, code, manager) {

    if (element.forSV) {
        let inputs = tag.GetInputs(element, childsCode, code);

        let contents = tag.GetContent(element, childsCode, code);

        let compiledCode = '';

        for (let i = 0; i < contents.length; i++) {
            compiledCode += contents[i].code;
        }

        let compiledJSCode = '' + compiledCode + '';

        manager.jsCode[inputs[0]] = compiledJSCode;

        compiledCode = `(()=>{
            let data=${compiledCode};
            return data;
        })()`

        return `exports.customTypeDatas.Add('${inputs[0]}',${compiledCode})`;
    } else
        return '';
}


module.exports = tag;
