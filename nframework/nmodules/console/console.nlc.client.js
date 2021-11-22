(()=>{
            var ScopeId = "D:\\NCity\\nframework/nmodules/console";
const JSSVPath = "D:\\NCity\\nframework/nmodules/console/console.nlc.server.js";
const JSCLPath = "D:\\NCity\\nframework/nmodules/console/console.nlc.client.js";

            var namespace=[];
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['bc045bdb_db3e_489a_a07e_4f7fd56a874f']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['bc045bdb_db3e_489a_a07e_4f7fd56a874f']=true;
                        
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