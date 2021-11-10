(()=>{
            var ScopeId = "D:\\MyTechs\\nframework\\nframework/nmodules/console";
const JSSVPath = "D:\\MyTechs\\nframework\\nframework/nmodules/console/console.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/console/console.nlc.client.js";

            var namespace=[];
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['e8f2f737_f17e_451a_ad6f_e49f040ca834']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['e8f2f737_f17e_451a_ad6f_e49f040ca834']=true;
                        
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