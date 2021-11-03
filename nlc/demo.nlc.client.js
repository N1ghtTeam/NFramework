manager = window.NFramework.nmoduleManager;


                    
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['demo_component']=true;
            class demo_component_class extends HTMLElement{

                constructor(){
                    super();
                }                

            
    render(){
        this.appendChild(            
            

    (()=>{

        

            var result_6157420d_df9a_4554_aea8_5a5d796f0677=document.createElement('style');
            
            
        var attributes_6157420d_df9a_4554_aea8_5a5d796f0677=[];
    

            result_6157420d_df9a_4554_aea8_5a5d796f0677.innerHTML+=
""+'\r\n                demo-component{\r\n                    color:red;\r\n                }\r\n            '+""
;
            
            if(result_6157420d_df9a_4554_aea8_5a5d796f0677.render!=null){
                result_6157420d_df9a_4554_aea8_5a5d796f0677.render();
            }

    
        
        return result_6157420d_df9a_4554_aea8_5a5d796f0677;

    })()
        


        );
    }

        
            }

            customElements.define('demo-component', demo_component_class);

        

                

                    
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['demo_component_2']=true;
            class demo_component_2_class extends HTMLElement{

                constructor(){
                    super();
                }                

            
    render(){
        this.appendChild(            
            

    (()=>{

        

            var result_42ee106d_c1fc_47d7_ac18_0b8c9d3c3f45=document.createElement('style');
            
            
        var attributes_42ee106d_c1fc_47d7_ac18_0b8c9d3c3f45=[];
    

            result_42ee106d_c1fc_47d7_ac18_0b8c9d3c3f45.innerHTML+=
""+'\r\n                demo-component-2{\r\n                    color:blue;\r\n                }\r\n            '+""
;
            
            if(result_42ee106d_c1fc_47d7_ac18_0b8c9d3c3f45.render!=null){
                result_42ee106d_c1fc_47d7_ac18_0b8c9d3c3f45.render();
            }

    
        
        return result_42ee106d_c1fc_47d7_ac18_0b8c9d3c3f45;

    })()
        


        );
    }

        
            }

            customElements.define('demo-component-2', demo_component_2_class);

        

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['dc3b6bde_a9c1_445e_9ff2_cefb421b4f92']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['dc3b6bde_a9c1_445e_9ff2_cefb421b4f92']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='demo';

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

        

            var result_9e95167d_faf8_409c_91fe_fc3e73698a89=document.createElement('demo-component-2');
            
            
        var attributes_9e95167d_faf8_409c_91fe_fc3e73698a89=[];
    

            result_9e95167d_faf8_409c_91fe_fc3e73698a89.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            
            if(result_9e95167d_faf8_409c_91fe_fc3e73698a89.render!=null){
                result_9e95167d_faf8_409c_91fe_fc3e73698a89.render();
            }

    
        
        return result_9e95167d_faf8_409c_91fe_fc3e73698a89;

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
                

                