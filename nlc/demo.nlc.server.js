const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

                            var a8fa861d6_809f_4abb_89be_baace883a28e_module;
                        
                            var a2781cbca_f751_45ad_b4b6_bd974078d76f_module;
                        
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
                            a8fa861d6_809f_4abb_89be_baace883a28e_module=module;
                        })
                        let getterObj8fa861d6_809f_4abb_89be_baace883a28e={
                            set stter(value) {
                                a8fa861d6_809f_4abb_89be_baace883a28e_module.Set('prop',value);
                            }
                        }
                        getterObj8fa861d6_809f_4abb_89be_baace883a28e.stter= 5;
            this.GetThisWithCallback((module)=>{
                            a2781cbca_f751_45ad_b4b6_bd974078d76f_module=module;
                        })
                        let getterObj2781cbca_f751_45ad_b4b6_bd974078d76f={
                            set stter(value) {
                                a2781cbca_f751_45ad_b4b6_bd974078d76f_module.Set('prop2',value);
                            }
                        }
                        getterObj2781cbca_f751_45ad_b4b6_bd974078d76f.stter= 10;
        
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