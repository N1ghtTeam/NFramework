(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.router.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.router.nlc.client.js";

            try{
                ScopeId = ScopeId;
            }
            catch{
                ScopeId = null;
            }
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['8f2df30b_3731_4603_99c8_06ecc7dc1ebe']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['8f2df30b_3731_4603_99c8_06ecc7dc1ebe']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='demo-router';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
        

        (req,res)=>{
                
            (manager.Get('demoPage',ScopeId)).Render(req,res)
                
        }

    
    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                
        
            IS_PUBLIC = -1;
        })()