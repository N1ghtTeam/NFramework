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

        

            var result_1bc93e86_2595_4833_b934_a3186c00c719=document.createElement('style');
            
            
        var attributes_1bc93e86_2595_4833_b934_a3186c00c719=[];
    

            result_1bc93e86_2595_4833_b934_a3186c00c719.innerHTML+=
""+'\r\n                demo-component{\r\n                    color:red;\r\n                }\r\n            '+""
;
            
            if(result_1bc93e86_2595_4833_b934_a3186c00c719.render!=null){
                result_1bc93e86_2595_4833_b934_a3186c00c719.render();
            }

    
        
        return result_1bc93e86_2595_4833_b934_a3186c00c719;

    })()
        


        );
    }

        
            }

            customElements.define('demo-component', demo_component_class);

        

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['6b0fadc6_669f_4d99_8762_06ced72cb37a']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['6b0fadc6_669f_4d99_8762_06ced72cb37a']=true;
                        
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
                if(window.NFramework.customTags['ui']['demo_component']!=null){
                    let r_demo_component = 

    (()=>{

        

            var result_5303fda0_a311_4818_a7f0_a94afc1b46a7=document.createElement('demo-component');
            
            
        var attributes_5303fda0_a311_4818_a7f0_a94afc1b46a7=[];
    
                var a5303fda0_a311_4818_a7f0_a94afc1b46a7onclick=true;
                attributes_5303fda0_a311_4818_a7f0_a94afc1b46a7.push({
                    key:'onclick',
                    value:(()=>{return a5303fda0_a311_4818_a7f0_a94afc1b46a7onclick='console.log("ok");'})()
                });
                result_5303fda0_a311_4818_a7f0_a94afc1b46a7.setAttribute('onclick',(()=>{return a5303fda0_a311_4818_a7f0_a94afc1b46a7onclick='console.log("ok");'})());
            

            result_5303fda0_a311_4818_a7f0_a94afc1b46a7.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            
            if(result_5303fda0_a311_4818_a7f0_a94afc1b46a7.render!=null){
                result_5303fda0_a311_4818_a7f0_a94afc1b46a7.render();
            }

    
        
        return result_5303fda0_a311_4818_a7f0_a94afc1b46a7;

    })()
        

;
                    return r_demo_component;
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
                

                