manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['35db77f4_73f0_4a92_b086_983a0695199c']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['35db77f4_73f0_4a92_b086_983a0695199c']=true;
                        
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
    

    

    this.AddSyncProperty('prop');

    

    
    
    
        
        
        this.AddMethod('setup',async (...args)=>{
                let f=async function(){

                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(
                    
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_f2fc2b98_9e8f_4795_88e3_1c73c93fde76=document.createElement('demo-ui');
            
            
        var attributes_f2fc2b98_9e8f_4795_88e3_1c73c93fde76=[];
    
                var af2fc2b98_9e8f_4795_88e3_1c73c93fde76onclick=true;
                attributes_f2fc2b98_9e8f_4795_88e3_1c73c93fde76.push({
                    key:'onclick',
                    value:(()=>{return af2fc2b98_9e8f_4795_88e3_1c73c93fde76onclick=(()=>{return'console.log("demo ui clicked");';})()})()
                });
                result_f2fc2b98_9e8f_4795_88e3_1c73c93fde76.setAttribute('onclick',(()=>{return af2fc2b98_9e8f_4795_88e3_1c73c93fde76onclick=(()=>{return'console.log("demo ui clicked");';})()})());
            

            result_f2fc2b98_9e8f_4795_88e3_1c73c93fde76.innerHTML+=
""+'\r\n                        \r\n                    '+""
;
            
            if(result_f2fc2b98_9e8f_4795_88e3_1c73c93fde76.render!=null){
                let childs = result_f2fc2b98_9e8f_4795_88e3_1c73c93fde76.render();
                if(childs!=null){
                    for(let child of childs){
                        try{
                            result_f2fc2b98_9e8f_4795_88e3_1c73c93fde76.appendChild(child);
                        }
                        catch{
                            result_f2fc2b98_9e8f_4795_88e3_1c73c93fde76.innerHTML+=child;
                        }
                    }
                }
            }

    
        
        return result_f2fc2b98_9e8f_4795_88e3_1c73c93fde76;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        

                );
                
                class NewT{
                    constructor(){

                    }
                }
                class NewT1{
                    constructor(){

                    }
                }

                let demoTemplate = 
                        (...params)=>{
                            return {
                                execute:function(T){
                                    var src=(function () {
                    
                    console.log(T);

                    return(
                        demoTemplate
                    );

                });
                                    var srcR=src(...params);
                                    return srcR;
                                }
                            }
                        }
                        ;

                let targs=[NewT,NewT];
                
                demoTemplate().execute(targs)

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
                

                