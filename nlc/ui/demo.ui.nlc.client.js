(()=>{
            var ScopeId = "D:\\MyTechs\\nframework/nlc/ui";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.client.js";
manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['73c5ce04_6585_48cd_a36f_5efab428759e']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['73c5ce04_6585_48cd_a36f_5efab428759e']=true;
                        
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
        
                        let __result__0f7df702_b96c_4e7f_b223_e8041021f2ba = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0=document.createElement('demo-ui');

            result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.setAttribute('NUI_id','8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0');
            
            result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.callInside=function(){

                
        var attributes_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0=[];
    
    
                result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.innerHTML+=`

                `;

            }

            result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.callInside.call(result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0);

            
            if(result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.render();
                    if(childs!=null){
                        result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.render();
                        if(childs!=null){
                            result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__0f7df702_b96c_4e7f_b223_e8041021f2ba;
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
        
                        let __result__0f7df702_b96c_4e7f_b223_e8041021f2ba = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0=document.createElement('demo-ui');

            result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.setAttribute('NUI_id','8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0');
            
            result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.callInside=function(){

                
        var attributes_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0=[];
    
    
                result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.innerHTML+=`

                `;

            }

            result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.callInside.call(result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0);

            
            if(result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.render();
                    if(childs!=null){
                        result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.render();
                        if(childs!=null){
                            result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_8a8e35b2_f074_4c62_a1d4_b0d28d7fcbf0;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__0f7df702_b96c_4e7f_b223_e8041021f2ba;
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
                                uiManager.mainComponentNUI_id = 'e56dbe07_95cc_4315_895d_158c9b2e672e';
                            }


                            return demo_main_ui_class;
                        },
                        'extends':"UIComponent",
                        'name':'demo-main-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['28387c73_885a_4f0e_8d24_9415e885ca67']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['28387c73_885a_4f0e_8d24_9415e885ca67']=true;
                        
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
        
                        let __result__f5638aae_3ece_40b2_9da4_a20c2f0c8f32 = [`     
                    Hello
                `,];  

                        return __result__f5638aae_3ece_40b2_9da4_a20c2f0c8f32;
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
        
                        let __result__f5638aae_3ece_40b2_9da4_a20c2f0c8f32 = [`     
                    Hello
                `,];  

                        return __result__f5638aae_3ece_40b2_9da4_a20c2f0c8f32;
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
                                uiManager.mainComponentNUI_id = 'c1c94f42_1184_42fc_a25b_9ba22cac456b';
                            }


                            return demo_ui_class;
                        },
                        'extends':'demo-ui-base',
                        'name':'demo-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['3bdf406a_15ed_4d1d_be21_1ba7bd1185b5']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['3bdf406a_15ed_4d1d_be21_1ba7bd1185b5']=true;
                        
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
        
                        let __result__9e5a1569_878b_4304_9b3f_2a958736ffbc = [`        
                Hello World Base
            `,];  

                        return __result__9e5a1569_878b_4304_9b3f_2a958736ffbc;
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
        
                        let __result__9e5a1569_878b_4304_9b3f_2a958736ffbc = [`        
                Hello World Base
            `,];  

                        return __result__9e5a1569_878b_4304_9b3f_2a958736ffbc;
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
                                uiManager.mainComponentNUI_id = '4eeafee4_4bf5_448a_9ece_e3aca0ac231a';
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