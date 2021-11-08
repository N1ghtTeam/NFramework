
                            var a570ed1f6_ff1c_4b00_9fe4_dfc45e064366_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['544349df_dddc_4ec0_942d_b14e7983ce96']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['544349df_dddc_4ec0_942d_b14e7983ce96']=true;
                        
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
                            a570ed1f6_ff1c_4b00_9fe4_dfc45e064366_module=module;
                        })
                        let getterObj570ed1f6_ff1c_4b00_9fe4_dfc45e064366={
                            set stter(value) {
                                a570ed1f6_ff1c_4b00_9fe4_dfc45e064366_module.Set('propb',value);
                            }
                        }
                        getterObj570ed1f6_ff1c_4b00_9fe4_dfc45e064366.stter=5;

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                