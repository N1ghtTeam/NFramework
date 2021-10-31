
<<<<<<< HEAD
                            let ab864cb49_fc39_46c6_966e_637e4c0f75fd_module;
                        manager = window.NFramework.nmoduleManager;

=======
                            var a2a6980e9_4894_44ee_925c_8e2b8abb7bd6_module;
                        manager=window.NFramework.nmoduleManager;
            
>>>>>>> da41e2c8a1d41dc7d2ad054c7bcd805a0315d051

                    
            (()=>{
                

        let NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        let nmodule=new NModule();

        let This=nmodule;

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
<<<<<<< HEAD
                            ab864cb49_fc39_46c6_966e_637e4c0f75fd_module=module;
                        })
                        let getterObjb864cb49_fc39_46c6_966e_637e4c0f75fd={
                            set stter(value) {
                                ab864cb49_fc39_46c6_966e_637e4c0f75fd_module.Set('body',value);
                            }
                        }
                        getterObjb864cb49_fc39_46c6_966e_637e4c0f75fd.stter=document.body;
=======
                            a2a6980e9_4894_44ee_925c_8e2b8abb7bd6_module=module;
                        })
                        var getterObj2a6980e9_4894_44ee_925c_8e2b8abb7bd6={
                            set stter(value) {
                                a2a6980e9_4894_44ee_925c_8e2b8abb7bd6_module.Set('body',value);
                            }
                        }
                        getterObj2a6980e9_4894_44ee_925c_8e2b8abb7bd6.stter= document.body;
>>>>>>> da41e2c8a1d41dc7d2ad054c7bcd805a0315d051
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
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                