(()=>{
            var ScopeId = "D:\\NLCDemoWeb\\nframework/nmodules/nlc";
const JSSVPath = "D:\\NLCDemoWeb\\nframework/nmodules/nlc/NLC.nlc.server.js";
const JSCLPath = "D:\\NLCDemoWeb\\nframework/nmodules/nlc/NLC.nlc.client.js";

            var namespace=[];
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['1380567d_4f34_40f3_b1aa_f4fb290484a6']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['1380567d_4f34_40f3_b1aa_f4fb290484a6']=true;
                        
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
                return `NLC`;
            }
            else{
                let result=`NLC`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ;

        nmodule.name=nmoduleName;

        nmodule.shortName=`NLC`;

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
    
            
            
                        function a18b2d032_f6ac_479f_88df_78210da90047(...params){
                            let this_a18b2d032_f6ac_479f_88df_78210da90047=this;
                            return (
                                async function tfresult_a18b2d032_f6ac_479f_88df_78210da90047(T){
                                    var src=(async function  (forSV){

                let compiledCode = await (manager.Get('NLC')).GetThisWithCallback((module)=>{
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
                

                
        
        })()