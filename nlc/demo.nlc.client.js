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

        

            var result_830f8a61_7bc2_4b05_8669_a7b51e87b2fe=document.createElement('style');
            
            
        var attributes_830f8a61_7bc2_4b05_8669_a7b51e87b2fe=[];
    

            result_830f8a61_7bc2_4b05_8669_a7b51e87b2fe.innerHTML+=
""+'\r\n                demo-component{\r\n                    color:red;\r\n                }\r\n            '+""
;
            
            if(result_830f8a61_7bc2_4b05_8669_a7b51e87b2fe.render!=null){
                result_830f8a61_7bc2_4b05_8669_a7b51e87b2fe.render();
            }

    
        
        return result_830f8a61_7bc2_4b05_8669_a7b51e87b2fe;

    })()
        


        );
    }

        
            }

            customElements.define('demo-component', demo_component_class);

        

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['f3dc9a61_b4cd_4148_8d5e_e385d5ed2df9']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['f3dc9a61_b4cd_4148_8d5e_e385d5ed2df9']=true;
                        
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

        

            var result_5f5f398e_9d38_44d8_a05b_613101c47770=document.createElement('demo-component');
            
            
        var attributes_5f5f398e_9d38_44d8_a05b_613101c47770=[];
    
                var a5f5f398e_9d38_44d8_a05b_613101c47770onclick=true;
                attributes_5f5f398e_9d38_44d8_a05b_613101c47770.push({
                    key:'onclick',
                    value:(()=>{return a5f5f398e_9d38_44d8_a05b_613101c47770onclick='console.log("ok");'})()
                });
                result_5f5f398e_9d38_44d8_a05b_613101c47770.setAttribute('onclick',(()=>{return a5f5f398e_9d38_44d8_a05b_613101c47770onclick='console.log("ok");'})());
            

            result_5f5f398e_9d38_44d8_a05b_613101c47770.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            
            if(result_5f5f398e_9d38_44d8_a05b_613101c47770.render!=null){
                result_5f5f398e_9d38_44d8_a05b_613101c47770.render();
            }

    
        
        return result_5f5f398e_9d38_44d8_a05b_613101c47770;

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
                

                