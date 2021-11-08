const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

                            var ae92a29f1_59a1_46fe_85a5_01f493b5f310_module;
                        
                            var a6d14d182_5119_4347_990d_0fb297d15ced_module;
                        
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

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

    this.AddProperty('prop');

    

    

    this.AddProperty('prop2');

    

    
        this.AddMethod('setup',(...args) => {
            let f=
    
        
        function(){

            this.GetThisWithCallback((module)=>{
                            ae92a29f1_59a1_46fe_85a5_01f493b5f310_module=module;
                        })
                        let getterObje92a29f1_59a1_46fe_85a5_01f493b5f310={
                            set stter(value) {
                                ae92a29f1_59a1_46fe_85a5_01f493b5f310_module.Set('prop',value);
                            }
                        }
                        getterObje92a29f1_59a1_46fe_85a5_01f493b5f310.stter= 5;
            this.GetThisWithCallback((module)=>{
                            a6d14d182_5119_4347_990d_0fb297d15ced_module=module;
                        })
                        let getterObj6d14d182_5119_4347_990d_0fb297d15ced={
                            set stter(value) {
                                a6d14d182_5119_4347_990d_0fb297d15ced_module.Set('prop2',value);
                            }
                        }
                        getterObj6d14d182_5119_4347_990d_0fb297d15ced.stter= 10;
        
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