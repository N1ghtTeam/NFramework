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

        

            var result_0778688e_c0a0_4419_8471_2e9182836964=document.createElement('div');

            window.result_0778688e_c0a0_4419_8471_2e9182836964=result_0778688e_c0a0_4419_8471_2e9182836964;
            
            
        var attributes_0778688e_c0a0_4419_8471_2e9182836964=[];
    
                var a0778688e_c0a0_4419_8471_2e9182836964class=true;
                attributes_0778688e_c0a0_4419_8471_2e9182836964.push({
                    key:'class',
                    value:(()=>{return a0778688e_c0a0_4419_8471_2e9182836964class='demo1'})()
                });
                result_0778688e_c0a0_4419_8471_2e9182836964.setAttribute(attributes_0778688e_c0a0_4419_8471_2e9182836964[attributes_0778688e_c0a0_4419_8471_2e9182836964.length-1].key,attributes_0778688e_c0a0_4419_8471_2e9182836964[attributes_0778688e_c0a0_4419_8471_2e9182836964.length-1].value);
            

            result_0778688e_c0a0_4419_8471_2e9182836964.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                            '+""
;
                result_0778688e_c0a0_4419_8471_2e9182836964.appendChild(

    (()=>{

        

            var result_f62d05c7_c493_4491_83e8_e586ebb83acb=document.createElement('div');

            window.result_f62d05c7_c493_4491_83e8_e586ebb83acb=result_f62d05c7_c493_4491_83e8_e586ebb83acb;
            
            
        var attributes_f62d05c7_c493_4491_83e8_e586ebb83acb=[];
    
                var af62d05c7_c493_4491_83e8_e586ebb83acbclass=true;
                attributes_f62d05c7_c493_4491_83e8_e586ebb83acb.push({
                    key:'class',
                    value:(()=>{return af62d05c7_c493_4491_83e8_e586ebb83acbclass='demo2'})()
                });
                result_f62d05c7_c493_4491_83e8_e586ebb83acb.setAttribute(attributes_f62d05c7_c493_4491_83e8_e586ebb83acb[attributes_f62d05c7_c493_4491_83e8_e586ebb83acb.length-1].key,attributes_f62d05c7_c493_4491_83e8_e586ebb83acb[attributes_f62d05c7_c493_4491_83e8_e586ebb83acb.length-1].value);
            

            result_f62d05c7_c493_4491_83e8_e586ebb83acb.innerHTML+=
""+'\r\n\r\n                                Hello World2\r\n\r\n                            '+""
;
            

    
        
        return result_f62d05c7_c493_4491_83e8_e586ebb83acb;

    })()
        

);
                result_0778688e_c0a0_4419_8471_2e9182836964.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            

    
        
        return result_0778688e_c0a0_4419_8471_2e9182836964;

    })()
        



                );


            }

        

    return f.call(this,...args);

}

    );

    

    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                