(()=>{
            const JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/dom/dom.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework\\nframework/nmodules/dom/dom.nlc.server.js";
var scopeId = "D:\\MyTechs\\nframework\\nframework/nmodules/dom";

<<<<<<< Updated upstream
                            var ab2c02d66_ba63_423a_a050_2dcfeef50eca_module;
                        manager=window.NFramework.nmoduleManager;
            

                    
=======

            var IS_THIS_PUBLIC = true;

            try{
                scopeId = scopeId;
            }
            catch{
                scopeId = 'global';
            }

            
                            var a43a64539_39cb_4e53_80c2_38969ead0d1b_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['84aa0fd7_a366_4b92_bfe5_c3d47d2b83c6']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['84aa0fd7_a366_4b92_bfe5_c3d47d2b83c6']=true;
                        
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                            ab2c02d66_ba63_423a_a050_2dcfeef50eca_module=module;
                        })
                        var getterObjb2c02d66_ba63_423a_a050_2dcfeef50eca={
                            set stter(value) {
                                ab2c02d66_ba63_423a_a050_2dcfeef50eca_module.Set('body',value);
                            }
                        }
                        getterObjb2c02d66_ba63_423a_a050_2dcfeef50eca.stter= document.body;
=======
                            a43a64539_39cb_4e53_80c2_38969ead0d1b_module=module;
                        })
                        let getterObj43a64539_39cb_4e53_80c2_38969ead0d1b={
                            set stter(value) {
                                a43a64539_39cb_4e53_80c2_38969ead0d1b_module.Set('body',value);
                            }
                        }
                        getterObj43a64539_39cb_4e53_80c2_38969ead0d1b.stter=document.body;
>>>>>>> Stashed changes
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
        

                
<<<<<<< Updated upstream
            
=======
            
            IS_THIS_PUBLIC=false;
            
        
        })()
>>>>>>> Stashed changes
