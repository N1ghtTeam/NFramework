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

    let contents = tag.GetContent(element, childsCode, code);

    let pageCode = `

    let Page=require('${pagePath}');

    let page_${inputs[0]}=new Page();

    page_${inputs[0]}.customTypeDatas=[];

    page_${inputs[0]}.useAllGlobalObjects=false;

    page_${inputs[0]}.name='${inputs[0]}';

    page_${inputs[0]}.__TYPE='PAGE';

    page_${inputs[0]}.modules=[];

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
        pages.push( page_${inputs[0]});

    `;

    if (!element.forSV) {
        pageCode = '';
    }

    return `

    ${pageCode}

    `;
}


module.exports = tag;
