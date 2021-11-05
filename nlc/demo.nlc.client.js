manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['d4c40c6a_db70_4f73_937b_2f80807f33bd']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['d4c40c6a_db70_4f73_937b_2f80807f33bd']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    
    
    
        
        

    this.AddProperty('prop');

    

        
        this.AddMethod('CreateEC',(...args) => {
            let f=
    

            
                        function aa6f0fabc_7eff_4e60_a375_bf402b8cfc4c(...params){
                            let this_aa6f0fabc_7eff_4e60_a375_bf402b8cfc4c=this;
                            return (
                                function tfresult_aa6f0fabc_7eff_4e60_a375_bf402b8cfc4c(T){
                                    var src=(function (e) {
                return(
                    new T()
                );
            });
                                    var srcR=src.call(this_aa6f0fabc_7eff_4e60_a375_bf402b8cfc4c,...params);
                                    return srcR;
                                }
                            );
                        }
                        

        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('setup',async (...args)=>{
                let f=async function(){


            
            }

        
                let f2=f.bind(this);
                return await f2(...args);
            }

        );

    

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                