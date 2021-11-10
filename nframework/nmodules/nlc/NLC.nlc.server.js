(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nframework\\nmodules\\nlc";
const JSSVPath = "D:\\MyTechs\\nframework\\nframework/nmodules/nlc/NLC.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/nlc/NLC.nlc.client.js";

            try{
                ScopeId = ScopeId;
            }
            catch{
                ScopeId = null;
            }
            
module.exports = (manager) => {
    var isServer=true;
    IS_PUBLIC       = 0;
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

    

                    

        var NModule=
        function() {
            return require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule");
        }()

    ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='NLC';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

        
        this.AddMethod('start',(...args) => {
            let f=
    

            function(){

                this.Routing(
                    '/nlc-compile/:code',
                    (req,res)=>{
                        let code=req.params.code;
                        let result = {
                            'compiledCode':(manager.Get('NLC',ScopeId)).GetThisWithCallback((module)=>{
                            return module.Get('Compile');
                        })(code,false)
                        }
                        res.send(JSON.stringify(result));
                    }
                );

            }

        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('Execute',(...args) => {
            let f=
    
            
            function(code,forSV){

                let compiledCode = this.GetThisWithCallback((module)=>{
                            return module.Get('Compile');
                        })(code,forSV);

                return Function(compiledCode)();

            }

        

    return f.call(this,...args);

}

    );

    

        
        this.AddMethod('Compile',(...args) => {
            let f=
    

            function(code,forSV){

                if(forSV == null){
                    forSV = true;
                }

                let compiledCode = '';
                
                let compiler = manager.NFramework.ncompiler;
                
                compiledCode = compiler.CompileCode(code,forSV,'');

                return compiledCode;

            }

        

    return f.call(this,...args);

}

    );

    

    

    


        });
    

        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        if(nmodule.side!='server'){
            nmodule.Routing('/nlc/NLC', (req, res) => res.send(nmodule.client_js_code));
        }

        

            nmodules.push({
                'module':nmodule,
                'accessRange':(IS_PUBLIC)
            });

        

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    exports.ScopeId=ScopeId;
    return exports;
}
        
            IS_PUBLIC = -1;
        })()