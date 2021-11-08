
                            var a42cafb1a_86cd_4648_8d94_1642bd1d4b00_module;
                        
                            var a5a41f865_9847_43e6_a991_5e235adc1626_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['21a5d493_21c0_4720_b8fe_4e16ee1d49eb']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['21a5d493_21c0_4720_b8fe_4e16ee1d49eb']=true;
                        
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
                            a42cafb1a_86cd_4648_8d94_1642bd1d4b00_module=module;
                        })
                        let getterObj42cafb1a_86cd_4648_8d94_1642bd1d4b00={
                            set stter(value) {
                                a42cafb1a_86cd_4648_8d94_1642bd1d4b00_module.Set('prop',value);
                            }
                        }
                        getterObj42cafb1a_86cd_4648_8d94_1642bd1d4b00.stter= 5;
            this.GetThisWithCallback((module)=>{
                            a5a41f865_9847_43e6_a991_5e235adc1626_module=module;
                        })
                        let getterObj5a41f865_9847_43e6_a991_5e235adc1626={
                            set stter(value) {
                                a5a41f865_9847_43e6_a991_5e235adc1626_module.Set('prop2',value);
                            }
                        }
                        getterObj5a41f865_9847_43e6_a991_5e235adc1626.stter= 10;
        
        }

    

    return f.call(this,...args);

}

    );

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                