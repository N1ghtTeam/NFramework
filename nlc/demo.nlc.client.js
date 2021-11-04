manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['20d66194_3079_4828_96fe_1be1618f056c']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['20d66194_3079_4828_96fe_1be1618f056c']=true;
                        
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

        

            var result_4684269b_8522_48d2_a7a4_ffd5893fea71=document.createElement('demo-ui');
            
            
        var attributes_4684269b_8522_48d2_a7a4_ffd5893fea71=[];
    
                var a4684269b_8522_48d2_a7a4_ffd5893fea71onclick=true;
                attributes_4684269b_8522_48d2_a7a4_ffd5893fea71.push({
                    key:'onclick',
                    value:(()=>{return a4684269b_8522_48d2_a7a4_ffd5893fea71onclick=(()=>{return'console.log("demo ui clicked");';})()})()
                });
                result_4684269b_8522_48d2_a7a4_ffd5893fea71.setAttribute('onclick',(()=>{return a4684269b_8522_48d2_a7a4_ffd5893fea71onclick=(()=>{return'console.log("demo ui clicked");';})()})());
            

            result_4684269b_8522_48d2_a7a4_ffd5893fea71.innerHTML+=
""+'\r\n                        \r\n                    '+""
;
            
            if(result_4684269b_8522_48d2_a7a4_ffd5893fea71.render!=null){
                let childs = result_4684269b_8522_48d2_a7a4_ffd5893fea71.render();
                if(childs!=null){
                    result_4684269b_8522_48d2_a7a4_ffd5893fea71.AppendChilds(childs);
                }
            }

    
        
        return result_4684269b_8522_48d2_a7a4_ffd5893fea71;

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
                

                