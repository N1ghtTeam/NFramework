
                            var ac9b3f477_29ae_4af9_9b30_a00133428efd_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['9d2980fe_c5c8_41e4_b5ae_0eb4369bffc2']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['9d2980fe_c5c8_41e4_b5ae_0eb4369bffc2']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='dom';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

        

    this.AddProperty('body');

    

        
        this.AddMethod('setup',(...args) => {
            let f=
    

            function(){
                this.GetThisWithCallback((module)=>{
                            ac9b3f477_29ae_4af9_9b30_a00133428efd_module=module;
                        })
                        let getterObjc9b3f477_29ae_4af9_9b30_a00133428efd={
                            set stter(value) {
                                ac9b3f477_29ae_4af9_9b30_a00133428efd_module.Set('body',value);
                            }
                        }
                        getterObjc9b3f477_29ae_4af9_9b30_a00133428efd.stter=document.body;
            }

        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('getElementById',(...args) => {
            let f=
    
            function(pr0){
                return document.getElementById(pr0);
            }
        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('getElementsByName',(...args) => {
            let f=
    
            function(pr0){
                return document.getElementsByName(pr0);
            }
        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('getElementsByClassName',(...args) => {
            let f=
    
            function(pr0){
                return document.getElementsByClassName(pr0);
            }
        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('getElementsByTagName',(...args) => {
            let f=
    
            function(pr0){
                return document.getElementsByTagName(pr0);
            }
        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('querySelector',(...args) => {
            let f=
    
            function(pr0){
                return document.querySelector(pr0);
            }
        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('querySelectorAll',(...args) => {
            let f=
    
            function(pr0){
                return document.querySelectorAll(pr0);
            }
        

    return f.call(this,...args);

}

    );

    

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                