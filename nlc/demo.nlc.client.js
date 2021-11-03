
                            var a67962c4b_60a4_41ad_9710_dfed71769873_module;
                        manager = window.NFramework.nmoduleManager;


                    
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['my_button']=true;
            class my_button_class extends HTMLElement{

                constructor(){
                    super();
                    this.componentName='my-button';
                }                

            
    render(){

        

        let styleE = document.createElement('style');

        styleE.textContent = `

            my-button{
                color: blue;
            }

        `;

        this.appendChild(styleE);
    

        return(
            [

    (()=>{

        

            var result_8e5054e4_a1d4_4439_8f7b_dd8e3ff6ca5b=document.createElement('h1');
            
            
        var attributes_8e5054e4_a1d4_4439_8f7b_dd8e3ff6ca5b=[];
    

            result_8e5054e4_a1d4_4439_8f7b_dd8e3ff6ca5b.innerHTML+=
""+'\r\n                    h1\r\n                '+""
;
            
            if(result_8e5054e4_a1d4_4439_8f7b_dd8e3ff6ca5b.render!=null){
                let childs = result_8e5054e4_a1d4_4439_8f7b_dd8e3ff6ca5b.render();
                if(childs!=null){
                    for(let child of childs){
                        result_8e5054e4_a1d4_4439_8f7b_dd8e3ff6ca5b.appendChild(child);
                    }
                }
            }

    
        
        return result_8e5054e4_a1d4_4439_8f7b_dd8e3ff6ca5b;

    })()
        

,

    (()=>{

        

            var result_dd85e861_eee6_4bbf_8a0d_2fb662e61ddf=document.createElement('h1');
            
            
        var attributes_dd85e861_eee6_4bbf_8a0d_2fb662e61ddf=[];
    

            result_dd85e861_eee6_4bbf_8a0d_2fb662e61ddf.innerHTML+=
""+'\r\n                    h2\r\n                '+""
;
            
            if(result_dd85e861_eee6_4bbf_8a0d_2fb662e61ddf.render!=null){
                let childs = result_dd85e861_eee6_4bbf_8a0d_2fb662e61ddf.render();
                if(childs!=null){
                    for(let child of childs){
                        result_dd85e861_eee6_4bbf_8a0d_2fb662e61ddf.appendChild(child);
                    }
                }
            }

    
        
        return result_dd85e861_eee6_4bbf_8a0d_2fb662e61ddf;

    })()
        

,

    (()=>{

        

            var result_3fa8ee4f_a4c4_4406_9ec1_26a24d88dc05=document.createElement('h1');
            
            
        var attributes_3fa8ee4f_a4c4_4406_9ec1_26a24d88dc05=[];
    

            result_3fa8ee4f_a4c4_4406_9ec1_26a24d88dc05.innerHTML+=
""+'\r\n                    h3\r\n                '+""
;
            
            if(result_3fa8ee4f_a4c4_4406_9ec1_26a24d88dc05.render!=null){
                let childs = result_3fa8ee4f_a4c4_4406_9ec1_26a24d88dc05.render();
                if(childs!=null){
                    for(let child of childs){
                        result_3fa8ee4f_a4c4_4406_9ec1_26a24d88dc05.appendChild(child);
                    }
                }
            }

    
        
        return result_3fa8ee4f_a4c4_4406_9ec1_26a24d88dc05;

    })()
        

,]
        )
        
    }

        
            }

            customElements.define('my-button', my_button_class);

        

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['0e13145f_0401_4df2_9cc1_8028ecdcc2ae']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['0e13145f_0401_4df2_9cc1_8028ecdcc2ae']=true;
                        
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
    
    

    this.AddProperty('prop');

    
    
        
        this.AddMethod('setup',async (...args)=>{
                let f=async function(){

                this.GetThisWithCallback((module)=>{
                            a67962c4b_60a4_41ad_9710_dfed71769873_module=module;
                        })
                        let getterObj67962c4b_60a4_41ad_9710_dfed71769873={
                            set stter(value) {
                                a67962c4b_60a4_41ad_9710_dfed71769873_module.Set('prop',value);
                            }
                        }
                        getterObj67962c4b_60a4_41ad_9710_dfed71769873.stter='console.log("clicked");';

                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(
                    
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['my_button']!=null){
                    let r_my_button = 

    (()=>{

        

            var result_83fee3ab_82ec_4377_9b6c_ae6860d1718c=document.createElement('my-button');
            
            
        var attributes_83fee3ab_82ec_4377_9b6c_ae6860d1718c=[];
    

            result_83fee3ab_82ec_4377_9b6c_ae6860d1718c.innerHTML+=
""+'\r\n\r\n                        Youtube\r\n\r\n                    '+""
;
            
            if(result_83fee3ab_82ec_4377_9b6c_ae6860d1718c.render!=null){
                let childs = result_83fee3ab_82ec_4377_9b6c_ae6860d1718c.render();
                if(childs!=null){
                    for(let child of childs){
                        result_83fee3ab_82ec_4377_9b6c_ae6860d1718c.appendChild(child);
                    }
                }
            }

    
        
        return result_83fee3ab_82ec_4377_9b6c_ae6860d1718c;

    })()
        

;
                    return r_my_button;
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
                

                