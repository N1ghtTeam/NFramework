manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['4cafa048_1a36_4525_bbb4_323c84d6e8d3']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['4cafa048_1a36_4525_bbb4_323c84d6e8d3']=true;
                        
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
    

            
                        function abca6285a_fd9f_4e6b_9a5e_5b90f529169d(...params){
                            let this_abca6285a_fd9f_4e6b_9a5e_5b90f529169d=this;
                            return (
                                function tfresult_abca6285a_fd9f_4e6b_9a5e_5b90f529169d(T){
                                    var src=(function (e) {
                return(
                    new T()
                );
            });
                                    var srcR=src.call(this_abca6285a_fd9f_4e6b_9a5e_5b90f529169d,...params);
                                    return srcR;
                                }
                            );
                        }
                        

        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('setup',async (...args)=>{
                let f=async function(){

                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(
                    await (manager.Get('NLC')).GetThisWithCallback((module)=>{
                            return module.Get('TExecute');
                        })()
                        ((
                                `
                                    <use html>
                                    <use dom>
                                    
                                    <region>

                                        return(
                                            <div>
                                                Hello World
                                            </div>
                                        );

                                    </region>
                                `
                            ))
                );
            
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
                

                