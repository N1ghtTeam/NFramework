
                            var a35b838cf_8b2f_4a97_aa67_81e4601142d8_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['7b10979b_bab0_4d9f_84d3_a56dc8cd1f98']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['7b10979b_bab0_4d9f_84d3_a56dc8cd1f98']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
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
                            a35b838cf_8b2f_4a97_aa67_81e4601142d8_module=module;
                        })
                        let getterObj35b838cf_8b2f_4a97_aa67_81e4601142d8={
                            set stter(value) {
                                a35b838cf_8b2f_4a97_aa67_81e4601142d8_module.Set('propb',value);
                            }
                        }
                        getterObj35b838cf_8b2f_4a97_aa67_81e4601142d8.stter=5;

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                