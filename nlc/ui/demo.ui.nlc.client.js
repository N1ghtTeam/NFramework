manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['a9679f50_a8be_40b1_bbf5_5e83bcd5cffa']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['a9679f50_a8be_40b1_bbf5_5e83bcd5cffa']=true;
                        
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
        
                        let __result__7b5492d0_b040_4a02_9273_0eb9af5d64dd = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0=document.createElement('demo-ui');

            result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.setAttribute('NUI_id','3ff502cc_e660_4dbc_903f_0f87d3bf91a0');
            
            result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.callInside=function(){

                
        var attributes_3ff502cc_e660_4dbc_903f_0f87d3bf91a0=[];
    
    
                result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.innerHTML+=`

                `;

            }

            result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.callInside.call(result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0);

            
            if(result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.render();
                    if(childs!=null){
                        result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.render();
                        if(childs!=null){
                            result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__7b5492d0_b040_4a02_9273_0eb9af5d64dd;
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
        
                        let __result__7b5492d0_b040_4a02_9273_0eb9af5d64dd = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0=document.createElement('demo-ui');

            result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.setAttribute('NUI_id','3ff502cc_e660_4dbc_903f_0f87d3bf91a0');
            
            result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.callInside=function(){

                
        var attributes_3ff502cc_e660_4dbc_903f_0f87d3bf91a0=[];
    
    
                result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.innerHTML+=`

                `;

            }

            result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.callInside.call(result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0);

            
            if(result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.render();
                    if(childs!=null){
                        result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.render();
                        if(childs!=null){
                            result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_3ff502cc_e660_4dbc_903f_0f87d3bf91a0;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__7b5492d0_b040_4a02_9273_0eb9af5d64dd;
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
                                uiManager.mainComponentNUI_id = '89e862f6_e338_479f_b699_bfb27c319f4a';
                            }


                            return demo_main_ui_class;
                        },
                        'extends':"UIComponent",
                        'name':'demo-main-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['eee6d206_769e_42c3_b0cf_c664b2da3470']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['eee6d206_769e_42c3_b0cf_c664b2da3470']=true;
                        
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
        
                        let __result__b12bc689_a5ba_4280_9f14_69ec1aa8adb6 = [`     
                    Hello
                `,];  

                        return __result__b12bc689_a5ba_4280_9f14_69ec1aa8adb6;
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
        
                        let __result__b12bc689_a5ba_4280_9f14_69ec1aa8adb6 = [`     
                    Hello
                `,];  

                        return __result__b12bc689_a5ba_4280_9f14_69ec1aa8adb6;
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
                                uiManager.mainComponentNUI_id = '19b4d603_7d3e_4dde_99b9_2e07b4017b65';
                            }


                            return demo_ui_class;
                        },
                        'extends':'demo-ui-base',
                        'name':'demo-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['e4e31293_6d27_47c0_8007_498b1b3f728e']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['e4e31293_6d27_47c0_8007_498b1b3f728e']=true;
                        
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
        
                        let __result__ef26886a_a572_482e_8b3d_9c10f9273e09 = [`        
                Hello World Base
            `,];  

                        return __result__ef26886a_a572_482e_8b3d_9c10f9273e09;
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
        
                        let __result__ef26886a_a572_482e_8b3d_9c10f9273e09 = [`        
                Hello World Base
            `,];  

                        return __result__ef26886a_a572_482e_8b3d_9c10f9273e09;
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
                                uiManager.mainComponentNUI_id = 'c29543ae_1ea3_4df4_8d3a_a0de4b5f1b71';
                            }


                            return demo_ui_base_class;
                        },
                        'extends':"UIComponent",
                        'name':'demo-ui-base'
                    }
                );

            })();

        
                    }
                

                