manager = window.NFramework.nmoduleManager;


                    

                

                    
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

        

            var result_e1a8a396_6ead_41a7_b67b_121920b55faf=document.createElement('div');

            window.result_e1a8a396_6ead_41a7_b67b_121920b55faf=result_e1a8a396_6ead_41a7_b67b_121920b55faf;
            
            
        var attributes_e1a8a396_6ead_41a7_b67b_121920b55faf=[];
    
                var ae1a8a396_6ead_41a7_b67b_121920b55fafclass=true;
                attributes_e1a8a396_6ead_41a7_b67b_121920b55faf.push({
                    key:'class',
                    value:(()=>{return ae1a8a396_6ead_41a7_b67b_121920b55fafclass='demo1'})()
                });
                result_e1a8a396_6ead_41a7_b67b_121920b55faf.setAttribute(attributes_e1a8a396_6ead_41a7_b67b_121920b55faf[attributes_e1a8a396_6ead_41a7_b67b_121920b55faf.length-1].key,attributes_e1a8a396_6ead_41a7_b67b_121920b55faf[attributes_e1a8a396_6ead_41a7_b67b_121920b55faf.length-1].value);
            

            result_e1a8a396_6ead_41a7_b67b_121920b55faf.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                            '+""
;
                result_e1a8a396_6ead_41a7_b67b_121920b55faf.appendChild(

    (()=>{

        

            var result_d60af9ac_9129_4a54_a28f_a9c2ef1c2020=document.createElement('div');

            window.result_d60af9ac_9129_4a54_a28f_a9c2ef1c2020=result_d60af9ac_9129_4a54_a28f_a9c2ef1c2020;
            
            
        var attributes_d60af9ac_9129_4a54_a28f_a9c2ef1c2020=[];
    
                var ad60af9ac_9129_4a54_a28f_a9c2ef1c2020class=true;
                attributes_d60af9ac_9129_4a54_a28f_a9c2ef1c2020.push({
                    key:'class',
                    value:(()=>{return ad60af9ac_9129_4a54_a28f_a9c2ef1c2020class='demo2'})()
                });
                result_d60af9ac_9129_4a54_a28f_a9c2ef1c2020.setAttribute(attributes_d60af9ac_9129_4a54_a28f_a9c2ef1c2020[attributes_d60af9ac_9129_4a54_a28f_a9c2ef1c2020.length-1].key,attributes_d60af9ac_9129_4a54_a28f_a9c2ef1c2020[attributes_d60af9ac_9129_4a54_a28f_a9c2ef1c2020.length-1].value);
            

            result_d60af9ac_9129_4a54_a28f_a9c2ef1c2020.innerHTML+=
""+'\r\n\r\n                                Hello World2\r\n\r\n                            '+""
;
            

    
        
        return result_d60af9ac_9129_4a54_a28f_a9c2ef1c2020;

    })()
        

);
                result_e1a8a396_6ead_41a7_b67b_121920b55faf.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            

    
        
        return result_e1a8a396_6ead_41a7_b67b_121920b55faf;

    })()
        



                );

                console.log((manager.Get('demoGlobal')));


            }

        

    return f.call(this,...args);

}

    );

    

    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                