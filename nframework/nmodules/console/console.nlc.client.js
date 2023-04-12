(()=>{
            var ScopeId = "C:\\NCoder\\NFramework\\nframework/nmodules/console";
const JSSVPath = "C:\\NCoder\\NFramework\\nframework/nmodules/console/console.nlc.server.js";
const JSCLPath = "C:\\NCoder\\NFramework\\nframework/nmodules/console/console.nlc.client.js";

            var namespace=[];
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['3c082c51_097b_4862_aaa9_b352cbc78e72']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['3c082c51_097b_4862_aaa9_b352cbc78e72']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        var nmoduleName = 

        ((()=>{
            
            if(namespace.length==0){
                return `console`;
            }
            else{
                let result=`console`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ;

        nmodule.name=nmoduleName;

        nmodule.shortName=`console`;

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
                

                
        
        })()