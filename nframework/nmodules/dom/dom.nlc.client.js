
                            var ab2c02d66_ba63_423a_a050_2dcfeef50eca_module;
                        manager=window.NFramework.nmoduleManager;
            

                    
            (()=>{
                

        var NModule=
            function(){

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
    
    

        
        this.AddMethod('setup',(...args)=>{
            var f=
    

            function(){
                this.GetThisWithCallback((module)=>{
                            ab2c02d66_ba63_423a_a050_2dcfeef50eca_module=module;
                        })
                        var getterObjb2c02d66_ba63_423a_a050_2dcfeef50eca={
                            set stter(value) {
                                ab2c02d66_ba63_423a_a050_2dcfeef50eca_module.Set('body',value);
                            }
                        }
                        getterObjb2c02d66_ba63_423a_a050_2dcfeef50eca.stter= document.body;
            }

        
        
    return f.call(this,...args); 

}
    
    );
    
    

        
        this.AddMethod('getElementById',(...args)=>{
            var f=
    
            function(pr0) {
                return document.getElementById(pr0);
            }
        
        
    return f.call(this,...args); 

}
    
    );
    
    

        
        this.AddMethod('getElementsByName',(...args)=>{
            var f=
    
            function(pr0) {
                return document.getElementsByName(pr0);
            }
        
        
    return f.call(this,...args); 

}
    
    );
    
    

        
        this.AddMethod('getElementsByClassName',(...args)=>{
            var f=
    
            function(pr0) {
                return document.getElementsByClassName(pr0);
            }
        
        
    return f.call(this,...args); 

}
    
    );
    
    

        
        this.AddMethod('getElementsByTagName',(...args)=>{
            var f=
    
            function(pr0) {
                return document.getElementsByTagName(pr0);
            }
        
        
    return f.call(this,...args); 

}
    
    );
    
    

        
        this.AddMethod('querySelector',(...args)=>{
            var f=
    
            function(pr0) {
                return document.querySelector(pr0);
            }
        
        
    return f.call(this,...args); 

}
    
    );
    
    

        
        this.AddMethod('querySelectorAll',(...args)=>{
            var f=
    
            function(pr0) {
                return document.querySelectorAll(pr0);
            }
        
        
    return f.call(this,...args); 

}
    
    );
    
    

    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                
            