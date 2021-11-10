(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nlc\\demo";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo/demo.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo/demo.nlc.client.js";

            try{
                ScopeId = ScopeId;
            }
            catch{
                ScopeId = null;
            }
            manager = window.NFramework.nmoduleManager;


                    
        var preISPUBLIC=IS_PUBLIC;
        IS_PUBLIC = 0;
        

    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['ae79894f_0e0e_4a3c_8a98_1196cf72f4bb']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['ae79894f_0e0e_4a3c_8a98_1196cf72f4bb']=true;
                        
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

        nmodule.baseModules = [];

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
                


        IS_PUBLIC = preISPUBLIC;    
    

                
        
            IS_PUBLIC = -1;
        })()