const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.base.nlc.client.js";

                            var a8a5a0334_8a8d_4bdb_8929_ce598ee389c0_module;
                        
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

        nmodule.side = 'server';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    
    
    

    this.AddProperty('propb');

    

    

        this.GetThisWithCallback((module)=>{
                            a8a5a0334_8a8d_4bdb_8929_ce598ee389c0_module=module;
                        })
                        let getterObj8a5a0334_8a8d_4bdb_8929_ce598ee389c0={
                            set stter(value) {
                                a8a5a0334_8a8d_4bdb_8929_ce598ee389c0_module.Set('propb',value);
                            }
                        }
                        getterObj8a5a0334_8a8d_4bdb_8929_ce598ee389c0.stter=5;

    


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