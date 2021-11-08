
                            var abac35832_e8aa_49f9_8dbc_23870746b56d_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['37983c03_0393_4a2a_822b_498b7b2e4625']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['37983c03_0393_4a2a_822b_498b7b2e4625']=true;
                        
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
                            abac35832_e8aa_49f9_8dbc_23870746b56d_module=module;
                        })
                        let getterObjbac35832_e8aa_49f9_8dbc_23870746b56d={
                            set stter(value) {
                                abac35832_e8aa_49f9_8dbc_23870746b56d_module.Set('propb',value);
                            }
                        }
                        getterObjbac35832_e8aa_49f9_8dbc_23870746b56d.stter=5;

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                