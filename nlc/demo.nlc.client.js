
                            let a5f711ae5_6b97_4111_b251_00b4e456a49b_module;
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
                            a5f711ae5_6b97_4111_b251_00b4e456a49b_module=module;
                        })
                        let getterObj5f711ae5_6b97_4111_b251_00b4e456a49b={
                            set stter(value) {
                                a5f711ae5_6b97_4111_b251_00b4e456a49b_module.Set('prop',value);
                            }
                        }
                        getterObj5f711ae5_6b97_4111_b251_00b4e456a49b.stter=5;

            }


        

    return f.call(this,...args);

}

    );

    

    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                