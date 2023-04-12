(()=>{
            var ScopeId = "C:\\NCoder\\NFramework\\nframework/nmodules/nlc";
const JSSVPath = "C:\\NCoder\\NFramework\\nframework/nmodules/nlc/NLC.nlc.server.js";
const JSCLPath = "C:\\NCoder\\NFramework\\nframework/nmodules/nlc/NLC.nlc.client.js";

            var namespace=[];
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['f2c2a2c2_ec47_4ba2_8b2e_b03c6eed2ceb']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['f2c2a2c2_ec47_4ba2_8b2e_b03c6eed2ceb']=true;
                        
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
            let f=(
    
            
            
                        function aea037feb_5fa0_4908_ac74_94bc98f1db72(...params){
                            let this_aea037feb_5fa0_4908_ac74_94bc98f1db72=this;
                            return (
                                async function tfresult_aea037feb_5fa0_4908_ac74_94bc98f1db72(T){
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
                        

        );

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