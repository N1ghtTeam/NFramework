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

        

            var result_093200f4_30ee_41e9_8daf_be2f583dcbc5=document.createElement('div');

            window.result_093200f4_30ee_41e9_8daf_be2f583dcbc5=result_093200f4_30ee_41e9_8daf_be2f583dcbc5;
            
            
        var attributes_093200f4_30ee_41e9_8daf_be2f583dcbc5=[];
    
                var a093200f4_30ee_41e9_8daf_be2f583dcbc5class=true;
                attributes_093200f4_30ee_41e9_8daf_be2f583dcbc5.push({
                    key:'class',
                    value:(()=>{return a093200f4_30ee_41e9_8daf_be2f583dcbc5class='demo1'})()
                });
                result_093200f4_30ee_41e9_8daf_be2f583dcbc5.setAttribute(attributes_093200f4_30ee_41e9_8daf_be2f583dcbc5[attributes_093200f4_30ee_41e9_8daf_be2f583dcbc5.length-1].key,attributes_093200f4_30ee_41e9_8daf_be2f583dcbc5[attributes_093200f4_30ee_41e9_8daf_be2f583dcbc5.length-1].value);
            

            result_093200f4_30ee_41e9_8daf_be2f583dcbc5.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                            '+""
;
                result_093200f4_30ee_41e9_8daf_be2f583dcbc5.appendChild(

    (()=>{

        

            var result_60720052_3ea6_4e6a_9d65_c0a791bd9ca7=document.createElement('div');

            window.result_60720052_3ea6_4e6a_9d65_c0a791bd9ca7=result_60720052_3ea6_4e6a_9d65_c0a791bd9ca7;
            
            
        var attributes_60720052_3ea6_4e6a_9d65_c0a791bd9ca7=[];
    
                var a60720052_3ea6_4e6a_9d65_c0a791bd9ca7class=true;
                attributes_60720052_3ea6_4e6a_9d65_c0a791bd9ca7.push({
                    key:'class',
                    value:(()=>{return a60720052_3ea6_4e6a_9d65_c0a791bd9ca7class='demo2'})()
                });
                result_60720052_3ea6_4e6a_9d65_c0a791bd9ca7.setAttribute(attributes_60720052_3ea6_4e6a_9d65_c0a791bd9ca7[attributes_60720052_3ea6_4e6a_9d65_c0a791bd9ca7.length-1].key,attributes_60720052_3ea6_4e6a_9d65_c0a791bd9ca7[attributes_60720052_3ea6_4e6a_9d65_c0a791bd9ca7.length-1].value);
            

            result_60720052_3ea6_4e6a_9d65_c0a791bd9ca7.innerHTML+=
""+'\r\n\r\n                                Hello World2\r\n\r\n                            '+""
;
            

    
        
        return result_60720052_3ea6_4e6a_9d65_c0a791bd9ca7;

    })()
        

);
                result_093200f4_30ee_41e9_8daf_be2f583dcbc5.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            

    
        
        return result_093200f4_30ee_41e9_8daf_be2f583dcbc5;

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
        

                