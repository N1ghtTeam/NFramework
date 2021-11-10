(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nlc\\demo2";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo2/demo.base2.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo2/demo.base2.nlc.client.js";

            try{
                ScopeId = ScopeId;
            }
            catch{
                ScopeId = null;
            }
            manager = window.NFramework.nmoduleManager;


                    
        var preISPUBLIC=IS_PUBLIC;
        IS_PUBLIC = 0;
        

        
                    if(window.NFramework.nmoduleManager.nlcElementRunned['a3e57c8e_0ed1_427d_992b_694c9b039c47']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['a3e57c8e_0ed1_427d_992b_694c9b039c47']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='demo-base2';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

        
        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                


        IS_PUBLIC = preISPUBLIC;    
    

                
        
            IS_PUBLIC = -1;
        })()