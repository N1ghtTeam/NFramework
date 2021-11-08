const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

                            var a34f72a51_2997_45d7_9c45_64c940941d7f_module;
                        
                            var a471081a8_cdfa_4c44_934c_0b71d0f22c94_module;
                        
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
                            a34f72a51_2997_45d7_9c45_64c940941d7f_module=module;
                        })
                        let getterObj34f72a51_2997_45d7_9c45_64c940941d7f={
                            set stter(value) {
                                a34f72a51_2997_45d7_9c45_64c940941d7f_module.Set('prop',value);
                            }
                        }
                        getterObj34f72a51_2997_45d7_9c45_64c940941d7f.stter= 5;
            this.GetThisWithCallback((module)=>{
                            a471081a8_cdfa_4c44_934c_0b71d0f22c94_module=module;
                        })
                        let getterObj471081a8_cdfa_4c44_934c_0b71d0f22c94={
                            set stter(value) {
                                a471081a8_cdfa_4c44_934c_0b71d0f22c94_module.Set('prop2',value);
                            }
                        }
                        getterObj471081a8_cdfa_4c44_934c_0b71d0f22c94.stter= 10;
        
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