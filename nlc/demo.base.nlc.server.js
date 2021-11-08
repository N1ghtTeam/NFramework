const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.base.nlc.client.js";

                            var aa4d9db44_22f3_413e_8fcc_52e09d7dc1ed_module;
                        
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
                            aa4d9db44_22f3_413e_8fcc_52e09d7dc1ed_module=module;
                        })
                        let getterObja4d9db44_22f3_413e_8fcc_52e09d7dc1ed={
                            set stter(value) {
                                aa4d9db44_22f3_413e_8fcc_52e09d7dc1ed_module.Set('propb',value);
                            }
                        }
                        getterObja4d9db44_22f3_413e_8fcc_52e09d7dc1ed.stter=5;

    


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