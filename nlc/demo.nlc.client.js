manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['1bd53f04_4c75_4f46_a4b2_7541c160098d']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['1bd53f04_4c75_4f46_a4b2_7541c160098d']=true;
                        
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
    

            
                        function a0fd04330_5a7a_4668_8e7e_6a2c99ef164e(...params){
                            let this_a0fd04330_5a7a_4668_8e7e_6a2c99ef164e=this;
                            return (
                                function tfresult_a0fd04330_5a7a_4668_8e7e_6a2c99ef164e(T){
                                    var src=(function (e) {
                return(
                    new T()
                );
            });
                                    var srcR=src.call(this_a0fd04330_5a7a_4668_8e7e_6a2c99ef164e,...params);
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
                

                