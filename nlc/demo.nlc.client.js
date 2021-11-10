(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

            var namespace=[];
            manager = window.NFramework.nmoduleManager;


                    
        namespace.push('demo-namespace');
        
    

    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['87f24769_3b0d_481f_a511_37fd9c7a6369']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['87f24769_3b0d_481f_a511_37fd9c7a6369']=true;
                         manager.customTypeDatas[

        ((()=>{
            
            if(namespace.length==0){
                return `gobj`;
            }
            else{
                let result=`gobj`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ]=(()=>{
            let data=

        5

    ;
            return data;
        })();
                    }
                

    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['0644d051_93e5_4662_a3b6_72c8b75c028a']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['0644d051_93e5_4662_a3b6_72c8b75c028a']=true;
                        
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
                return `demo`;
            }
            else{
                let result=`demo`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ;

        nmodule.name=nmoduleName;

        nmodule.shortName=`demo`;

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [
            (()=>{
                let me=(()=>{
                    try{
                        return (demo-base);
                    }
                    catch{
                        return `demo-base`;
                    }
                })();
                if(me instanceof NModule){
                    return me.name;
                }
                else{
                    return me;
                }
            })()
        ];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    
        
        this.AddMethod('setup',(...args) => {
            let f=
    
            function(){

                
                            var bd5e0c8c6_8944_48d3_86fe_afaf39039ccd = {
                                set stter(value){
                                    manager.Set('demo-namespace:gobj',value);
                                }
                            }
                            bd5e0c8c6_8944_48d3_86fe_afaf39039ccd.stter = 7;

                console.log((manager.Get('demo-namespace:gobj')));

            }
        

    return f.call(this,...args);

}

    );

    

    
        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                


        namespace.splice(namespace.length-1,1);
        'NFRAMEWORK';'ENDNAMESPACE';
    

                
        
        })()