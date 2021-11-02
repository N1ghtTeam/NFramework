const Tag = require('../tag/tag');
var htmlTagCompile=require('./html/htmlTag');

let tag = new Tag();

tag.isJSTag = true;
tag.isUITag = true;

tag.Compile = function(element, childsCode, code,manager) {
    if(!element.forSV){
        let parsedComponentName='';

        for(let i=0;i<tag.componentName.length;i++){
            if(tag.componentName[i]=='_'){
                parsedComponentName+='-';
            }
            else{
                parsedComponentName+=tag.componentName[i];
            }
        }

        tag.componentName=parsedComponentName;
        

        let compiledCode = htmlTagCompile(element,childsCode,code,manager,tag.componentName,tag);

        return compiledCode;
    }
    else{
        return '';
    }
}


module.exports = tag;
