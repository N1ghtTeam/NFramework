(()=>{
            const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.base.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.base.nlc.server.js";
var scopeId = "D:\\MyTechs\\nframework/nlc";


            var IS_THIS_PUBLIC = true;

            try{
                scopeId = scopeId;
            }
            catch{
                scopeId = 'global';
            }

            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['ebb83862_ac75_4318_b11d_e1b404b02588']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['ebb83862_ac75_4318_b11d_e1b404b02588']=true;
                        
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
                

                
            
            IS_THIS_PUBLIC=false;
            
        
        })()