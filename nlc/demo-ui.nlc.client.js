manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['1d41a11c_dcfe_46fb_8d50_beda454bb5de']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['1d41a11c_dcfe_46fb_8d50_beda454bb5de']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='demo-2';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    
    

        
        this.AddMethod('setup',async (...args)=>{
                let f=async function(){


                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(
                    
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_component_2']!=null){
                    let r_demo_component_2 = 

    (()=>{

        

            var result_c1d501c1_364a_4a1c_b2b3_1027b39c9e06=document.createElement('demo-component-2');
            
            
        var attributes_c1d501c1_364a_4a1c_b2b3_1027b39c9e06=[];
    

            result_c1d501c1_364a_4a1c_b2b3_1027b39c9e06.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            
            if(result_c1d501c1_364a_4a1c_b2b3_1027b39c9e06.render!=null){
                result_c1d501c1_364a_4a1c_b2b3_1027b39c9e06.render();
            }

    
        
        return result_c1d501c1_364a_4a1c_b2b3_1027b39c9e06;

    })()
        

;
                    return r_demo_component_2;
                }
            }
            
            })()
        
                );

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
                

                