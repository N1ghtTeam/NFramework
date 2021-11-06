manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['7b61edcb_934e_4686_9657_7c402ac2c74b']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['7b61edcb_934e_4686_9657_7c402ac2c74b']=true;
                        
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['demo_ui']=true;

            /*
            class demo_ui_class extends UIComponent{

                constructor(){
                    super();
                    this.componentName='demo-ui';
                }                

            

    render(){

        return(
            UIClass('demo-ui-base').render(this).add(
                (()=>{
                        let __result__453yh5b6jnu76imk76 = [`     
                    Hello
                `,];  

                        __result__453yh5b6jnu76imk76.elements=[];

                        return __result__453yh5b6jnu76imk76;
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
                            class demo_ui_class extends uiManager.uiComponentClasses['demo-ui-base']{
                
                                constructor(){
                                    super();
                                    this.UIClass=UIClass;
                                    this.componentName='demo-ui';
                                }                
                
                            

    render(){

        return(
            UIClass('demo-ui-base').render(this).add(
                (()=>{
                        let __result__453yh5b6jnu76imk76 = [`     
                    Hello
                `,];  

                        __result__453yh5b6jnu76imk76.elements=[];

                        return __result__453yh5b6jnu76imk76;
                    })()
            )
        );
    }


                        
                            }

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

                            return demo_ui_class;
                        },
                        'extends':'demo-ui-base',
                        'name':'demo-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['d9e38f8b_f7ea_40a1_8622_0c4b7142427c']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['d9e38f8b_f7ea_40a1_8622_0c4b7142427c']=true;
                        
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['demo_ui_base']=true;

            /*
            class demo_ui_base_class extends UIComponent{

                constructor(){
                    super();
                    this.componentName='demo-ui-base';
                }                

            

    render(){
        return(
            (()=>{
                        let __result__453yh5b6jnu76imk76 = [`        
                Hello World Base
            `,];  

                        __result__453yh5b6jnu76imk76.elements=[];

                        return __result__453yh5b6jnu76imk76;
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
                            class demo_ui_base_class extends uiManager.uiComponentClasses['UIComponent']{
                
                                constructor(){
                                    super();
                                    this.UIClass=UIClass;
                                    this.componentName='demo-ui-base';
                                }                
                
                            

    render(){
        return(
            (()=>{
                        let __result__453yh5b6jnu76imk76 = [`        
                Hello World Base
            `,];  

                        __result__453yh5b6jnu76imk76.elements=[];

                        return __result__453yh5b6jnu76imk76;
                    })()
        );
    }


                        
                            }

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

                            return demo_ui_base_class;
                        },
                        'extends':'UIComponent',
                        'name':'demo-ui-base'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['b5964b01_dc20_4b78_9fd2_2d8a2f3b5d02']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['b5964b01_dc20_4b78_9fd2_2d8a2f3b5d02']=true;
                        
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['demo_main_ui']=true;

            /*
            class demo_main_ui_class extends UIComponent{

                constructor(){
                    super();
                    this.componentName='demo-main-ui';
                }                

                

    async render(){


        return (
            await (async ()=>{
                        let __result__453yh5b6jnu76imk76 = [`
                
                `,
                    await (async ()=>{
                        
                        return (
                            
                            await (manager.Get('NLC')).GetThisWithCallback((module)=>{
                            return module.Get('Execute');
                        })(
                                `
                                    <use html>

                                    <region>
                                    
                                        return (
                                            <div>
                                                Hello World
                                            </div>
                
                                        );
                
                                    </region>

                                `
                            )
                            
                        );

                    })()
                ,`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_fba238d3_8e6c_4157_bed0_3e5ab82af394=document.createElement('demo-ui');
            
            
        var attributes_fba238d3_8e6c_4157_bed0_3e5ab82af394=[];
    

            result_fba238d3_8e6c_4157_bed0_3e5ab82af394.innerHTML+=
""+'\r\n\r\n                '+""
;
            
            if(result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render();
                    if(childs!=null){
                        result_fba238d3_8e6c_4157_bed0_3e5ab82af394.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render();
                        if(childs!=null){
                            result_fba238d3_8e6c_4157_bed0_3e5ab82af394.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_fba238d3_8e6c_4157_bed0_3e5ab82af394;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        __result__453yh5b6jnu76imk76.elements=[
                    await (async ()=>{
                        
                        return (
                            
                            await (manager.Get('NLC')).GetThisWithCallback((module)=>{
                            return module.Get('Execute');
                        })(
                                `
                                    <use html>

                                    <region>
                                    
                                        return (
                                            <div>
                                                Hello World
                                            </div>
                
                                        );
                
                                    </region>

                                `
                            )
                            
                        );

                    })()
                ,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_fba238d3_8e6c_4157_bed0_3e5ab82af394=document.createElement('demo-ui');
            
            
        var attributes_fba238d3_8e6c_4157_bed0_3e5ab82af394=[];
    

            result_fba238d3_8e6c_4157_bed0_3e5ab82af394.innerHTML+=
""+'\r\n\r\n                '+""
;
            
            if(result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render();
                    if(childs!=null){
                        result_fba238d3_8e6c_4157_bed0_3e5ab82af394.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render();
                        if(childs!=null){
                            result_fba238d3_8e6c_4157_bed0_3e5ab82af394.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_fba238d3_8e6c_4157_bed0_3e5ab82af394;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,];

                        return __result__453yh5b6jnu76imk76;
                    })()
        );
    }



            }
            */
            

            (()=>{
                var uiManager = window.NFramework.uiManager;

                let UIClass = function(name){
                    return uiManager.uiComponentClasses[name];
                }


                uiManager.uiComponentClassCreators.push(
                    {
                        'classCreator': ()=>{
                            class demo_main_ui_class extends uiManager.uiComponentClasses['UIComponent']{
                
                                constructor(){
                                    super();
                                    this.UIClass=UIClass;
                                    this.componentName='demo-main-ui';
                                }                
                
                            

    async render(){


        return (
            await (async ()=>{
                        let __result__453yh5b6jnu76imk76 = [`
                
                `,
                    await (async ()=>{
                        
                        return (
                            
                            await (manager.Get('NLC')).GetThisWithCallback((module)=>{
                            return module.Get('Execute');
                        })(
                                `
                                    <use html>

                                    <region>
                                    
                                        return (
                                            <div>
                                                Hello World
                                            </div>
                
                                        );
                
                                    </region>

                                `
                            )
                            
                        );

                    })()
                ,`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_fba238d3_8e6c_4157_bed0_3e5ab82af394=document.createElement('demo-ui');
            
            
        var attributes_fba238d3_8e6c_4157_bed0_3e5ab82af394=[];
    

            result_fba238d3_8e6c_4157_bed0_3e5ab82af394.innerHTML+=
""+'\r\n\r\n                '+""
;
            
            if(result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render();
                    if(childs!=null){
                        result_fba238d3_8e6c_4157_bed0_3e5ab82af394.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render();
                        if(childs!=null){
                            result_fba238d3_8e6c_4157_bed0_3e5ab82af394.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_fba238d3_8e6c_4157_bed0_3e5ab82af394;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        __result__453yh5b6jnu76imk76.elements=[
                    await (async ()=>{
                        
                        return (
                            
                            await (manager.Get('NLC')).GetThisWithCallback((module)=>{
                            return module.Get('Execute');
                        })(
                                `
                                    <use html>

                                    <region>
                                    
                                        return (
                                            <div>
                                                Hello World
                                            </div>
                
                                        );
                
                                    </region>

                                `
                            )
                            
                        );

                    })()
                ,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_fba238d3_8e6c_4157_bed0_3e5ab82af394=document.createElement('demo-ui');
            
            
        var attributes_fba238d3_8e6c_4157_bed0_3e5ab82af394=[];
    

            result_fba238d3_8e6c_4157_bed0_3e5ab82af394.innerHTML+=
""+'\r\n\r\n                '+""
;
            
            if(result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render();
                    if(childs!=null){
                        result_fba238d3_8e6c_4157_bed0_3e5ab82af394.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_fba238d3_8e6c_4157_bed0_3e5ab82af394.render();
                        if(childs!=null){
                            result_fba238d3_8e6c_4157_bed0_3e5ab82af394.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_fba238d3_8e6c_4157_bed0_3e5ab82af394;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,];

                        return __result__453yh5b6jnu76imk76;
                    })()
        );
    }


                        
                            }

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

                            
                            uiManager.mainUIComponentClass = demo_main_ui_class;
                            uiManager.mainUIComponentName = 'demo-main-ui';

                            return demo_main_ui_class;
                        },
                        'extends':'UIComponent',
                        'name':'demo-main-ui'
                    }
                );

            })();
            

            {
    

                (()=>{     
/*
                    let nframeworkAppUI = document.createElement('demo-main-ui');

                    document.body.appendChild(nframeworkAppUI);
        
                    if(nframeworkAppUI.render!=null){
                        let childs = nframeworkAppUI.render();
                        if(childs!=null){
                            nframeworkAppUI.AppendChilds(childs);
                        }
                    }
*/
                })();
            }
            

        
                    }
                

                