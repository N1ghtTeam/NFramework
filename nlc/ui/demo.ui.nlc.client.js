(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc/ui";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.client.js";

            var namespace=[];
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['c32a7a88_f7dc_403c_87e7_09034e58d28a']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['c32a7a88_f7dc_403c_87e7_09034e58d28a']=true;
                        
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['demo_main_ui']=true;

            /*
            class demo_main_ui_class extends UIComponent{    

            

    constructor(){
        super();

    }    

    render(){

        let a=5;

        return (
            (()=>{
        
                        let __result__d1c808f6_d8c7_4238_9273_92c06f552594 = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_5ffa763c_3176_44e9_918d_840a0588c02e=document.createElement('demo-ui');

            result_5ffa763c_3176_44e9_918d_840a0588c02e.setAttribute('NUI_id','5ffa763c_3176_44e9_918d_840a0588c02e');
            
            result_5ffa763c_3176_44e9_918d_840a0588c02e.callInside=function(){

                
        var attributes_5ffa763c_3176_44e9_918d_840a0588c02e=[];
    
    
                result_5ffa763c_3176_44e9_918d_840a0588c02e.innerHTML+=`

                `;

            }

            result_5ffa763c_3176_44e9_918d_840a0588c02e.callInside.call(result_5ffa763c_3176_44e9_918d_840a0588c02e);

            
            if(result_5ffa763c_3176_44e9_918d_840a0588c02e.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_5ffa763c_3176_44e9_918d_840a0588c02e.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_5ffa763c_3176_44e9_918d_840a0588c02e.render();
                    if(childs!=null){
                        result_5ffa763c_3176_44e9_918d_840a0588c02e.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_5ffa763c_3176_44e9_918d_840a0588c02e.render();
                        if(childs!=null){
                            result_5ffa763c_3176_44e9_918d_840a0588c02e.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_5ffa763c_3176_44e9_918d_840a0588c02e;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__d1c808f6_d8c7_4238_9273_92c06f552594;
                    })()
        );
    }


        
            }
            */


            (()=>{

                var uiManager = window.NFramework.uiManager;
                //uiManager.uiComponentClasses['demo-main-ui']=demo_main_ui_class;

                let UIClass = function(name){
                    return uiManager.uiComponentClasses[name];
                }

                uiManager.uiComponentClassCreators.push(
                    {
                        'classCreator': ()=>{

                            let baseClassName = (()=>{
                                try{
                                    return ("UIComponent");
                                }
                                catch{  
                                    return `"UIComponent"`;
                                }
                            })();

                            class demo_main_ui_class extends uiManager.uiComponentClasses[baseClassName]{
                        
                
                            

    constructor(){
        super();

    }    

    render(){

        let a=5;

        return (
            (()=>{
        
                        let __result__d1c808f6_d8c7_4238_9273_92c06f552594 = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_5ffa763c_3176_44e9_918d_840a0588c02e=document.createElement('demo-ui');

            result_5ffa763c_3176_44e9_918d_840a0588c02e.setAttribute('NUI_id','5ffa763c_3176_44e9_918d_840a0588c02e');
            
            result_5ffa763c_3176_44e9_918d_840a0588c02e.callInside=function(){

                
        var attributes_5ffa763c_3176_44e9_918d_840a0588c02e=[];
    
    
                result_5ffa763c_3176_44e9_918d_840a0588c02e.innerHTML+=`

                `;

            }

            result_5ffa763c_3176_44e9_918d_840a0588c02e.callInside.call(result_5ffa763c_3176_44e9_918d_840a0588c02e);

            
            if(result_5ffa763c_3176_44e9_918d_840a0588c02e.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_5ffa763c_3176_44e9_918d_840a0588c02e.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_5ffa763c_3176_44e9_918d_840a0588c02e.render();
                    if(childs!=null){
                        result_5ffa763c_3176_44e9_918d_840a0588c02e.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_5ffa763c_3176_44e9_918d_840a0588c02e.render();
                        if(childs!=null){
                            result_5ffa763c_3176_44e9_918d_840a0588c02e.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_5ffa763c_3176_44e9_918d_840a0588c02e;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__d1c808f6_d8c7_4238_9273_92c06f552594;
                    })()
        );
    }


                        
                            }

                            demo_main_ui_class.prototype.componentName='demo-main-ui';
                            demo_main_ui_class.prototype.UIClass=UIClass;

                            demo_main_ui_class.render=function(target){
                                let result=[];
                                if(demo_main_ui_class.prototype.render!=null){
                                    result = demo_main_ui_class.prototype.render.call(target);
                                }
                                result.add=function(data){
                                    for(let element of data){
                                        result.push(element);
                                    }
                                    return result;
                                }
                                result.addBefore=function(data){
                                    let nData=data;
                                    for(let element of result){
                                        nData.push(element);
                                    }
                                    return nData;
                                }
                                return result;
                            }

                            if('main'=='main'){
                                uiManager.mainUIComponentClass = demo_main_ui_class;
                                uiManager.mainUIComponentName = 'demo-main-ui';
                                uiManager.mainComponentNUI_id = '2f0b0ea4_b52e_4b7a_ba28_51261cc95865';
                            }


                            return demo_main_ui_class;
                        },
                        'extends':"UIComponent",
                        'name':'demo-main-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['fa09c160_2a00_44b4_a98e_0092cfd7bfee']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['fa09c160_2a00_44b4_a98e_0092cfd7bfee']=true;
                        
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['demo_ui']=true;

            /*
            class demo_ui_class extends UIComponent{    

            

    constructor(){
        super();
    }    

    render(){

        return(
            UIClass('demo-ui-base').render(this).add(
                (()=>{
        
                        let __result__e2c560fc_c928_412f_a501_0b852e9ae151 = [`     
                    Hello
                `,];  

                        return __result__e2c560fc_c928_412f_a501_0b852e9ae151;
                    })()
            )
        );
    }


        
            }
            */


            (()=>{

                var uiManager = window.NFramework.uiManager;
                //uiManager.uiComponentClasses['demo-ui']=demo_ui_class;

                let UIClass = function(name){
                    return uiManager.uiComponentClasses[name];
                }

                uiManager.uiComponentClassCreators.push(
                    {
                        'classCreator': ()=>{

                            let baseClassName = (()=>{
                                try{
                                    return ('demo-ui-base');
                                }
                                catch{  
                                    return `'demo-ui-base'`;
                                }
                            })();

                            class demo_ui_class extends uiManager.uiComponentClasses[baseClassName]{
                        
                
                            

    constructor(){
        super();
    }    

    render(){

        return(
            UIClass('demo-ui-base').render(this).add(
                (()=>{
        
                        let __result__e2c560fc_c928_412f_a501_0b852e9ae151 = [`     
                    Hello
                `,];  

                        return __result__e2c560fc_c928_412f_a501_0b852e9ae151;
                    })()
            )
        );
    }


                        
                            }

                            demo_ui_class.prototype.componentName='demo-ui';
                            demo_ui_class.prototype.UIClass=UIClass;

                            demo_ui_class.render=function(target){
                                let result=[];
                                if(demo_ui_class.prototype.render!=null){
                                    result = demo_ui_class.prototype.render.call(target);
                                }
                                result.add=function(data){
                                    for(let element of data){
                                        result.push(element);
                                    }
                                    return result;
                                }
                                result.addBefore=function(data){
                                    let nData=data;
                                    for(let element of result){
                                        nData.push(element);
                                    }
                                    return nData;
                                }
                                return result;
                            }

                            if(""=='main'){
                                uiManager.mainUIComponentClass = demo_ui_class;
                                uiManager.mainUIComponentName = 'demo-ui';
                                uiManager.mainComponentNUI_id = '602041ca_afb2_44bf_a1b5_0f9900451b7b';
                            }


                            return demo_ui_class;
                        },
                        'extends':'demo-ui-base',
                        'name':'demo-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['a410bc0d_438a_4f12_8ab8_4943b37d3cd3']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['a410bc0d_438a_4f12_8ab8_4943b37d3cd3']=true;
                        
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['demo_ui_base']=true;

            /*
            class demo_ui_base_class extends UIComponent{    

            

    constructor(){
        super();
    }    

    render(){
        return(
            (()=>{
        
                        let __result__82aed3b0_3676_4a7d_975c_ebdb55165b32 = [`        
                Hello World Base
            `,];  

                        return __result__82aed3b0_3676_4a7d_975c_ebdb55165b32;
                    })()
        );
    }


        
            }
            */


            (()=>{

                var uiManager = window.NFramework.uiManager;
                //uiManager.uiComponentClasses['demo-ui-base']=demo_ui_base_class;

                let UIClass = function(name){
                    return uiManager.uiComponentClasses[name];
                }

                uiManager.uiComponentClassCreators.push(
                    {
                        'classCreator': ()=>{

                            let baseClassName = (()=>{
                                try{
                                    return ("UIComponent");
                                }
                                catch{  
                                    return `"UIComponent"`;
                                }
                            })();

                            class demo_ui_base_class extends uiManager.uiComponentClasses[baseClassName]{
                        
                
                            

    constructor(){
        super();
    }    

    render(){
        return(
            (()=>{
        
                        let __result__82aed3b0_3676_4a7d_975c_ebdb55165b32 = [`        
                Hello World Base
            `,];  

                        return __result__82aed3b0_3676_4a7d_975c_ebdb55165b32;
                    })()
        );
    }


                        
                            }

                            demo_ui_base_class.prototype.componentName='demo-ui-base';
                            demo_ui_base_class.prototype.UIClass=UIClass;

                            demo_ui_base_class.render=function(target){
                                let result=[];
                                if(demo_ui_base_class.prototype.render!=null){
                                    result = demo_ui_base_class.prototype.render.call(target);
                                }
                                result.add=function(data){
                                    for(let element of data){
                                        result.push(element);
                                    }
                                    return result;
                                }
                                result.addBefore=function(data){
                                    let nData=data;
                                    for(let element of result){
                                        nData.push(element);
                                    }
                                    return nData;
                                }
                                return result;
                            }

                            if(""=='main'){
                                uiManager.mainUIComponentClass = demo_ui_base_class;
                                uiManager.mainUIComponentName = 'demo-ui-base';
                                uiManager.mainComponentNUI_id = '63b0ad05_3e15_4cf2_b55e_54bd2114d791';
                            }


                            return demo_ui_base_class;
                        },
                        'extends':"UIComponent",
                        'name':'demo-ui-base'
                    }
                );

            })();

        
                    }
                

                
        
        })()