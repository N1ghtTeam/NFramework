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
    
    let newInputs = [];

    for(let input of inputs){
        if(input[0]=='}' && input.length!=1){
            newInputs.push('}');
            newInputs.push(input.substring(1,input.length));
        }
        else
        if(input[input.length-1]=='{' && input.length!=1){
            newInputs.push(input.substring(0,input.length-1));
            newInputs.push('{');
        }
        else{
            newInputs.push(input);
        }
    }

    inputs = newInputs;

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

    let pageCode = `

    let Page=require('${pagePath}');

    let page_${inputs[0]}=new Page();

    page_${inputs[0]}.customTypeDatas=[];
    
    page_${inputs[0]}.uiComponents=${uicomponentsStr};

    page_${inputs[0]}.useAllGlobalObjects=false;

    page_${inputs[0]}.name='${inputs[0]}';

    page_${inputs[0]}.__TYPE='PAGE';

    page_${inputs[0]}.modules=${modulesStr};

    page_${inputs[0]}.src=${src};

    page_${inputs[0]}.Setup=function(){

    `;

    for (let i = 0; i < contents.length; i++) {
        pageCode += contents[i].code;
    }


    pageCode += `
    }
        page_${inputs[0]}.Setup.call(page_${inputs[0]});
        page_${inputs[0]}.manager=manager;
        page_${inputs[0]}.AfterSetup();
        pages.push({ 
            'page':page_${inputs[0]} ,
            'accessRange':(IS_PUBLIC)
        });

    `;

    if (!element.forSV) {
        pageCode = '';
    }

    return `

    ${pageCode}

    `;
}


module.exports = tag;
