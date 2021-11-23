(()=>{
            var ScopeId = "D:\\ThreejsDemos\\Demo1\\nframework/nmodules/dom";
const JSSVPath = "D:\\ThreejsDemos\\Demo1\\nframework/nmodules/dom/dom.nlc.server.js";
const JSCLPath = "D:\\ThreejsDemos\\Demo1\\nframework/nmodules/dom/dom.nlc.client.js";

            var namespace=[];
            
                            var a67b0defc_10bc_4410_aada_ff75d0ad79fc_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['c5dbfe0c_1a66_4b39_98ef_ff844c5445d0']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['c5dbfe0c_1a66_4b39_98ef_ff844c5445d0']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        var nmoduleName = 

        ((()=>{
            
            if(namespace.length==0){
                return `dom`;
            }
            else{
                let result=`dom`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ;

        nmodule.name=nmoduleName;

        nmodule.shortName=`dom`;

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
                            a67b0defc_10bc_4410_aada_ff75d0ad79fc_module=module;
                        })
                        let getterObj67b0defc_10bc_4410_aada_ff75d0ad79fc={
                            set stter(value) {
                                a67b0defc_10bc_4410_aada_ff75d0ad79fc_module.Set('body',value);
                            }
                        }
                        getterObj67b0defc_10bc_4410_aada_ff75d0ad79fc.stter=document.body;
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
                

                
        
        })()