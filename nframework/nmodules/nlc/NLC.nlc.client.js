manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['85bb3f78_daa1_4c62_87bb_14fb204b3206']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['85bb3f78_daa1_4c62_87bb_14fb204b3206']=true;
                        
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
    
            
            
                        function ad6c1060e_64f2_4bed_996d_bcab161ad4e8(...params){
                            let this_ad6c1060e_64f2_4bed_996d_bcab161ad4e8=this;
                            return (
                                async function tfresult_ad6c1060e_64f2_4bed_996d_bcab161ad4e8(T){
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
                

                