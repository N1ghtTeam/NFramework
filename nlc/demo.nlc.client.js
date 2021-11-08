
                            var ad4cd48ab_1740_478b_a048_1fe8805a0697_module;
                        
                            var a3ce7039f_69f8_42e2_96ce_ea80256852a9_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['4fcb5ec9_567f_47dc_bc53_886e363150f0']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['4fcb5ec9_567f_47dc_bc53_886e363150f0']=true;
                        
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
                            ad4cd48ab_1740_478b_a048_1fe8805a0697_module=module;
                        })
                        let getterObjd4cd48ab_1740_478b_a048_1fe8805a0697={
                            set stter(value) {
                                ad4cd48ab_1740_478b_a048_1fe8805a0697_module.Set('prop',value);
                            }
                        }
                        getterObjd4cd48ab_1740_478b_a048_1fe8805a0697.stter= 5;
            this.GetThisWithCallback((module)=>{
                            a3ce7039f_69f8_42e2_96ce_ea80256852a9_module=module;
                        })
                        let getterObj3ce7039f_69f8_42e2_96ce_ea80256852a9={
                            set stter(value) {
                                a3ce7039f_69f8_42e2_96ce_ea80256852a9_module.Set('prop2',value);
                            }
                        }
                        getterObj3ce7039f_69f8_42e2_96ce_ea80256852a9.stter= 10;
        
        }

    

    return f.call(this,...args);

}

    );

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                