
                            var aed9e5bae_09d1_4f20_b2fa_4f3256ace462_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['b15c90dc_a87b_42ae_90b3_bbbf3c43d65e']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['b15c90dc_a87b_42ae_90b3_bbbf3c43d65e']=true;
                        
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
                            aed9e5bae_09d1_4f20_b2fa_4f3256ace462_module=module;
                        })
                        let getterObjed9e5bae_09d1_4f20_b2fa_4f3256ace462={
                            set stter(value) {
                                aed9e5bae_09d1_4f20_b2fa_4f3256ace462_module.Set('propb',value);
                            }
                        }
                        getterObjed9e5bae_09d1_4f20_b2fa_4f3256ace462.stter=5;

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                