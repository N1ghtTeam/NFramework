
            if(window.NFramework.nmoduleManager.nlcElementRunned['7873ac20_f520_4bf7_871c_bba8daf6c15d']==null){
                window.NFramework.nmoduleManager.nlcElementRunned['7873ac20_f520_4bf7_871c_bba8daf6c15d']=true;
                manager = window.NFramework.nmoduleManager;


                     manager.customTypeDatas['demoGlobalInDemoNLC']=(()=>{
            let data=

6

;
            return data;
        })();

                

                    
            (()=>{
                

        let NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        let nmodule=new NModule();

        let This=nmodule;

        nmodule.side='both';

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

    

        

    this.AddProperty('prop');

    

        
        this.AddMethod('setup',(...args) => {
            let f=
    

            function(){
                
                
                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(

                    

    (()=>{

        

            var result_55e75983_08a7_47a1_a43a_419974b5a38b=document.createElement('div');

            window.result_55e75983_08a7_47a1_a43a_419974b5a38b=result_55e75983_08a7_47a1_a43a_419974b5a38b;
            
            
        var attributes_55e75983_08a7_47a1_a43a_419974b5a38b=[];
    
                var a55e75983_08a7_47a1_a43a_419974b5a38bclass=true;
                attributes_55e75983_08a7_47a1_a43a_419974b5a38b.push({
                    key:'class',
                    value:(()=>{return a55e75983_08a7_47a1_a43a_419974b5a38bclass='demo1'})()
                });
                result_55e75983_08a7_47a1_a43a_419974b5a38b.setAttribute(attributes_55e75983_08a7_47a1_a43a_419974b5a38b[attributes_55e75983_08a7_47a1_a43a_419974b5a38b.length-1].key,attributes_55e75983_08a7_47a1_a43a_419974b5a38b[attributes_55e75983_08a7_47a1_a43a_419974b5a38b.length-1].value);
            

            result_55e75983_08a7_47a1_a43a_419974b5a38b.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                            '+""
;
                result_55e75983_08a7_47a1_a43a_419974b5a38b.appendChild(

    (()=>{

        

            var result_30a576a0_603b_4041_b923_bc9d49ba6f50=document.createElement('div');

            window.result_30a576a0_603b_4041_b923_bc9d49ba6f50=result_30a576a0_603b_4041_b923_bc9d49ba6f50;
            
            
        var attributes_30a576a0_603b_4041_b923_bc9d49ba6f50=[];
    
                var a30a576a0_603b_4041_b923_bc9d49ba6f50class=true;
                attributes_30a576a0_603b_4041_b923_bc9d49ba6f50.push({
                    key:'class',
                    value:(()=>{return a30a576a0_603b_4041_b923_bc9d49ba6f50class='demo2'})()
                });
                result_30a576a0_603b_4041_b923_bc9d49ba6f50.setAttribute(attributes_30a576a0_603b_4041_b923_bc9d49ba6f50[attributes_30a576a0_603b_4041_b923_bc9d49ba6f50.length-1].key,attributes_30a576a0_603b_4041_b923_bc9d49ba6f50[attributes_30a576a0_603b_4041_b923_bc9d49ba6f50.length-1].value);
            

            result_30a576a0_603b_4041_b923_bc9d49ba6f50.innerHTML+=
""+'\r\n\r\n                                Hello World2\r\n\r\n                            '+""
;
            

    
        
        return result_30a576a0_603b_4041_b923_bc9d49ba6f50;

    })()
        

);
                result_55e75983_08a7_47a1_a43a_419974b5a38b.innerHTML+=
""+'\r\n\r\n                        Hello World\r\n\r\n                    '+""
;
            

    
        
        return result_55e75983_08a7_47a1_a43a_419974b5a38b;

    })()
        



                );

                console.log((manager.Get('demoGlobalInDemoNLC')));


            }

        

    return f.call(this,...args);

}

    );

    

    


        });
    

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                
            }

            
            