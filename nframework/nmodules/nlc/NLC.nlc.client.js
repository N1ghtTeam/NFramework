manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['b3eb920c_93ff_42af_afc6_650e14d32fcf']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['b3eb920c_93ff_42af_afc6_650e14d32fcf']=true;
                        
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
    
            
            
                        function ac9644d51_abb6_4ea5_98e9_28ace92fe3e8(...params){
                            let this_ac9644d51_abb6_4ea5_98e9_28ace92fe3e8=this;
                            return (
                                async function tfresult_ac9644d51_abb6_4ea5_98e9_28ace92fe3e8(T){
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
                

                