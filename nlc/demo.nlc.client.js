
                            var a921a88e9_cf82_414c_a883_0894779f10f7_module;
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
    

        console.log(
            [

    (()=>{

        

            var result_57e7146f_f9a0_40d1_a274_164771e412de=document.createElement('h1');
            
            
        var attributes_57e7146f_f9a0_40d1_a274_164771e412de=[];
    

            result_57e7146f_f9a0_40d1_a274_164771e412de.innerHTML+=
""+'\r\n                    h1\r\n                '+""
;
            
            if(result_57e7146f_f9a0_40d1_a274_164771e412de.render!=null){
                result_57e7146f_f9a0_40d1_a274_164771e412de.render();
            }

    
        
        return result_57e7146f_f9a0_40d1_a274_164771e412de;

    })()
        

,

    (()=>{

        

            var result_36efdff9_9e53_4b9a_b765_37a9157606bc=document.createElement('h1');
            
            
        var attributes_36efdff9_9e53_4b9a_b765_37a9157606bc=[];
    

            result_36efdff9_9e53_4b9a_b765_37a9157606bc.innerHTML+=
""+'\r\n                    h2\r\n                '+""
;
            
            if(result_36efdff9_9e53_4b9a_b765_37a9157606bc.render!=null){
                result_36efdff9_9e53_4b9a_b765_37a9157606bc.render();
            }

    
        
        return result_36efdff9_9e53_4b9a_b765_37a9157606bc;

    })()
        

,

    (()=>{

        

            var result_2aa86b77_372e_4d44_b7f8_901828155020=document.createElement('h1');
            
            
        var attributes_2aa86b77_372e_4d44_b7f8_901828155020=[];
    

            result_2aa86b77_372e_4d44_b7f8_901828155020.innerHTML+=
""+'\r\n                    h3\r\n                '+""
;
            
            if(result_2aa86b77_372e_4d44_b7f8_901828155020.render!=null){
                result_2aa86b77_372e_4d44_b7f8_901828155020.render();
            }

    
        
        return result_2aa86b77_372e_4d44_b7f8_901828155020;

    })()
        

,]
        );

        
    }

        
            }

            customElements.define('my-button', my_button_class);

        

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['1af469e3_5cf1_4196_8531_7c79accf5b61']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['1af469e3_5cf1_4196_8531_7c79accf5b61']=true;
                        
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
                            a921a88e9_cf82_414c_a883_0894779f10f7_module=module;
                        })
                        let getterObj921a88e9_cf82_414c_a883_0894779f10f7={
                            set stter(value) {
                                a921a88e9_cf82_414c_a883_0894779f10f7_module.Set('prop',value);
                            }
                        }
                        getterObj921a88e9_cf82_414c_a883_0894779f10f7.stter='console.log("clicked");';

                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(
                    
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['my_button']!=null){
                    let r_my_button = 

    (()=>{

        

            var result_dcf65b57_66bf_4ed0_96ae_fb914f2d5309=document.createElement('my-button');
            
            
        var attributes_dcf65b57_66bf_4ed0_96ae_fb914f2d5309=[];
    

            result_dcf65b57_66bf_4ed0_96ae_fb914f2d5309.innerHTML+=
""+'\r\n\r\n                        Youtube\r\n\r\n                    '+""
;
            
            if(result_dcf65b57_66bf_4ed0_96ae_fb914f2d5309.render!=null){
                result_dcf65b57_66bf_4ed0_96ae_fb914f2d5309.render();
            }

    
        
        return result_dcf65b57_66bf_4ed0_96ae_fb914f2d5309;

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
                

                