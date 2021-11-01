
                            let affb92fbc_8a08_448e_976a_5e81feee04ec_module;
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
                            affb92fbc_8a08_448e_976a_5e81feee04ec_module=module;
                        })
                        let getterObjffb92fbc_8a08_448e_976a_5e81feee04ec={
                            set stter(value) {
                                affb92fbc_8a08_448e_976a_5e81feee04ec_module.Set('prop',value);
                            }
                        }
                        getterObjffb92fbc_8a08_448e_976a_5e81feee04ec.stter=5;

            }


        

    return f.call(this,...args);

}

    );

    

    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                