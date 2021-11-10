<<<<<<< Updated upstream
var JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.router.nlc.client.js";module.exports=(manager)=>{
            var exports=new Object();
                var nmodules=[];
                var pages=[];
                exports.customTypeDatas=[];
                exports.customTypeDatas.Add=function(key,value){
                    exports.customTypeDatas.push({
                        'key':key,
                        'value':value
                    });
                }
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

            
module.exports = (manager) => {
    let exports     = new Object();
    let nmodules    = [];
    let pages       = [];
    exports.customTypeDatas=[];
    exports.customTypeDatas.Add=function(key,value){
        exports.customTypeDatas.push({
            'key':key,
            'value':value
        });
    }
>>>>>>> Stashed changes

                

                    

        var NModule=
        function(){

            return require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

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
    

    
        
        {
            path='';
            callback=()=>{};
            

        
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
        

    

    
            nmodule.Routing(path,callback);
        }
    
    
    


        });
    
        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/demo-router',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        

                

<<<<<<< Updated upstream
                exports.nmodules=nmodules;
                exports.pages=pages;
                return exports;
            }
            
=======
    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}
            
            IS_THIS_PUBLIC=false;
            
        
        })()
>>>>>>> Stashed changes
