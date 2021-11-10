(()=>{
            const JSCLPath = "D:\\MyTechs\\nframework/nlc/demoGlobal.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demoGlobal.nlc.server.js";
var scopeId = "D:\\MyTechs\\nframework/nlc";


            var IS_THIS_PUBLIC = true;

            try{
                scopeId = scopeId;
            }
            catch{
                scopeId = 'global';
            }

            
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

    

                    exports.customTypeDatas.Add('demoGlobal',
        (()=>{
            let fs=require('fs');
            let clientVersion=JSCLPath;
            let client_js_code=fs.readFileSync(clientVersion).toString();
            manager.globalObjectSourceCodes['demoGlobal']=client_js_code;
            let data=

'Hello World'

;
            return data;
        })())

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}
            
            IS_THIS_PUBLIC=false;
            
        
        })()