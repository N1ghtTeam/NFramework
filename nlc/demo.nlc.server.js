var JSCLPath = "D:\\nframework_gr/nlc/demo.nlc.client.js";module.exports=(manager)=>{
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

                    
                
                    exports.customTypeDatas.Add('demoGlobal',(()=>{
            var data=

    function() {
        
    }

;
            return data;
        })())
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                