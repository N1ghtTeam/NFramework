(()=>{
            const JSCLPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework/nlc/ui/demo.ui.nlc.server.js";
var scopeId = "D:\\MyTechs\\nframework/nlc/ui";


            var IS_THIS_PUBLIC = true;

            try{
                scopeId = scopeId;
            }
            catch{
                scopeId = 'global';
            }

            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['24925a5a_de34_4550_b5ce_362b7758d6d2']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['24925a5a_de34_4550_b5ce_362b7758d6d2']=true;
                        
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
        
                        let __result__cda8814f_398a_4674_afff_b25e4e16a42c = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_27ffe648_8ce9_48b4_9365_57468bcc1217=document.createElement('demo-ui');

            result_27ffe648_8ce9_48b4_9365_57468bcc1217.setAttribute('NUI_id','27ffe648_8ce9_48b4_9365_57468bcc1217');
            
            result_27ffe648_8ce9_48b4_9365_57468bcc1217.callInside=function(){

                
        var attributes_27ffe648_8ce9_48b4_9365_57468bcc1217=[];
    
    
                result_27ffe648_8ce9_48b4_9365_57468bcc1217.innerHTML+=`

                `;

            }

            result_27ffe648_8ce9_48b4_9365_57468bcc1217.callInside.call(result_27ffe648_8ce9_48b4_9365_57468bcc1217);

            
            if(result_27ffe648_8ce9_48b4_9365_57468bcc1217.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_27ffe648_8ce9_48b4_9365_57468bcc1217.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_27ffe648_8ce9_48b4_9365_57468bcc1217.render();
                    if(childs!=null){
                        result_27ffe648_8ce9_48b4_9365_57468bcc1217.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_27ffe648_8ce9_48b4_9365_57468bcc1217.render();
                        if(childs!=null){
                            result_27ffe648_8ce9_48b4_9365_57468bcc1217.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_27ffe648_8ce9_48b4_9365_57468bcc1217;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__cda8814f_398a_4674_afff_b25e4e16a42c;
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
        
                        let __result__cda8814f_398a_4674_afff_b25e4e16a42c = [`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_27ffe648_8ce9_48b4_9365_57468bcc1217=document.createElement('demo-ui');

            result_27ffe648_8ce9_48b4_9365_57468bcc1217.setAttribute('NUI_id','27ffe648_8ce9_48b4_9365_57468bcc1217');
            
            result_27ffe648_8ce9_48b4_9365_57468bcc1217.callInside=function(){

                
        var attributes_27ffe648_8ce9_48b4_9365_57468bcc1217=[];
    
    
                result_27ffe648_8ce9_48b4_9365_57468bcc1217.innerHTML+=`

                `;

            }

            result_27ffe648_8ce9_48b4_9365_57468bcc1217.callInside.call(result_27ffe648_8ce9_48b4_9365_57468bcc1217);

            
            if(result_27ffe648_8ce9_48b4_9365_57468bcc1217.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_27ffe648_8ce9_48b4_9365_57468bcc1217.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_27ffe648_8ce9_48b4_9365_57468bcc1217.render();
                    if(childs!=null){
                        result_27ffe648_8ce9_48b4_9365_57468bcc1217.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_27ffe648_8ce9_48b4_9365_57468bcc1217.render();
                        if(childs!=null){
                            result_27ffe648_8ce9_48b4_9365_57468bcc1217.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_27ffe648_8ce9_48b4_9365_57468bcc1217;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__cda8814f_398a_4674_afff_b25e4e16a42c;
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
                                uiManager.mainComponentNUI_id = 'af839b1d_f212_4277_9b84_b1b4823bb143';
                            }


                            return demo_main_ui_class;
                        },
                        'extends':"UIComponent",
                        'name':'demo-main-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['e818c498_0ab3_4ac6_80c5_31029200ad57']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['e818c498_0ab3_4ac6_80c5_31029200ad57']=true;
                        
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
        
                        let __result__f2f5e920_871a_4b52_bb3a_3270a347284b = [`     
                    Hello
                `,];  

                        return __result__f2f5e920_871a_4b52_bb3a_3270a347284b;
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
        
                        let __result__f2f5e920_871a_4b52_bb3a_3270a347284b = [`     
                    Hello
                `,];  

                        return __result__f2f5e920_871a_4b52_bb3a_3270a347284b;
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
                                uiManager.mainComponentNUI_id = 'f2d41804_d5cd_48f8_a01c_221dd3868503';
                            }


                            return demo_ui_class;
                        },
                        'extends':'demo-ui-base',
                        'name':'demo-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['60470fa0_7324_48a3_8c62_020bee38d46b']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['60470fa0_7324_48a3_8c62_020bee38d46b']=true;
                        
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
        
                        let __result__f8f15450_d8f9_4870_a4db_bbb6db0fb7b9 = [`        
                Hello World Base
            `,];  

                        return __result__f8f15450_d8f9_4870_a4db_bbb6db0fb7b9;
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
        
                        let __result__f8f15450_d8f9_4870_a4db_bbb6db0fb7b9 = [`        
                Hello World Base
            `,];  

                        return __result__f8f15450_d8f9_4870_a4db_bbb6db0fb7b9;
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
                                uiManager.mainComponentNUI_id = '714625e7_13db_49ac_b45c_c8bd96ceee6d';
                            }


                            return demo_ui_base_class;
                        },
                        'extends':"UIComponent",
                        'name':'demo-ui-base'
                    }
                );

            })();

        
                    }
                

                
            
            IS_THIS_PUBLIC=false;
            
        
        })()