
            if(window.NFramework.nmoduleManager.nlcElementRunned['df797c0e_bb6c_45e1_8a17_55fa9f1926eb']==null){
                window.NFramework.nmoduleManager.nlcElementRunned['df797c0e_bb6c_45e1_8a17_55fa9f1926eb']=true;
                manager = window.NFramework.nmoduleManager;


                    
            (()=>{
                

        let NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        let nmodule=new NModule();

        let This=nmodule;

        nmodule.side='both';

        nmodule.name='demo-router';

        nmodule.__TYPE='NMODULE';

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

            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                miejs+=' <script  src="/nlc/'+module+'"></script>';
            }

            var globalObjects=manager.pages['demoPage'].customTypeDatas;

            for(var globalObjectName of globalObjects){
                miejs+="\n<script src='/nlc/"+globalObjectName+"'></script>";
            }

            miejs+="\n<script src='/appcl'></script>";

            miejs="<nframework-scripts>" +miejs+ "</nframework-scripts>";

            res.render( manager.pages['demoPage'].src,{
                NFramework:miejs
            });
        })(req,res);

    
            }
        

    

    
    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                
            }

            
            