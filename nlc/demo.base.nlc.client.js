(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.base.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.base.nlc.client.js";

            try{
                ScopeId = ScopeId;
            }
            catch{
                ScopeId = null;
            }
            manager = window.NFramework.nmoduleManager;


                    
        var preISPUBLIC=IS_PUBLIC;
        IS_PUBLIC = 1;
        

        
                    if(window.NFramework.nmoduleManager.nlcElementRunned['55103e80_a327_416d_89b5_dd4e496225e5']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['55103e80_a327_416d_89b5_dd4e496225e5']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='demo-base';

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