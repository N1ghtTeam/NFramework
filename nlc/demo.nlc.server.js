(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";

            var namespace=[];
            
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

    

                    
        namespace.push('demo-namespace');
        
    

    exports.customTypeDatas.Add(

        ((()=>{
            
            if(namespace.length==0){
                return `gobj`;
            }
            else{
                let result=`gobj`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ,
        (()=>{
            let fs=require('fs');
            let clientVersion=JSCLPath;
            let client_js_code=fs.readFileSync(clientVersion).toString();
            manager.globalObjectSourceCodes[

        ((()=>{
            
            if(namespace.length==0){
                return `gobj`;
            }
            else{
                let result=`gobj`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ]=client_js_code;
            let data=

        5

    ;
            return data;
        })())

    

        var NModule=
        function() {
            return require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule");
        }()

    ;

        var nmodule=new NModule();

        var This=nmodule;

        var nmoduleName = 

        ((()=>{
            
            if(namespace.length==0){
                return `demo`;
            }
            else{
                let result=`demo`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ;

        nmodule.name=nmoduleName;

        nmodule.shortName=`demo`;

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [
            (()=>{
                let me=(()=>{
                    try{
                        return (demo-base);
                    }
                    catch{
                        return `demo-base`;
                    }
                })();
                if(me instanceof NModule){
                    return me.name;
                }
                else{
                    return me;
                }
            })()
        ];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    
        
        this.AddMethod('setup',(...args) => {
            let f=
    
            function(){

                
                            var b3f713db1_9aab_4fb1_b478_7f5cdc246c7b = {
                                set stter(value){
                                    manager.Set('demo-namespace:gobj',value);
                                }
                            }
                            b3f713db1_9aab_4fb1_b478_7f5cdc246c7b.stter = 7;

                console.log((manager.Get('demo-namespace:gobj')));

            }
        

    return f.call(this,...args);

}

    );

    

    
        });
    

        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        if(nmodule.side!='server'){
            nmodule.Routing('/nlc/'+nmoduleName, (req, res) => res.send(nmodule.client_js_code));
        }

        

            nmodules.push(nmodule);

        


        namespace.splice(namespace.length-1,1);
        'NFRAMEWORK';'ENDNAMESPACE';
    

                

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}
        
        })()