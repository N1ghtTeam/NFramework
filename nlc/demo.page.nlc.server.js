(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.page.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.page.nlc.client.js";

            var namespace=[];
            
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

    

                    
        namespace.push('demo-namespace');
        
    
        
    

    

    let Page=require('D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../page/page');

    let page_demoPage=new Page();

    page_demoPage.customTypeDatas=[];
    
    page_demoPage.uiComponents=[];

    page_demoPage.useAllGlobalObjects=false;

    page_demoPage.name=

        ((()=>{
            
            if(namespace.length==0){
                return `demoPage`;
            }
            else{
                let result=`demoPage`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ;

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

    

    


        namespace.splice(namespace.length-1,1);
        'NFRAMEWORK';'ENDNAMESPACE';
    

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}
        
        })()