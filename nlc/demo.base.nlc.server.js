const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.base.nlc.client.js";

                            var ac23e1867_95f0_49c0_98b3_24b7244becf1_module;
                        
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
                            ac23e1867_95f0_49c0_98b3_24b7244becf1_module=module;
                        })
                        let getterObjc23e1867_95f0_49c0_98b3_24b7244becf1={
                            set stter(value) {
                                ac23e1867_95f0_49c0_98b3_24b7244becf1_module.Set('propb',value);
                            }
                        }
                        getterObjc23e1867_95f0_49c0_98b3_24b7244becf1.stter=5;

    


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