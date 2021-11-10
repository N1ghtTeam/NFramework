(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";
manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['4a7c1498_4af0_453b_b7cf_0e3ac8e68731']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['4a7c1498_4af0_453b_b7cf_0e3ac8e68731']=true;
                        
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
                

                
        })()