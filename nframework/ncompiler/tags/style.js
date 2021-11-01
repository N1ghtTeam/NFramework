const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let inputs = tag.GetInputs(element, childsCode, code);

    let compiledCode = ``;

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    compiledCode = `
    (()=>{
        let styleE = document.createElement('style');

        styleE.textContent = ` + '`' + compiledCode + '`;' + `

        document.body.appendChild(styleE);

        return styleE;
    })()
    `;

    if (element.forSV) {
        compiledCode = '';
    }

    compiledCode=tag.DontUseNLCFastGet(compiledCode);

    return compiledCode;
}

module.exports = tag;
