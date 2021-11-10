(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nlc\\ui";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.client.js";

            try{
                ScopeId = ScopeId;
            }
            catch{
                ScopeId = null;
            }
            
module.exports = (manager) => {
    var isServer=true;
    IS_PUBLIC       = 0;
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

    

                    
        
            var fs=require('fs');

            var demo_main_ui_code=fs.readFileSync(JSCLPath).toString();

            var express_server = manager.NFramework.express_server;

            var demo_main_ui_path='/nlc/demo-main-ui';

            manager.uiComponents.push('demo-main-ui');

            express_server.get(demo_main_ui_path, (req, res) => {

                res.send(demo_main_ui_code);

            });

        
        

                

                    
        
            var fs=require('fs');

            var demo_ui_code=fs.readFileSync(JSCLPath).toString();

            var express_server = manager.NFramework.express_server;

            var demo_ui_path='/nlc/demo-ui';

            manager.uiComponents.push('demo-ui');

            express_server.get(demo_ui_path, (req, res) => {

                res.send(demo_ui_code);

            });

        
        

                

                    
        
            var fs=require('fs');

            var demo_ui_base_code=fs.readFileSync(JSCLPath).toString();

            var express_server = manager.NFramework.express_server;

            var demo_ui_base_path='/nlc/demo-ui-base';

            manager.uiComponents.push('demo-ui-base');

            express_server.get(demo_ui_base_path, (req, res) => {

                res.send(demo_ui_base_code);

            });

        
        

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    exports.ScopeId=ScopeId;
    return exports;
}
        
            IS_PUBLIC = -1;
        })()