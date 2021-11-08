const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

                            var a564c7a99_0f56_4748_8fa3_42c26052aaf0_module;
                        
                            var aa19166c9_b0ee_4bb3_ad8a_3a330ab8ca91_module;
                        
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
                            a564c7a99_0f56_4748_8fa3_42c26052aaf0_module=module;
                        })
                        let getterObj564c7a99_0f56_4748_8fa3_42c26052aaf0={
                            set stter(value) {
                                a564c7a99_0f56_4748_8fa3_42c26052aaf0_module.Set('prop',value);
                            }
                        }
                        getterObj564c7a99_0f56_4748_8fa3_42c26052aaf0.stter= 5;
            this.GetThisWithCallback((module)=>{
                            aa19166c9_b0ee_4bb3_ad8a_3a330ab8ca91_module=module;
                        })
                        let getterObja19166c9_b0ee_4bb3_ad8a_3a330ab8ca91={
                            set stter(value) {
                                aa19166c9_b0ee_4bb3_ad8a_3a330ab8ca91_module.Set('prop2',value);
                            }
                        }
                        getterObja19166c9_b0ee_4bb3_ad8a_3a330ab8ca91.stter= 10;
        
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