(()=>{
            var ScopeId = "D:\\NCity\\nframework/nmodules/console";
const JSSVPath = "D:\\NCity\\nframework/nmodules/console/console.nlc.server.js";
const JSCLPath = "D:\\NCity\\nframework/nmodules/console/console.nlc.client.js";

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
                return `console`;
            }
            else{
                let result=`console`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ;

        nmodule.name=nmoduleName;

        nmodule.shortName=`console`;

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

        

            if(manager.NFramework.console.enable){

                const readline = require('readline');

                const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

                const ReadLine = (function () {
                    const getLineGen = (async function* () {
                        for await (const line of rl) {
                            yield line;
                        }
                    })();
                    return async () => ((await getLineGen.next()).value);
                })();

                
        this.AddMethod('log',(...args) => {
            let f=
    
                    function(...args) {
                        console.log(...args);
                    }
                

    return f.call(this,...args);

}

    );

    

                
        this.AddMethod('clear',(...args) => {
            let f=
    
                    function() {
                        console.clear();
                    }
                

    return f.call(this,...args);

}

    );

    

                
        this.AddMethod('readLine',async (...args)=>{
                let f=async function() {
                        return await ReadLine();
                    }
                
                let f2=f.bind(this);
                return await f2(...args);
            }

        );

    

            }

        

    




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