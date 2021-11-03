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

        

            var result_9986c64a_500a_4063_9fb5_881cd5e37f26=document.createElement('style');
            
            
        var attributes_9986c64a_500a_4063_9fb5_881cd5e37f26=[];
    

            result_9986c64a_500a_4063_9fb5_881cd5e37f26.innerHTML+=
""+'\r\n                demo-component{\r\n                    color:red;\r\n                }\r\n            '+""
;
            
            if(result_9986c64a_500a_4063_9fb5_881cd5e37f26.render!=null){
                result_9986c64a_500a_4063_9fb5_881cd5e37f26.render();
            }

    
        
        return result_9986c64a_500a_4063_9fb5_881cd5e37f26;

    })()
        


        );
    }

        
            }

            customElements.define('demo-component', demo_component_class);

        

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['30d7d793_c0e7_406b_bd34_cf6696d6886d']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['30d7d793_c0e7_406b_bd34_cf6696d6886d']=true;
                        
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

        

            var result_1880ea0f_e695_40fa_9e52_58429eb10940=document.createElement('demo-component');
            
            
        var attributes_1880ea0f_e695_40fa_9e52_58429eb10940=[];
    
                var a1880ea0f_e695_40fa_9e52_58429eb10940onclick=true;
                attributes_1880ea0f_e695_40fa_9e52_58429eb10940.push({
                    key:'onclick',
                    value:(()=>{return a1880ea0f_e695_40fa_9e52_58429eb10940onclick='console.log("ok");'})()
                });
                result_1880ea0f_e695_40fa_9e52_58429eb10940.setAttribute('onclick',(()=>{return a1880ea0f_e695_40fa_9e52_58429eb10940onclick='console.log("ok");'})());
            

            result_1880ea0f_e695_40fa_9e52_58429eb10940.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            
            if(result_1880ea0f_e695_40fa_9e52_58429eb10940.render!=null){
                result_1880ea0f_e695_40fa_9e52_58429eb10940.render();
            }

    
        
        return result_1880ea0f_e695_40fa_9e52_58429eb10940;

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
                

                