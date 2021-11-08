manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['5c36668e_ecba_4865_b7c9_581dcf8876ac']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['5c36668e_ecba_4865_b7c9_581dcf8876ac']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='demo-router';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
        

        
        path=
    
            '/'
        

    

        
        callback=
    
            (req,res)=>{
                
                

        ((req,res)=>{
            var framework=manager.NFramework;

            var modules=manager.pages['demoPage'].modules;

            var miejs='';

            var frameworkCLEJS=framework.clejs;

            miejs+=frameworkCLEJS;
            
            miejs+="\n<nlc>";

            if(modules=='*')
            {
                modules=Object.keys(manager.modules);
            }
            
            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                if(manager.modules[module].side=='both' || manager.modules[module].side=='client')
                    miejs+=' <script  src="/nlc/'+module+'"></script>';
            }

            var globalObjects=manager.pages['demoPage'].customTypeDatas;

            for(var globalObjectName of globalObjects){
                miejs+="\n<script src='/nlc/"+globalObjectName+"'></script>";
            }
            
            var uiComponents=manager.pages['demoPage'].uiComponents;

            if(uiComponents=='*')
            {
                uiComponents=manager.uiComponents;
            }
            
            for(var uiComponent of uiComponents){
                miejs+="\n<script src='/nlc/"+uiComponent+"'></script>";
            }

            miejs+="\n</nlc>";

            miejs+="\n<script src='/appcl'></script>";

            miejs="<nframework-scripts>" +miejs+ "</nframework-scripts>";


            res.render( manager.pages['demoPage'].src,{
                NFramework:miejs
            });
        })(req,res);

    
            }
        

    

    
    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                