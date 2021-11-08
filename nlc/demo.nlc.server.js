const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

                            var a3094979f_e410_4f1e_9bd8_89d575ab30b2_module;
                        
                            var aa16f4126_6006_4d17_845c_0fa6a4cd11df_module;
                        
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
                            a3094979f_e410_4f1e_9bd8_89d575ab30b2_module=module;
                        })
                        let getterObj3094979f_e410_4f1e_9bd8_89d575ab30b2={
                            set stter(value) {
                                a3094979f_e410_4f1e_9bd8_89d575ab30b2_module.Set('prop',value);
                            }
                        }
                        getterObj3094979f_e410_4f1e_9bd8_89d575ab30b2.stter= 5;
            this.GetThisWithCallback((module)=>{
                            aa16f4126_6006_4d17_845c_0fa6a4cd11df_module=module;
                        })
                        let getterObja16f4126_6006_4d17_845c_0fa6a4cd11df={
                            set stter(value) {
                                aa16f4126_6006_4d17_845c_0fa6a4cd11df_module.Set('prop2',value);
                            }
                        }
                        getterObja16f4126_6006_4d17_845c_0fa6a4cd11df.stter= 10;
        
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