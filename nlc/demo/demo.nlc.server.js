(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nlc\\demo";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo/demo.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo/demo.nlc.client.js";

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

    

                    
        var preISPUBLIC=IS_PUBLIC;
        IS_PUBLIC = 0;
        

    

        var NModule=
        function() {
            return require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule");
        }()

    ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

        
        this.AddMethod('setup',(...args) => {
            let f=
    
            
            function(){

            }

        

    return f.call(this,...args);

}

    );

    

    
        });
    

        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        if(nmodule.side!='server'){
            nmodule.Routing('/nlc/demo', (req, res) => res.send(nmodule.client_js_code));
        }

        

            nmodules.push({
                'module':nmodule,
                'accessRange':(IS_PUBLIC)
            });

        


        IS_PUBLIC = preISPUBLIC;    
    

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    exports.ScopeId=ScopeId;
    return exports;
}
        
            IS_PUBLIC = -1;
        })()