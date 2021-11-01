
                            var a2fe13e6c_041c_4b6f_a791_5c7b2c1daa04_module;
                        var af8fbeb48_26d9_4661_893e_782f533acedb_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['a7e26441_c9f0_421b_9f69_449a3b95cce7']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['a7e26441_c9f0_421b_9f69_449a3b95cce7']=true;
                         manager.customTypeDatas['demoGlobalInDemoNLC']=(()=>{
            let data=

6

;
            return data;
        })();
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['9f0d9f65_9a04_4b2a_b75b_9aa5bf332425']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['9f0d9f65_9a04_4b2a_b75b_9aa5bf332425']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='demop';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

    this.AddSyncProperty('sp');

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['eb54965f_c907_4e6f_b35b_6f406a7320a5']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['eb54965f_c907_4e6f_b35b_6f406a7320a5']=true;
                        
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
    

    

        this.baseModules = ['demop'];

    

    

    

        

    this.AddProperty('prop');

    

        
        this.AddMethod('setup',async (...args)=>{
                let f=async function(){
                
                
                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(

                    

    (()=>{

        

            var result_abe1de26_8e2e_460f_8d49_c192cb912038=document.createElement('div');

            window.result_abe1de26_8e2e_460f_8d49_c192cb912038=result_abe1de26_8e2e_460f_8d49_c192cb912038;
            
            
        var attributes_abe1de26_8e2e_460f_8d49_c192cb912038=[];
    
                var aabe1de26_8e2e_460f_8d49_c192cb912038class=true;
                attributes_abe1de26_8e2e_460f_8d49_c192cb912038.push({
                    key:'class',
                    value:(()=>{return aabe1de26_8e2e_460f_8d49_c192cb912038class='demo1'})()
                });
                result_abe1de26_8e2e_460f_8d49_c192cb912038.setAttribute(attributes_abe1de26_8e2e_460f_8d49_c192cb912038[attributes_abe1de26_8e2e_460f_8d49_c192cb912038.length-1].key,attributes_abe1de26_8e2e_460f_8d49_c192cb912038[attributes_abe1de26_8e2e_460f_8d49_c192cb912038.length-1].value);
            

            result_abe1de26_8e2e_460f_8d49_c192cb912038.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                            '+""
;
                result_abe1de26_8e2e_460f_8d49_c192cb912038.appendChild(

    (()=>{

        

            var result_9552652d_c8bb_4b08_b287_52471b80462c=document.createElement('div');

            window.result_9552652d_c8bb_4b08_b287_52471b80462c=result_9552652d_c8bb_4b08_b287_52471b80462c;
            
            
        var attributes_9552652d_c8bb_4b08_b287_52471b80462c=[];
    
                var a9552652d_c8bb_4b08_b287_52471b80462cclass=true;
                attributes_9552652d_c8bb_4b08_b287_52471b80462c.push({
                    key:'class',
                    value:(()=>{return a9552652d_c8bb_4b08_b287_52471b80462cclass='demo2'})()
                });
                result_9552652d_c8bb_4b08_b287_52471b80462c.setAttribute(attributes_9552652d_c8bb_4b08_b287_52471b80462c[attributes_9552652d_c8bb_4b08_b287_52471b80462c.length-1].key,attributes_9552652d_c8bb_4b08_b287_52471b80462c[attributes_9552652d_c8bb_4b08_b287_52471b80462c.length-1].value);
            

            result_9552652d_c8bb_4b08_b287_52471b80462c.innerHTML+=
""+'\r\n\r\n                                Hello World2\r\n\r\n                            '+""
;
            

    
        
        return result_9552652d_c8bb_4b08_b287_52471b80462c;

    })()
        

);
                result_abe1de26_8e2e_460f_8d49_c192cb912038.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            

    
        
        return result_abe1de26_8e2e_460f_8d49_c192cb912038;

    })()
        



                );

                this.AsyncGetThisWithCallback(async (module)=>{
                            a2fe13e6c_041c_4b6f_a791_5c7b2c1daa04_module=module;
                        });
                        
                        await a2fe13e6c_041c_4b6f_a791_5c7b2c1daa04_module.AsyncSet('sp',7);;
                

                console.log(await this.AsyncGetThisWithCallback(async (module)=>{
                            af8fbeb48_26d9_4661_893e_782f533acedb_module=module;
                            return await af8fbeb48_26d9_4661_893e_782f533acedb_module.AsyncGet('sp');
                        })
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
                

                