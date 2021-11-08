manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['4fd6b5d1_9251_4bad_9851_56e1019351f1']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['4fd6b5d1_9251_4bad_9851_56e1019351f1']=true;
                        
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
                

                