
                            var a840873f0_8aab_4363_ba94_83db5b979413_module;
                        
                            var ad61925ed_332c_44e2_b9c8_a0cbfe13438a_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['185f329e_f469_46e9_977a_17f48030ea70']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['185f329e_f469_46e9_977a_17f48030ea70']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
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
                            a840873f0_8aab_4363_ba94_83db5b979413_module=module;
                        })
                        let getterObj840873f0_8aab_4363_ba94_83db5b979413={
                            set stter(value) {
                                a840873f0_8aab_4363_ba94_83db5b979413_module.Set('prop',value);
                            }
                        }
                        getterObj840873f0_8aab_4363_ba94_83db5b979413.stter= 5;
            this.GetThisWithCallback((module)=>{
                            ad61925ed_332c_44e2_b9c8_a0cbfe13438a_module=module;
                        })
                        let getterObjd61925ed_332c_44e2_b9c8_a0cbfe13438a={
                            set stter(value) {
                                ad61925ed_332c_44e2_b9c8_a0cbfe13438a_module.Set('prop2',value);
                            }
                        }
                        getterObjd61925ed_332c_44e2_b9c8_a0cbfe13438a.stter= 10;
        
        }

    

    return f.call(this,...args);

}

    );

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                