
                            var ab70089fb_e1a7_4ee9_b7ef_d73a37233717_module;
                        var aa29a3b2b_4de9_435f_a29c_49b88c463312_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['5af6c551_3a85_44ac_8096_b4304a12c115']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['5af6c551_3a85_44ac_8096_b4304a12c115']=true;
                         manager.customTypeDatas['demoGlobalInDemoNLC']=(()=>{
            let data=

6

;
            return data;
        })();
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['90c02cdd_3dda_41db_a2c3_61866682a58e']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['90c02cdd_3dda_41db_a2c3_61866682a58e']=true;
                        
            (()=>{
                

        let NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        let nmodule=new NModule();

        let This=nmodule;

        nmodule.side='both';

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

    this.AddSyncProperty('sp');

    

    

    

        

    this.AddProperty('prop');

    

        
        this.AddMethod('setup',async (...args)=>{
                let f=async function(){
                
                
                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(

                    

    (()=>{

        

            var result_d3c6ce0c_b416_4e0d_981e_c5e0651153ac=document.createElement('div');

            window.result_d3c6ce0c_b416_4e0d_981e_c5e0651153ac=result_d3c6ce0c_b416_4e0d_981e_c5e0651153ac;
            
            
        var attributes_d3c6ce0c_b416_4e0d_981e_c5e0651153ac=[];
    
                var ad3c6ce0c_b416_4e0d_981e_c5e0651153acclass=true;
                attributes_d3c6ce0c_b416_4e0d_981e_c5e0651153ac.push({
                    key:'class',
                    value:(()=>{return ad3c6ce0c_b416_4e0d_981e_c5e0651153acclass='demo1'})()
                });
                result_d3c6ce0c_b416_4e0d_981e_c5e0651153ac.setAttribute(attributes_d3c6ce0c_b416_4e0d_981e_c5e0651153ac[attributes_d3c6ce0c_b416_4e0d_981e_c5e0651153ac.length-1].key,attributes_d3c6ce0c_b416_4e0d_981e_c5e0651153ac[attributes_d3c6ce0c_b416_4e0d_981e_c5e0651153ac.length-1].value);
            

            result_d3c6ce0c_b416_4e0d_981e_c5e0651153ac.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                            '+""
;
                result_d3c6ce0c_b416_4e0d_981e_c5e0651153ac.appendChild(

    (()=>{

        

            var result_d93b58c9_3fa9_4b1c_b9c0_52d80409482e=document.createElement('div');

            window.result_d93b58c9_3fa9_4b1c_b9c0_52d80409482e=result_d93b58c9_3fa9_4b1c_b9c0_52d80409482e;
            
            
        var attributes_d93b58c9_3fa9_4b1c_b9c0_52d80409482e=[];
    
                var ad93b58c9_3fa9_4b1c_b9c0_52d80409482eclass=true;
                attributes_d93b58c9_3fa9_4b1c_b9c0_52d80409482e.push({
                    key:'class',
                    value:(()=>{return ad93b58c9_3fa9_4b1c_b9c0_52d80409482eclass='demo2'})()
                });
                result_d93b58c9_3fa9_4b1c_b9c0_52d80409482e.setAttribute(attributes_d93b58c9_3fa9_4b1c_b9c0_52d80409482e[attributes_d93b58c9_3fa9_4b1c_b9c0_52d80409482e.length-1].key,attributes_d93b58c9_3fa9_4b1c_b9c0_52d80409482e[attributes_d93b58c9_3fa9_4b1c_b9c0_52d80409482e.length-1].value);
            

            result_d93b58c9_3fa9_4b1c_b9c0_52d80409482e.innerHTML+=
""+'\r\n\r\n                                Hello World2\r\n\r\n                            '+""
;
            

    
        
        return result_d93b58c9_3fa9_4b1c_b9c0_52d80409482e;

    })()
        

);
                result_d3c6ce0c_b416_4e0d_981e_c5e0651153ac.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            

    
        
        return result_d3c6ce0c_b416_4e0d_981e_c5e0651153ac;

    })()
        



                );

                await this.AsyncGetThisWithCallback(async (module)=>{
                            ab70089fb_e1a7_4ee9_b7ef_d73a37233717_module=module;
                        })
                        let getterObjb70089fb_e1a7_4ee9_b7ef_d73a37233717={
                            set stter(value) {
                                (async ()=>{
                                    await ab70089fb_e1a7_4ee9_b7ef_d73a37233717_module.AsyncSet('sp',value);
                                })();
                            }
                        }
                        getterObjb70089fb_e1a7_4ee9_b7ef_d73a37233717.stter=7;

                console.log(await this.AsyncGetThisWithCallback(async (module)=>{
                            aa29a3b2b_4de9_435f_a29c_49b88c463312_module=module;
                            return await aa29a3b2b_4de9_435f_a29c_49b88c463312_module.AsyncGet('sp');
                        })
                        );

            }

        
                let f2=f.bind(this);
                return await f2(...args);
            }

        );

    

    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                