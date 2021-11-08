
                            var aa7ff76bb_714f_44c7_b7af_218d8b6b3e8f_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['917c9fa4_25e8_439f_ac54_9631f36ec092']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['917c9fa4_25e8_439f_ac54_9631f36ec092']=true;
                        
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
                            aa7ff76bb_714f_44c7_b7af_218d8b6b3e8f_module=module;
                        })
                        let getterObja7ff76bb_714f_44c7_b7af_218d8b6b3e8f={
                            set stter(value) {
                                aa7ff76bb_714f_44c7_b7af_218d8b6b3e8f_module.Set('body',value);
                            }
                        }
                        getterObja7ff76bb_714f_44c7_b7af_218d8b6b3e8f.stter=document.body;
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
                

                