(()=>{
            var IS_PUBLIC = 0;
            var ScopeId = "D:\\MyTechs\\nframework\\nlc\\ui";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.server.js";
const JSCLPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.client.js";

            try{
                ScopeId = ScopeId;
            }
            catch{
                ScopeId = null;
            }
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['b90699fe_5fe4_4761_aada_f47ba9568253']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['b90699fe_5fe4_4761_aada_f47ba9568253']=true;
                        
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
        
                        let __result__fa8677a8_5ec2_4019_a15e_c522c648bf0f = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8=document.createElement('demo-ui');

            result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.setAttribute('NUI_id','e0bc7d71_f4c0_429f_a0ee_1e32757f01d8');
            
            result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.callInside=function(){

                
        var attributes_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8=[];
    
    
                result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.innerHTML+=`

                `;

            }

            result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.callInside.call(result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8);

            
            if(result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.render();
                    if(childs!=null){
                        result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.render();
                        if(childs!=null){
                            result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__fa8677a8_5ec2_4019_a15e_c522c648bf0f;
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
        
                        let __result__fa8677a8_5ec2_4019_a15e_c522c648bf0f = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8=document.createElement('demo-ui');

            result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.setAttribute('NUI_id','e0bc7d71_f4c0_429f_a0ee_1e32757f01d8');
            
            result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.callInside=function(){

                
        var attributes_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8=[];
    
    
                result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.innerHTML+=`

                `;

            }

            result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.callInside.call(result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8);

            
            if(result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.render();
                    if(childs!=null){
                        result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.render();
                        if(childs!=null){
                            result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_e0bc7d71_f4c0_429f_a0ee_1e32757f01d8;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__fa8677a8_5ec2_4019_a15e_c522c648bf0f;
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
                                uiManager.mainComponentNUI_id = '1f1ab1c6_9614_430c_9039_b9b35fd127e5';
                            }


                            return demo_main_ui_class;
                        },
                        'extends':"UIComponent",
                        'name':'demo-main-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['e0f41889_c821_4297_b94d_b3e6b1356c9c']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['e0f41889_c821_4297_b94d_b3e6b1356c9c']=true;
                        
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
        
                        let __result__b1580d4a_9ac0_411f_b023_5cd09f5bc9c3 = [`     
                    Hello
                `,];  

                        return __result__b1580d4a_9ac0_411f_b023_5cd09f5bc9c3;
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
        
                        let __result__b1580d4a_9ac0_411f_b023_5cd09f5bc9c3 = [`     
                    Hello
                `,];  

                        return __result__b1580d4a_9ac0_411f_b023_5cd09f5bc9c3;
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
                                uiManager.mainComponentNUI_id = '8ca86908_2e7a_47b6_af4c_af00a1fef53c';
                            }


                            return demo_ui_class;
                        },
                        'extends':'demo-ui-base',
                        'name':'demo-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['76a1ab90_0062_4d87_a693_7c23fa4f36d3']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['76a1ab90_0062_4d87_a693_7c23fa4f36d3']=true;
                        
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
        
                        let __result__5128b57d_6d0d_45f3_9838_ff563f7593be = [`        
                Hello World Base
            `,];  

                        return __result__5128b57d_6d0d_45f3_9838_ff563f7593be;
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
        
                        let __result__5128b57d_6d0d_45f3_9838_ff563f7593be = [`        
                Hello World Base
            `,];  

                        return __result__5128b57d_6d0d_45f3_9838_ff563f7593be;
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
                                uiManager.mainComponentNUI_id = '73d79ad0_666c_451c_a87a_4c165c743fe2';
                            }


                            return demo_ui_base_class;
                        },
                        'extends':"UIComponent",
                        'name':'demo-ui-base'
                    }
                );

            })();

        
                    }
                

                
        
            IS_PUBLIC = -1;
        })()