
                            var ac982cdd3_a428_4e40_88b7_869642d4a9f9_module;
                        var af6897f7a_76b5_4dc5_a289_81f71dce3d88_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['fce34d80_3a12_4b0f_a3c7_59bfa657ddec']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['fce34d80_3a12_4b0f_a3c7_59bfa657ddec']=true;
                         manager.customTypeDatas['demoGlobalInDemoNLC']=(()=>{
            let data=

6

;
            return data;
        })();
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['5ca35999_5be6_44dd_9d75_95273e33bc46']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['5ca35999_5be6_44dd_9d75_95273e33bc46']=true;
                        
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
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['43baa97d_bd0f_45c5_a97b_5976c1eb77fb']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['43baa97d_bd0f_45c5_a97b_5976c1eb77fb']=true;
                        
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

        

            var result_ebc47b5f_6402_4a09_b9b7_1fd9386d3577=document.createElement('div');

            window.result_ebc47b5f_6402_4a09_b9b7_1fd9386d3577=result_ebc47b5f_6402_4a09_b9b7_1fd9386d3577;
            
            
        var attributes_ebc47b5f_6402_4a09_b9b7_1fd9386d3577=[];
    
                var aebc47b5f_6402_4a09_b9b7_1fd9386d3577class=true;
                attributes_ebc47b5f_6402_4a09_b9b7_1fd9386d3577.push({
                    key:'class',
                    value:(()=>{return aebc47b5f_6402_4a09_b9b7_1fd9386d3577class='demo1'})()
                });
                result_ebc47b5f_6402_4a09_b9b7_1fd9386d3577.setAttribute(attributes_ebc47b5f_6402_4a09_b9b7_1fd9386d3577[attributes_ebc47b5f_6402_4a09_b9b7_1fd9386d3577.length-1].key,attributes_ebc47b5f_6402_4a09_b9b7_1fd9386d3577[attributes_ebc47b5f_6402_4a09_b9b7_1fd9386d3577.length-1].value);
            

            result_ebc47b5f_6402_4a09_b9b7_1fd9386d3577.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                            '+""
;
                result_ebc47b5f_6402_4a09_b9b7_1fd9386d3577.appendChild(

    (()=>{

        

            var result_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6=document.createElement('div');

            window.result_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6=result_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6;
            
            
        var attributes_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6=[];
    
                var a9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6class=true;
                attributes_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6.push({
                    key:'class',
                    value:(()=>{return a9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6class='demo2'})()
                });
                result_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6.setAttribute(attributes_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6[attributes_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6.length-1].key,attributes_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6[attributes_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6.length-1].value);
            

            result_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6.innerHTML+=
""+'\r\n\r\n                                Hello World2\r\n\r\n                            '+""
;
            

    
        
        return result_9c3452e3_78e0_4c2b_b2bd_9a2daa42aec6;

    })()
        

);
                result_ebc47b5f_6402_4a09_b9b7_1fd9386d3577.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            

    
        
        return result_ebc47b5f_6402_4a09_b9b7_1fd9386d3577;

    })()
        



                );

                this.AsyncGetThisWithCallback(async (module)=>{
                            ac982cdd3_a428_4e40_88b7_869642d4a9f9_module=module;
                        });
                        
                        await ac982cdd3_a428_4e40_88b7_869642d4a9f9_module.AsyncSet('sp',7);;
                

                console.log(await this.AsyncGetThisWithCallback(async (module)=>{
                            af6897f7a_76b5_4dc5_a289_81f71dce3d88_module=module;
                            return await af6897f7a_76b5_4dc5_a289_81f71dce3d88_module.AsyncGet('sp');
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
                

                