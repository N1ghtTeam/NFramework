const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = true;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let inputs = tag.GetInputs(element, childsCode, code);

    if (inputs[0] == '*') {
        return `
            this.useAllGlobalObjects=true;
        `;
    } else {
        let code = `this.customTypeDatas=[];
        `;

        for (let i = 0; i < inputs.length; i++) {
            code += `this.customTypeDatas.push('${inputs[i]}');
            `;
        }

        return `

            ${code}

        `;
    }


}


module.exports = tag;
