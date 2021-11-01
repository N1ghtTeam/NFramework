const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

                            var afa69be54_563e_43a8_96ea_6e90b18c542a_module;
                        
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

    

                    exports.customTypeDatas.Add('demoGlobalInDemoNLC',
        (()=>{
            let fs=require('fs');
            let clientVersion=JSCLPath;
            let client_js_code=fs.readFileSync(clientVersion).toString();
            manager.globalObjectSourceCodes['demoGlobalInDemoNLC']=client_js_code;
            let data=

6

;
            return data;
        })())

                

                    

        let NModule=
        function() {
            return require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule");
        }()

    ;

        let nmodule=new NModule();

        let This=nmodule;

        nmodule.side='both';

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

    this.AddSyncProperty('sp');

    

    

        
        this.AddMethod('setup',(...args) => {
            let f=
    

            function(){

                this.GetThisWithCallback((module)=>{
                            afa69be54_563e_43a8_96ea_6e90b18c542a_module=module;
                        })
                        let getterObjfa69be54_563e_43a8_96ea_6e90b18c542a={
                            set stter(value) {
                                afa69be54_563e_43a8_96ea_6e90b18c542a_module.Set('sp',value);
                            }
                        }
                        getterObjfa69be54_563e_43a8_96ea_6e90b18c542a.stter=5;

            }

        

    return f.call(this,...args);

}

    );

    

    

    


        });
    

        let fs=require('fs');

        let clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        if(nmodule.side!='server'){
            nmodule.Routing('/nlc/demo', (req, res) => res.send(nmodule.client_js_code));
        }

        

            nmodules.push(nmodule);

        

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}