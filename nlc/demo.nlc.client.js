
                            let a5a4cb9dc_b029_488a_83b4_7618b09f43f8_module;
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
                
    (()=>{
        let styleE = document.createElement('style');

        styleE.textContent = `

                    @demo->prop=5;

                `;

        document.body.appendChild(styleE);

        return styleE;
    })()
    ;
                (manager.Get('demo')).GetThisWithCallback((module)=>{
                            a5a4cb9dc_b029_488a_83b4_7618b09f43f8_module=module;
                        })
                        let getterObj5a4cb9dc_b029_488a_83b4_7618b09f43f8={
                            set stter(value) {
                                a5a4cb9dc_b029_488a_83b4_7618b09f43f8_module.Set('prop',value);
                            }
                        }
                        getterObj5a4cb9dc_b029_488a_83b4_7618b09f43f8.stter=5;

            }


        

    return f.call(this,...args);

}

    );

    

    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                