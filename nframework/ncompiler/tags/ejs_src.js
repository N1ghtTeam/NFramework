var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    var inputs=tag.GetInputs(element,childsCode,code);

    var compiledPath = inputs[0];

    var parts=inputs[0].split('.');

    if(parts[parts.length-1]!='ejs'){
        compiledPath+='.ejs';
    }
    
    return `
    
        this.ejs_src='${compiledPath}';
    
    `;
}


module.exports=tag;