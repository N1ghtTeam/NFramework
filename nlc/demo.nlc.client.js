
                            var af09ba343_f023_4211_8d4f_be0cfbeb381a_module;
                        
                            var a5a92ef63_7f09_49de_8b48_f511d4f782ac_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['81a5fd01_7c80_4687_acd9_8c415e1fae85']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['81a5fd01_7c80_4687_acd9_8c415e1fae85']=true;
                        
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
                            af09ba343_f023_4211_8d4f_be0cfbeb381a_module=module;
                        })
                        let getterObjf09ba343_f023_4211_8d4f_be0cfbeb381a={
                            set stter(value) {
                                af09ba343_f023_4211_8d4f_be0cfbeb381a_module.Set('prop',value);
                            }
                        }
                        getterObjf09ba343_f023_4211_8d4f_be0cfbeb381a.stter= 5;
            this.GetThisWithCallback((module)=>{
                            a5a92ef63_7f09_49de_8b48_f511d4f782ac_module=module;
                        })
                        let getterObj5a92ef63_7f09_49de_8b48_f511d4f782ac={
                            set stter(value) {
                                a5a92ef63_7f09_49de_8b48_f511d4f782ac_module.Set('prop2',value);
                            }
                        }
                        getterObj5a92ef63_7f09_49de_8b48_f511d4f782ac.stter= 10;
        
        }

    

    return f.call(this,...args);

}

    );

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                