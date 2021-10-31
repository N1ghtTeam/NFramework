<<<<<<< HEAD
const Tag = require('../../tag/tag');

let tag = new Tag();
=======
let Tag=require('../../tag/tag');

let tag=new Tag();
>>>>>>> da41e2c8a1d41dc7d2ad054c7bcd805a0315d051

tag.isAutoClose = true;

<<<<<<< HEAD
tag.Compile = function(element, childsCode, code) {
    let inputs = ['dom'] //tag.GetInputs(element,childsCode,code);
    let result = ``;

    for (let i = 0; i < inputs.length; i++) {
        result += `this.modules.push('${inputs[i]}');
=======
tag.Compile=function(element,childsCode,code){
    let inputs=['dom']//tag.GetInputs(element,childsCode,code);

    let result=`
    `;

    for(let i=0;i<inputs.length;i++){
        result+=`this.modules.push('${inputs[i]}');
>>>>>>> da41e2c8a1d41dc7d2ad054c7bcd805a0315d051
        `;
    }

    return `
<<<<<<< HEAD

        ${code}

=======
    
        ${result}
    
>>>>>>> da41e2c8a1d41dc7d2ad054c7bcd805a0315d051
    `;
}


module.exports = tag;
