(()=>{
            var ScopeId = "D:\\ThreejsDemos\\Demo1\\nframework/nmodules/dom";
const JSSVPath = "D:\\ThreejsDemos\\Demo1\\nframework/nmodules/dom/dom.nlc.server.js";
const JSCLPath = "D:\\ThreejsDemos\\Demo1\\nframework/nmodules/dom/dom.nlc.client.js";

            var namespace=[];
            
                            var aa99f41d9_8838_491c_a8a0_31428accbdbf_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['4c15a25a_f5c1_4f8e_8181_c31bb3d70aaa']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['4c15a25a_f5c1_4f8e_8181_c31bb3d70aaa']=true;
                        
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
                            aa99f41d9_8838_491c_a8a0_31428accbdbf_module=module;
                        })
                        let getterObja99f41d9_8838_491c_a8a0_31428accbdbf={
                            set stter(value) {
                                aa99f41d9_8838_491c_a8a0_31428accbdbf_module.Set('body',value);
                            }
                        }
                        getterObja99f41d9_8838_491c_a8a0_31428accbdbf.stter=document.body;
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