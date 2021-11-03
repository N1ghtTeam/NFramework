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

        

            var result_945fa287_064b_4fc1_bea8_2381a5e0651f=document.createElement('style');
            
            
        var attributes_945fa287_064b_4fc1_bea8_2381a5e0651f=[];
    

            result_945fa287_064b_4fc1_bea8_2381a5e0651f.innerHTML+=
""+'\r\n                demo-component{\r\n                    color:red;\r\n                }\r\n            '+""
;
            
            if(result_945fa287_064b_4fc1_bea8_2381a5e0651f.render!=null){
                result_945fa287_064b_4fc1_bea8_2381a5e0651f.render();
            }

    
        
        return result_945fa287_064b_4fc1_bea8_2381a5e0651f;

    })()
        


        );
    }

        
            }

            customElements.define('demo-component', demo_component_class);

        

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['27d41a6a_7656_4bc8_bdc4_09218fee626f']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['27d41a6a_7656_4bc8_bdc4_09218fee626f']=true;
                        
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

        

            var result_b94c5d14_c298_4139_9cfa_a39c3fb9ae15=document.createElement('demo-component');
            
            
        var attributes_b94c5d14_c298_4139_9cfa_a39c3fb9ae15=[];
    
                var ab94c5d14_c298_4139_9cfa_a39c3fb9ae15onclick=true;
                attributes_b94c5d14_c298_4139_9cfa_a39c3fb9ae15.push({
                    key:'onclick',
                    value:(()=>{return ab94c5d14_c298_4139_9cfa_a39c3fb9ae15onclick='console.log("ok");'})()
                });
                result_b94c5d14_c298_4139_9cfa_a39c3fb9ae15.setAttribute('onclick',(()=>{return ab94c5d14_c298_4139_9cfa_a39c3fb9ae15onclick='console.log("ok");'})());
            

            result_b94c5d14_c298_4139_9cfa_a39c3fb9ae15.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            
            if(result_b94c5d14_c298_4139_9cfa_a39c3fb9ae15.render!=null){
                result_b94c5d14_c298_4139_9cfa_a39c3fb9ae15.render();
            }

    
        
        return result_b94c5d14_c298_4139_9cfa_a39c3fb9ae15;

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
                

                