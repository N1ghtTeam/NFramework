const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let inputs = tag.GetInputs(element, childsCode, code);

    let compiledCode = `{
        this.AddServerMethod('${inputs[0]}',(clientSocket,...args) => {
            let f =
    `;

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    compiledCode += `

    return f.call(this,...args);

}

    );
}
    `;

    return compiledCode;
}

module.exports = tag;
