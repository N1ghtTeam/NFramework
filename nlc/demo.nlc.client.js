
                            var af396c793_b372_4b77_9e43_b38812960cba_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['08ff201f_719b_4ebb_87ea_ad4d09c14b6d']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['08ff201f_719b_4ebb_87ea_ad4d09c14b6d']=true;
                        
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

                var t='https://www.youtube.com';

                this.GetThisWithCallback((module)=>{
                            af396c793_b372_4b77_9e43_b38812960cba_module=module;
                        })
                        let getterObjf396c793_b372_4b77_9e43_b38812960cba={
                            set stter(value) {
                                af396c793_b372_4b77_9e43_b38812960cba_module.Set('prop',value);
                            }
                        }
                        getterObjf396c793_b372_4b77_9e43_b38812960cba.stter='console.log("ok")';
                
                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(

                    

    (()=>{

        

            var result_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf=document.createElement('div');

            window.result_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf=result_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf;
            
            
        var attributes_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf=[];
    
                var a679460c4_8778_4cf8_a1f7_0c8b9fb2b7cfonclick=true;
                attributes_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf.push({
                    key:'onclick',
                    value:(()=>{return a679460c4_8778_4cf8_a1f7_0c8b9fb2b7cfonclick= 'console.log("hello world")' })()
                });
                result_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf.setAttribute(attributes_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf[attributes_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf.length-1].key,attributes_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf[attributes_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf.length-1].value);
            

            result_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf.innerHTML+=
""+'\r\n\r\n                        '+""
;
                try{
                    result_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf.appendChild(

                            t

                        );
                }
                catch{
                    result_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf.innerHTML+=

                            t

                        ;
                }
                result_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf.innerHTML+=
""+'\r\n\r\n                    '+""
;
            

    
        
        return result_679460c4_8778_4cf8_a1f7_0c8b9fb2b7cf;

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
                

                