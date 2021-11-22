(()=>{
            var ScopeId = "D:\\NCity\\nframework/nmodules/nlc";
const JSSVPath = "D:\\NCity\\nframework/nmodules/nlc/NLC.nlc.server.js";
const JSCLPath = "D:\\NCity\\nframework/nmodules/nlc/NLC.nlc.client.js";

            var namespace=[];
            
module.exports = (manager) => {
    let exports     = new Object();
    let nmodules    = [];
    let packages    = [];
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
            return require("D:\\NCity\\nframework\\ncompiler\\tags/../../nmodule/nmodule");
        }()

    ;

        var nmodule=new NModule();

        var This=nmodule;

        var nmoduleName = 

        ((()=>{
            
            if(namespace.length==0){
                return `NLC`;
            }
            else{
                let result=`NLC`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ;

        nmodule.name=nmoduleName;

        nmodule.shortName=`NLC`;

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
                            'compiledCode':(manager.Get('NLC')).GetThisWithCallback((module)=>{
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
        

        var parsedPath = '';

        for (let i=0;i<nmoduleName.length;i++){
            if(nmoduleName[i]==':'){
                parsedPath += '--';
            }
            else{
                parsedPath += nmoduleName[i];
            }
        }

        if(nmodule.side!='server'){
            nmodule.Routing('/nlc/'+parsedPath, (req, res) => res.send(nmodule.client_js_code));
        }

        

            nmodules.push(nmodule);

        

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    exports.packages=packages;
    return exports;
}
        
        })()