<<<<<<< Updated upstream
manager=window.NFramework.nmoduleManager;
            

                    
=======
(()=>{
            const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.server.js";
var scopeId = "D:\\MyTechs\\nframework/nlc";


            var IS_THIS_PUBLIC = true;

            try{
                scopeId = scopeId;
            }
            catch{
                scopeId = 'global';
            }

            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['ece96b16_fdce_4152_bb8c_4f9f4500a5dd']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['ece96b16_fdce_4152_bb8c_4f9f4500a5dd']=true;
                        

        IS_THIS_PUBLIC=true;

        

    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['d57f6d4b_0813_41ec_9fc6_6758efba1067']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['d57f6d4b_0813_41ec_9fc6_6758efba1067']=true;
                        
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

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

<<<<<<< Updated upstream
    
        this.AddMethod('setup',(...args)=>{
            var f=
    

        function(){
            console.log('running');
        }

=======
        
        this.AddMethod('setup',(...args) => {
            let f=
    
            
            function(){
                
                (manager.Get('demo-base',scopeId))

            }

        
>>>>>>> Stashed changes

    
        
    return f.call(this,...args); 

}
    
    );
    
    

    
        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

<<<<<<< Updated upstream
                
            
=======


    
                    }
                

                
            
            IS_THIS_PUBLIC=false;
            
        
        })()
>>>>>>> Stashed changes
