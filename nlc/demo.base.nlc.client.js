
                            var a9178437d_a696_4e2f_92ae_1067278aeb21_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['8f7298a2_8555_413b_b582_ebc222e006b7']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['8f7298a2_8555_413b_b582_ebc222e006b7']=true;
                        
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
                            a9178437d_a696_4e2f_92ae_1067278aeb21_module=module;
                        })
                        let getterObj9178437d_a696_4e2f_92ae_1067278aeb21={
                            set stter(value) {
                                a9178437d_a696_4e2f_92ae_1067278aeb21_module.Set('propb',value);
                            }
                        }
                        getterObj9178437d_a696_4e2f_92ae_1067278aeb21.stter=5;

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                