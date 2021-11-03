
                            var ae03a080f_66ed_4e83_ac75_b3409c6eee5b_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['c2279120_598d_4c20_9ac6_99379b6b3187']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['c2279120_598d_4c20_9ac6_99379b6b3187']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='dom';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

        

    this.AddProperty('body');

    

        
        this.AddMethod('setup',(...args) => {
            let f=
    

            function(){
                this.GetThisWithCallback((module)=>{
                            ae03a080f_66ed_4e83_ac75_b3409c6eee5b_module=module;
                        })
                        let getterObje03a080f_66ed_4e83_ac75_b3409c6eee5b={
                            set stter(value) {
                                ae03a080f_66ed_4e83_ac75_b3409c6eee5b_module.Set('body',value);
                            }
                        }
                        getterObje03a080f_66ed_4e83_ac75_b3409c6eee5b.stter=document.body;
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
                

                