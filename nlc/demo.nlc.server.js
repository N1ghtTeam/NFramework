(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

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

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [
            (()=>{
                let me=(()=>{
                    try{
                        return (demo-base);
                    }
                    catch{
                        return `demo-base`;
                    }
                })();
                if(me instanceof NModule){
                    return me.name;
                }
                else{
                    return me;
                }
            })()
        ];

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

        

            nmodules.push(nmodule);

        

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}
        })()