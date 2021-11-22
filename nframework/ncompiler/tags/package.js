const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.oneTime = true;

let parsed__dirname = '';

for (let i = 0; i < __dirname.length; i++) {
    if (__dirname[i] == '\\') {
        parsed__dirname += '\\\\';
    } else {
        parsed__dirname += __dirname[i];
    }
}

let pagePath = parsed__dirname + '/../../page/page';


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

    
    let pageName = inputs[0];

    pageName = `

        ((()=>{
            
            if(namespace.length==0){
                return `+'`'+`${pageName}`+'`'+`;
            }
            else{
                let result=`+'`'+`${pageName}`+'`'+`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    `;



    //src
    let src='';

    for(let i=0;i<inputs.length;i++){
        if(inputs[i]=='src'){
            src=inputs[i+2];
            break;
        }
    }


    //modules
    let modulesStr='';

    let modules=[];

    let isNeedGetModuleName=false;

    for(let i=0;i<inputs.length;i++){
        if(isNeedGetModuleName && inputs[i]=='}'){
            break;
        }
        if(isNeedGetModuleName){

            modules.push(inputs[i]);

        }
        if(inputs[i]=='modules'){
            isNeedGetModuleName=true;
            i++;
        }
    }

    for(let i=0;i<modules.length;i++){
        modulesStr+=`'${modules[i]}'`;
        if(i<modules.length-1){
            modulesStr+=',';
        }
    }

    if(modulesStr!="'*'")
        modulesStr='['+modulesStr+']';


    //ui:components
    let uicomponentsStr='';

    let uicomponents=[];

    let isNeedGetUIComponentName=false;

    for(let i=0;i<inputs.length;i++){
        if(isNeedGetUIComponentName && inputs[i]=='}'){
            break;
        }
        if(isNeedGetUIComponentName){

            uicomponents.push(inputs[i]);

        }
        if(inputs[i]=='ui:components'){
            isNeedGetUIComponentName=true;
            i++;
        }
    }

    for(let i=0;i<uicomponents.length;i++){
        uicomponentsStr+=`'${uicomponents[i]}'`;
        if(i<uicomponents.length-1){
            uicomponentsStr+=',';
        }
    }

    if(uicomponentsStr!="'*'")
        uicomponentsStr='['+uicomponentsStr+']';


    let contents = tag.GetContent(element, childsCode, code);

    let packName = '';

    for(let i of inputs[0]){
        if(i=='-'){
            packName+='_';
        }
        else{
            packName+=i;
        }
    }

    let pageCode = `

    let pack_${packName}=new Object();

    pack_${packName}.customTypeDatas=[];
    
    pack_${packName}.uiComponents=${uicomponentsStr};

    pack_${packName}.useAllGlobalObjects=false;

    pack_${packName}.name=${pageName};

    pack_${packName}.__TYPE='Package';

    pack_${packName}.modules=${modulesStr};

    pack_${packName}.packages=[];

    pack_${packName}.Setup=function(){

    `;

    for (let i = 0; i < contents.length; i++) {
        pageCode += contents[i].code;
    }


    pageCode += `
    }
        pack_${packName}.Setup.call(pack_${packName});
        pack_${packName}.manager=manager;
        
        packages.push(pack_${packName});

    `;

    if (!element.forSV) {
        pageCode = '';
    }

    return `

    ${pageCode}

    `;
}


module.exports = tag;
