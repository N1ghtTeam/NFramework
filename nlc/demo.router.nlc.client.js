(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.router.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.router.nlc.client.js";
manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['1bcb041f_79a6_4410_a8ad_7e08db5715e5']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['1bcb041f_79a6_4410_a8ad_7e08db5715e5']=true;
                        
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
                
            (manager.Get('demoPage')).Render(req,res)
                
        }

    
    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                
        })()