(()=>{
            const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.base.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.base.nlc.server.js";
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

    

                    

        var NModule=
        function() {
            return require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule");
        }()

    ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='demo-base';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    


        });
    

        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        if(nmodule.side!='server'){
            nmodule.Routing('/nlc/demo-base', (req, res) => res.send(nmodule.client_js_code));
        }

        

            nmodules.push(nmodule);

        

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}
            
            IS_THIS_PUBLIC=false;
            
        
        })()