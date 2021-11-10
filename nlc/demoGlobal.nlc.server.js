(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demoGlobal.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demoGlobal.nlc.client.js";

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
    exports.ScopeId=ScopeId;
    return exports;
}
        
            IS_PUBLIC = -1;
        })()