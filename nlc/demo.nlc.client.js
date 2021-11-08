
                            var a68bba7ad_fb6e_409b_9a72_4b50f519e89f_module;
                        
                            var ac78958cd_842b_4de3_8240_1fd35e126f73_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['546fc405_141c_43db_9844_d109e18b1cbc']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['546fc405_141c_43db_9844_d109e18b1cbc']=true;
                        
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
                            a68bba7ad_fb6e_409b_9a72_4b50f519e89f_module=module;
                        })
                        let getterObj68bba7ad_fb6e_409b_9a72_4b50f519e89f={
                            set stter(value) {
                                a68bba7ad_fb6e_409b_9a72_4b50f519e89f_module.Set('prop',value);
                            }
                        }
                        getterObj68bba7ad_fb6e_409b_9a72_4b50f519e89f.stter= 5;
            this.GetThisWithCallback((module)=>{
                            ac78958cd_842b_4de3_8240_1fd35e126f73_module=module;
                        })
                        let getterObjc78958cd_842b_4de3_8240_1fd35e126f73={
                            set stter(value) {
                                ac78958cd_842b_4de3_8240_1fd35e126f73_module.Set('prop2',value);
                            }
                        }
                        getterObjc78958cd_842b_4de3_8240_1fd35e126f73.stter= 10;
        
        }

    

    return f.call(this,...args);

}

    );

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                