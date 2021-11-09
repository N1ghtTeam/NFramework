manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['a517ffb8_154d_4bec_96ea_0f3c423121a5']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['a517ffb8_154d_4bec_96ea_0f3c423121a5']=true;
                        
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

        nmodule.baseModules = [
            (()=>{
                let me=(()=>{
                    try{
                        return (demo-base);
                    }
                    catch{
                        return `demo-base`;
                    }
                })();
                if(me instanceof NModule){
                    return me.name;
                }
                else{
                    return me;
                }
            })()
        ];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
        this.AddMethod('setup',(...args) => {
            let f=
    
        
        function(){
            
            

        }

    

    return f.call(this,...args);

}

    );

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                