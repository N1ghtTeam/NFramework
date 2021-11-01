
                            let aa33bc922_f5e4_43a2_9804_6b097f345524_module;
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
                /*DONTUSENLCFASTGET*/
    (()=>{
        let styleE = document.createElement('style');

        styleE.textContent = `

                    @demo->prop=5;

                `;

        document.body.appendChild(styleE);

        return styleE;
    })()
    /*DONTUSENLCFASTGET*/;
                (manager.Get('demo')).GetThisWithCallback((module)=>{
                            aa33bc922_f5e4_43a2_9804_6b097f345524_module=module;
                        })
                        let getterObja33bc922_f5e4_43a2_9804_6b097f345524={
                            set stter(value) {
                                aa33bc922_f5e4_43a2_9804_6b097f345524_module.Set('prop',value);
                            }
                        }
                        getterObja33bc922_f5e4_43a2_9804_6b097f345524.stter=5;

            }


        

    return f.call(this,...args);

}

    );

    

    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                