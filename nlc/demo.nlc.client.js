
                            var a8787973b_4eea_49b9_adef_0d5d06d4a9e5_module;
                        manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['58384fe8_9b03_4015_8e39_f617f541a68c']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['58384fe8_9b03_4015_8e39_f617f541a68c']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

    this.AddProperty('prop');

    

    

        
        this.AddMethod('setup',async (...args)=>{
                let f=async function(){

                var text='Click Here To Log Hello World';

                var demoGlobalValue=(manager.Get('demoGlobal'));

                this.GetThisWithCallback((module)=>{
                            a8787973b_4eea_49b9_adef_0d5d06d4a9e5_module=module;
                        })
                        let getterObj8787973b_4eea_49b9_adef_0d5d06d4a9e5={
                            set stter(value) {
                                a8787973b_4eea_49b9_adef_0d5d06d4a9e5_module.Set('prop',value);
                            }
                        }
                        getterObj8787973b_4eea_49b9_adef_0d5d06d4a9e5.stter=`console.log('${demoGlobalValue}')`;
                
                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(

                    

    (()=>{

        

            var result_983ea662_133a_45a1_a7d2_7ebc6640fd13=document.createElement('div');

            window.result_983ea662_133a_45a1_a7d2_7ebc6640fd13=result_983ea662_133a_45a1_a7d2_7ebc6640fd13;
            
            
        var attributes_983ea662_133a_45a1_a7d2_7ebc6640fd13=[];
    
                var a983ea662_133a_45a1_a7d2_7ebc6640fd13onclick=true;
                attributes_983ea662_133a_45a1_a7d2_7ebc6640fd13.push({
                    key:'onclick',
                    value:(()=>{return a983ea662_133a_45a1_a7d2_7ebc6640fd13onclick= (manager.Get('demo')).GetThisWithCallback((module)=>{
                            return module.Get('prop');
                        }) })()
                });
                result_983ea662_133a_45a1_a7d2_7ebc6640fd13.setAttribute(attributes_983ea662_133a_45a1_a7d2_7ebc6640fd13[attributes_983ea662_133a_45a1_a7d2_7ebc6640fd13.length-1].key,attributes_983ea662_133a_45a1_a7d2_7ebc6640fd13[attributes_983ea662_133a_45a1_a7d2_7ebc6640fd13.length-1].value);
            

            result_983ea662_133a_45a1_a7d2_7ebc6640fd13.innerHTML+=
""+'\r\n                        \r\n                        '+""
;
                try{
                    result_983ea662_133a_45a1_a7d2_7ebc6640fd13.appendChild(

                            text

                        );
                }
                catch{
                    result_983ea662_133a_45a1_a7d2_7ebc6640fd13.innerHTML+=

                            text

                        ;
                }
                result_983ea662_133a_45a1_a7d2_7ebc6640fd13.innerHTML+=
""+'\r\n\r\n                    '+""
;
            

    
        
        return result_983ea662_133a_45a1_a7d2_7ebc6640fd13;

    })()
        



                );

            }

        
                let f2=f.bind(this);
                return await f2(...args);
            }

        );

    

    


        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                