manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['3ad6c982_33fe_4e42_9914_0372e16e15e4']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['3ad6c982_33fe_4e42_9914_0372e16e15e4']=true;
                         manager.customTypeDatas['demoGlobalInDemoNLC']=(()=>{
            let data=

6

;
            return data;
        })();
                    }
                
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['52cd91c0_e960_4678_bad2_e6b52e2048b7']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['52cd91c0_e960_4678_bad2_e6b52e2048b7']=true;
                        
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
    

    

    

        

    this.AddProperty('prop');

    

        
        this.AddMethod('setup',(...args) => {
            let f=
    

            function(){
                
                
                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(

                    

    (()=>{

        

            var result_9f2832e8_8ec0_4592_ad8e_c96065daad7d=document.createElement('div');

            window.result_9f2832e8_8ec0_4592_ad8e_c96065daad7d=result_9f2832e8_8ec0_4592_ad8e_c96065daad7d;
            
            
        var attributes_9f2832e8_8ec0_4592_ad8e_c96065daad7d=[];
    
                var a9f2832e8_8ec0_4592_ad8e_c96065daad7dclass=true;
                attributes_9f2832e8_8ec0_4592_ad8e_c96065daad7d.push({
                    key:'class',
                    value:(()=>{return a9f2832e8_8ec0_4592_ad8e_c96065daad7dclass='demo1'})()
                });
                result_9f2832e8_8ec0_4592_ad8e_c96065daad7d.setAttribute(attributes_9f2832e8_8ec0_4592_ad8e_c96065daad7d[attributes_9f2832e8_8ec0_4592_ad8e_c96065daad7d.length-1].key,attributes_9f2832e8_8ec0_4592_ad8e_c96065daad7d[attributes_9f2832e8_8ec0_4592_ad8e_c96065daad7d.length-1].value);
            

            result_9f2832e8_8ec0_4592_ad8e_c96065daad7d.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                            '+""
;
                result_9f2832e8_8ec0_4592_ad8e_c96065daad7d.appendChild(

    (()=>{

        

            var result_cf08c172_b064_4c09_86d0_f10a9679b7fb=document.createElement('div');

            window.result_cf08c172_b064_4c09_86d0_f10a9679b7fb=result_cf08c172_b064_4c09_86d0_f10a9679b7fb;
            
            
        var attributes_cf08c172_b064_4c09_86d0_f10a9679b7fb=[];
    
                var acf08c172_b064_4c09_86d0_f10a9679b7fbclass=true;
                attributes_cf08c172_b064_4c09_86d0_f10a9679b7fb.push({
                    key:'class',
                    value:(()=>{return acf08c172_b064_4c09_86d0_f10a9679b7fbclass='demo2'})()
                });
                result_cf08c172_b064_4c09_86d0_f10a9679b7fb.setAttribute(attributes_cf08c172_b064_4c09_86d0_f10a9679b7fb[attributes_cf08c172_b064_4c09_86d0_f10a9679b7fb.length-1].key,attributes_cf08c172_b064_4c09_86d0_f10a9679b7fb[attributes_cf08c172_b064_4c09_86d0_f10a9679b7fb.length-1].value);
            

            result_cf08c172_b064_4c09_86d0_f10a9679b7fb.innerHTML+=
""+'\r\n\r\n                                Hello World2\r\n\r\n                            '+""
;
            

    
        
        return result_cf08c172_b064_4c09_86d0_f10a9679b7fb;

    })()
        

);
                result_9f2832e8_8ec0_4592_ad8e_c96065daad7d.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            

    
        
        return result_9f2832e8_8ec0_4592_ad8e_c96065daad7d;

    })()
        



                );

                console.log((manager.Get('demoGlobalInDemoNLC')));


            }

        

    return f.call(this,...args);

}

    );

    

    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                
                

                