<<<<<<< Updated upstream
manager=window.NFramework.nmoduleManager;
            

                    
=======
(()=>{
            const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.router.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.router.nlc.server.js";
var scopeId = "D:\\MyTechs\\nframework/nlc";


            var IS_THIS_PUBLIC = true;

            try{
                scopeId = scopeId;
            }
            catch{
                scopeId = 'global';
            }

            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['c0378584_8331_47b7_affa_da415d9b3dab']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['c0378584_8331_47b7_affa_da415d9b3dab']=true;
                        
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
                
<<<<<<< Updated upstream
=======
            (manager.Get('demoPage',scopeId)).Render(req,res)
>>>>>>> Stashed changes
                

        ((req,res)=>{
            var framework=manager.NFramework;

            var modules=manager.pages['demoPage'].modules;

            var miejs='';

            var frameworkCLEJS=framework.clejs;

            miejs+=frameworkCLEJS;

            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                miejs+=' <script  src="/nmodules/'+module+'"></script>';
            }

            var globalObjects=manager.pages['demoPage'].customTypeDatas;

            for(var globalObjectName of globalObjects){
                miejs+="\n<script src='/global-objects/"+globalObjectName+"'></script>";
            }

            miejs+="\n<script src='/appcl'></script>";

            miejs="<nframework-scripts>" +miejs+ "</nframework-scripts>";

            res.render( manager.pages['demoPage'].src,{
                NFramework:miejs
            });
        })(req,res);
    
    
            }
        

    

    
    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                
<<<<<<< Updated upstream
            
=======
            
            IS_THIS_PUBLIC=false;
            
        
        })()
>>>>>>> Stashed changes
