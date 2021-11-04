const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

                            var a896931ed_b709_4758_aee8_a03867bde68d_module;
                        
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

        nmodule.side='both';

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

    this.AddSyncProperty('prop');

    

    

        
        this.AddMethod('setup',(...args) => {
            let f=
    

            function(){
                this.GetThisWithCallback((module)=>{
                            a896931ed_b709_4758_aee8_a03867bde68d_module=module;
                        })
                        let getterObj896931ed_b709_4758_aee8_a03867bde68d={
                            set stter(value) {
                                a896931ed_b709_4758_aee8_a03867bde68d_module.Set('prop',value);
                            }
                        }
                        getterObj896931ed_b709_4758_aee8_a03867bde68d.stter=5;
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