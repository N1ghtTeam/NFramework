const Tag = require('../tag/tag');
var htmlTagCompile=require('./html/htmlTag');

let tag = new Tag();

tag.isJSTag = true;
tag.isUITag = true;
tag.notFound=true;
tag.tagChecks=[];

tag.Compile = function(element, childsCode, code,manager,nlcPath,compiler) {
    /*
    if(!element.forSV){

        console.log(tag.tagChecks);
        
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
    */
    if(!element.forSV){
        let newCode='';

        let checkKeys = Object.keys(tag.tagChecks);

        for(let checkKey of checkKeys){

            let tagCheck = tag.tagChecks[checkKey];

            tagCheck.name=this.name;
            tagCheck.componentName=this.componentName;

            let cresult = tagCheck.Compile(element, childsCode, code,manager,nlcPath,compiler);

            newCode+=`
            if(window.NFramework.customTags['${checkKey}']!=null){
                if(window.NFramework.customTags['${checkKey}']['${this.componentName}']!=null){
                    let r_${tag.componentName} = ${cresult};
                    return r_${tag.componentName};
                }
            }
            `;
            
        }

        newCode=`
            (()=>{
                ${newCode}
            })()
        `;

        return newCode;
    }
    else{
        return '';
    }


}


module.exports = tag;
