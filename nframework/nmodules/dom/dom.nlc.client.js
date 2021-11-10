(()=>{
            var ScopeId = "D:\\MyTechs\\nframework\\nframework/nmodules/dom";
const JSSVPath = "D:\\MyTechs\\nframework\\nframework/nmodules/dom/dom.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/dom/dom.nlc.client.js";

            var namespace=[];
            
                            var aedb3e7bb_25d5_48b3_8da5_80b558fa20ab_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['e708951d_8383_47c3_8fc9_af1a81105349']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['e708951d_8383_47c3_8fc9_af1a81105349']=true;
                        
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
                            aedb3e7bb_25d5_48b3_8da5_80b558fa20ab_module=module;
                        })
                        let getterObjedb3e7bb_25d5_48b3_8da5_80b558fa20ab={
                            set stter(value) {
                                aedb3e7bb_25d5_48b3_8da5_80b558fa20ab_module.Set('body',value);
                            }
                        }
                        getterObjedb3e7bb_25d5_48b3_8da5_80b558fa20ab.stter=document.body;
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