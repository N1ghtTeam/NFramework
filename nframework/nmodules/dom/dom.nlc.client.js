(()=>{
            var ScopeId = "D:\\NLCDemoWeb\\nframework/nmodules/dom";
const JSSVPath = "D:\\NLCDemoWeb\\nframework/nmodules/dom/dom.nlc.server.js";
const JSCLPath = "D:\\NLCDemoWeb\\nframework/nmodules/dom/dom.nlc.client.js";

            var namespace=[];
            
                            var a5c5fbcfa_6e2e_4f20_92cf_729ca7a53ab9_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['925f5f0e_e1df_4c53_937e_ebe6cf1d48fc']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['925f5f0e_e1df_4c53_937e_ebe6cf1d48fc']=true;
                        
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
                            a5c5fbcfa_6e2e_4f20_92cf_729ca7a53ab9_module=module;
                        })
                        let getterObj5c5fbcfa_6e2e_4f20_92cf_729ca7a53ab9={
                            set stter(value) {
                                a5c5fbcfa_6e2e_4f20_92cf_729ca7a53ab9_module.Set('body',value);
                            }
                        }
                        getterObj5c5fbcfa_6e2e_4f20_92cf_729ca7a53ab9.stter=document.body;
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