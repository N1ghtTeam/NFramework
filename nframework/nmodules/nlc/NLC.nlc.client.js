(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nframework\\nmodules\\nlc";
const JSSVPath = "D:\\MyTechs\\nframework\\nframework/nmodules/nlc/NLC.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/nlc/NLC.nlc.client.js";

            try{
                ScopeId = ScopeId;
            }
            catch{
                ScopeId = null;
            }
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['ffa08336_beee_4d4e_a6c4_a21f98d6eb82']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['ffa08336_beee_4d4e_a6c4_a21f98d6eb82']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='NLC';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

    

        
        this.AddMethod('Execute',async (...args)=>{
                let f=async function(code){

                let compiledCode = await this.GetThisWithCallback((module)=>{
                            return module.Get('Compile');
                        })(code);

                return Function(compiledCode)();

            }

        
                let f2=f.bind(this);
                return await f2(...args);
            }

        );

    

        
        this.AddMethod('TExecute',(...args) => {
            let f=
    
            
            
                        function acee77c26_fbd7_48cd_b27b_965a7e5a332a(...params){
                            let this_acee77c26_fbd7_48cd_b27b_965a7e5a332a=this;
                            return (
                                async function tfresult_acee77c26_fbd7_48cd_b27b_965a7e5a332a(T){
                                    var src=(async function  (forSV){

                let compiledCode = await (manager.Get('NLC',ScopeId)).GetThisWithCallback((module)=>{
                            return module.Get('Compile');
                        })(T,forSV);

                return Function(compiledCode)();

            });
                                    var srcR=await src(...params);
                                    return srcR;
                                }
                            );
                        }
                        

        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('Compile',async (...args)=>{
                let f=async function(code){

                let url=window.origin+'/nlc-compile/';

                let parsedCodeForURL = encodeURIComponent(code);

                url += parsedCodeForURL;

                let response = await fetch(url); 

                let data = await response.json();

                return data.compiledCode;

            }

        
                let f2=f.bind(this);
                return await f2(...args);
            }

        );

    

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                
        
            IS_PUBLIC = -1;
        })()