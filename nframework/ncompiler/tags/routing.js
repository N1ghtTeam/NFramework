const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.Compile = function(element, childsCode, code) {
    let inputs = tag.GetInputs(element, childsCode, code);

    
    function checkInput(inputs){
        let newInputs = [];

        let needReCheck = false;

        for(let input of inputs){
            if(input[0]=='}' && input.length!=1){
                newInputs.push('}');
                newInputs.push(input.substring(1,input.length));
                needReCheck = true;
            }
            else
            if(input[input.length-1]=='{' && input.length!=1){
                newInputs.push(input.substring(0,input.length-1));
                newInputs.push('{');
                needReCheck = true;
            }
            else if(input[input.length-1]=='}' && input.length!=1){
                newInputs.push(input.substring(0,input.length-1));
                newInputs.push('}');
                needReCheck = true;
            }
            else if(input[0]=='{' && input.length!=1){
                newInputs.push('{');
                newInputs.push(input.substring(1,input.length));
                needReCheck = true;
            }
            else{
                newInputs.push(input);
            }
        }

        if(needReCheck){
            newInputs = checkInput(newInputs);
        }

        return newInputs;

    }

    inputs = checkInput(inputs);
    
    let routingPath='"/"';

    for(let i=0;i<inputs[0].length;i++){
        if(inputs[i]=='path'){
            routingPath=inputs[i+2];
            break;
        }
    }

    let contents = tag.GetContent(element, childsCode, code);

    let compiledCode = '';

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    if (element.forSV)
        compiledCode = `
        {
            path=${routingPath};
            callback=(
            ${compiledCode}
            );
            nmodule.Routing(path,callback);
        }

    `;

    return `
        ${compiledCode}
    `;
}


module.exports = tag;
