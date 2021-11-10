(()=>{
            const JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/nlc/NLC.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework\\nframework/nmodules/nlc/NLC.nlc.server.js";
var scopeId = "D:\\MyTechs\\nframework\\nframework/nmodules/nlc";


            var IS_THIS_PUBLIC = true;

            try{
                scopeId = scopeId;
            }
            catch{
                scopeId = 'global';
            }

            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['0c847ea2_6fd1_4e85_bcb7_db7c2f86358b']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['0c847ea2_6fd1_4e85_bcb7_db7c2f86358b']=true;
                        
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
    
            
            
                        function ac97ebc55_ba81_4d04_9b81_f906fae0714b(...params){
                            let this_ac97ebc55_ba81_4d04_9b81_f906fae0714b=this;
                            return (
                                async function tfresult_ac97ebc55_ba81_4d04_9b81_f906fae0714b(T){
                                    var src=(async function  (forSV){

                let compiledCode = await (manager.Get('NLC',scopeId)).GetThisWithCallback((module)=>{
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
                

                
            
            IS_THIS_PUBLIC=false;
            
        
        })()