(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demoGlobal.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demoGlobal.nlc.client.js";

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

    

                    exports.customTypeDatas.Add(

        ((()=>{
            
            if(namespace.length==0){
                return `demoGlobal`;
            }
            else{
                let result=`demoGlobal`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ,
        (()=>{
            let fs=require('fs');
            let clientVersion=JSCLPath;
            let client_js_code=fs.readFileSync(clientVersion).toString();
            manager.globalObjectSourceCodes[

        ((()=>{
            
            if(namespace.length==0){
                return `demoGlobal`;
            }
            else{
                let result=`demoGlobal`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ]=client_js_code;
            let data=

'Hello World'

;
            return data;
        })())

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}
        
        })()