const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.page.nlc.client.js";

module.exports = (manager) => {
    let exports     = new Object();
    let nmodules    = [];
    let pages       = [];
    exports.customTypeDatas=[];
    exports.customTypeDatas.Add=function(key,value){
        exports.customTypeDatas.push({
            'key':key,
            'value':value
        });
    }

    

                    

    

    let Page=require('D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../page/page');

    let page_demoPage=new Page();

    page_demoPage.customTypeDatas=[];
    
    page_demoPage.uiComponents=[];

    page_demoPage.useAllGlobalObjects=false;

    page_demoPage.name='demoPage';

    page_demoPage.__TYPE='PAGE';

    page_demoPage.modules=[];

    page_demoPage.src='demo.ejs';

    page_demoPage.Setup=function(){

    
    
    
            this.useAllGlobalObjects=true;
        

    
            this.uiComponents='*';
        

    
            this.modules='*';
        


    }
        page_demoPage.Setup.call(page_demoPage);
        page_demoPage.manager=manager;
        page_demoPage.AfterSetup();
        pages.push( page_demoPage);

    

    

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}