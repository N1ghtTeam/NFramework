const JSCLPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.c1.nlc.client.js";

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

    

                    
        
            var fs=require('fs');

            var demo_ui_code=fs.readFileSync(JSCLPath).toString();

            let express_server = manager.NFramework.express_server;

            let demo_ui_path='/nlc/demo-ui';

            manager.uiComponents.push('demo-ui');

            express_server.get(demo_ui_path, (req, res) => {

                res.send(demo_ui_code);

            });

        
        

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}