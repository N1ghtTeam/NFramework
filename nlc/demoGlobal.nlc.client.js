(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demoGlobal.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demoGlobal.nlc.client.js";

            var namespace=[];
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['851845de_2559_48c4_911c_8d89f8468fd0']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['851845de_2559_48c4_911c_8d89f8468fd0']=true;
                         manager.customTypeDatas[

        ((()=>{
            
            if(namespace.length==0){
                return `demoGlobal`;
            }
            else{
                let result=`demoGlobal`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ]=(()=>{
            let data=

'Hello World'

;
            return data;
        })();
                    }
                

                
        
        })()