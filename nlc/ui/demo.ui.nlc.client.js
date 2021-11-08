manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['17789579_43b6_4ebc_8b2e_2a3605c69372']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['17789579_43b6_4ebc_8b2e_2a3605c69372']=true;
                        
            if(window.NFramework.customTags['ui']==null)
                window.NFramework.customTags['ui']=new Object();
            window.NFramework.customTags['ui']['demo_main_ui']=true;

            /*
            class demo_main_ui_class extends UIComponent{    

            

    constructor(){
        super();
    }    

    render(){

        let a=(
            

    (()=>{

        

            var result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600=document.createElement('div');

            result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.setAttribute('NUI_id','6f3718bb_9b4f_4ad9_9f1a_a151702aa600');
            
            result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.callInside=function(){

                
        var attributes_6f3718bb_9b4f_4ad9_9f1a_a151702aa600=[];
    
    
                result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.innerHTML+=
""+'\r\n\r\n                OK\r\n\r\n            '+""
;

            }

            result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.callInside.call(result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600);

            
            if(result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.render();
                    if(childs!=null){
                        result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.render();
                        if(childs!=null){
                            result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600;

    })()
        


        );

        return (
            (()=>{
        
                        let __result__c1af1ca0_51e0_48bc_b897_3c7f76673bcc = [`
                
                `,
                            (()=>{
                                var tag_d3e77c5d_9005_42a8_a635_92255988ec21=document.createElement('n-text');

                                tag_d3e77c5d_9005_42a8_a635_92255988ec21.setAttribute('NUI_id','d3e77c5d_9005_42a8_a635_92255988ec21');

                                ((manager.Get('demo'))).nTextBindings['prop'].push('d3e77c5d_9005_42a8_a635_92255988ec21');

                                tag_d3e77c5d_9005_42a8_a635_92255988ec21.textContent = ((manager.Get('demo'))).Get('prop');

                                return tag_d3e77c5d_9005_42a8_a635_92255988ec21;
                            })()
                        ,`

                `,
                            (()=>{

                                return (a);
                            })()
                        ,`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_61e98ebb_d5ca_49d0_8eef_bd6980158859=document.createElement('demo-ui');

            result_61e98ebb_d5ca_49d0_8eef_bd6980158859.setAttribute('NUI_id','61e98ebb_d5ca_49d0_8eef_bd6980158859');
            
            result_61e98ebb_d5ca_49d0_8eef_bd6980158859.callInside=function(){

                
        var attributes_61e98ebb_d5ca_49d0_8eef_bd6980158859=[];
    
    
                result_61e98ebb_d5ca_49d0_8eef_bd6980158859.innerHTML+=
""+'\r\n\r\n                '+""
;

            }

            result_61e98ebb_d5ca_49d0_8eef_bd6980158859.callInside.call(result_61e98ebb_d5ca_49d0_8eef_bd6980158859);

            
            if(result_61e98ebb_d5ca_49d0_8eef_bd6980158859.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_61e98ebb_d5ca_49d0_8eef_bd6980158859.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_61e98ebb_d5ca_49d0_8eef_bd6980158859.render();
                    if(childs!=null){
                        result_61e98ebb_d5ca_49d0_8eef_bd6980158859.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_61e98ebb_d5ca_49d0_8eef_bd6980158859.render();
                        if(childs!=null){
                            result_61e98ebb_d5ca_49d0_8eef_bd6980158859.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_61e98ebb_d5ca_49d0_8eef_bd6980158859;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__c1af1ca0_51e0_48bc_b897_3c7f76673bcc;
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
                            class demo_main_ui_class extends uiManager.uiComponentClasses['UIComponent']{
                        
                
                            

    constructor(){
        super();
    }    

    render(){

        let a=(
            

    (()=>{

        

            var result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600=document.createElement('div');

            result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.setAttribute('NUI_id','6f3718bb_9b4f_4ad9_9f1a_a151702aa600');
            
            result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.callInside=function(){

                
        var attributes_6f3718bb_9b4f_4ad9_9f1a_a151702aa600=[];
    
    
                result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.innerHTML+=
""+'\r\n\r\n                OK\r\n\r\n            '+""
;

            }

            result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.callInside.call(result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600);

            
            if(result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.render();
                    if(childs!=null){
                        result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.render();
                        if(childs!=null){
                            result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_6f3718bb_9b4f_4ad9_9f1a_a151702aa600;

    })()
        


        );

        return (
            (()=>{
        
                        let __result__c1af1ca0_51e0_48bc_b897_3c7f76673bcc = [`
                
                `,
                            (()=>{
                                var tag_d3e77c5d_9005_42a8_a635_92255988ec21=document.createElement('n-text');

                                tag_d3e77c5d_9005_42a8_a635_92255988ec21.setAttribute('NUI_id','d3e77c5d_9005_42a8_a635_92255988ec21');

                                ((manager.Get('demo'))).nTextBindings['prop'].push('d3e77c5d_9005_42a8_a635_92255988ec21');

                                tag_d3e77c5d_9005_42a8_a635_92255988ec21.textContent = ((manager.Get('demo'))).Get('prop');

                                return tag_d3e77c5d_9005_42a8_a635_92255988ec21;
                            })()
                        ,`

                `,
                            (()=>{

                                return (a);
                            })()
                        ,`

                `,
            (()=>{
                
            if(window.NFramework.customTags['ui']!=null){
                if(window.NFramework.customTags['ui']['demo_ui']!=null){
                    let r_demo_ui = 

    (()=>{

        

            var result_61e98ebb_d5ca_49d0_8eef_bd6980158859=document.createElement('demo-ui');

            result_61e98ebb_d5ca_49d0_8eef_bd6980158859.setAttribute('NUI_id','61e98ebb_d5ca_49d0_8eef_bd6980158859');
            
            result_61e98ebb_d5ca_49d0_8eef_bd6980158859.callInside=function(){

                
        var attributes_61e98ebb_d5ca_49d0_8eef_bd6980158859=[];
    
    
                result_61e98ebb_d5ca_49d0_8eef_bd6980158859.innerHTML+=
""+'\r\n\r\n                '+""
;

            }

            result_61e98ebb_d5ca_49d0_8eef_bd6980158859.callInside.call(result_61e98ebb_d5ca_49d0_8eef_bd6980158859);

            
            if(result_61e98ebb_d5ca_49d0_8eef_bd6980158859.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_61e98ebb_d5ca_49d0_8eef_bd6980158859.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_61e98ebb_d5ca_49d0_8eef_bd6980158859.render();
                    if(childs!=null){
                        result_61e98ebb_d5ca_49d0_8eef_bd6980158859.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_61e98ebb_d5ca_49d0_8eef_bd6980158859.render();
                        if(childs!=null){
                            result_61e98ebb_d5ca_49d0_8eef_bd6980158859.AppendChilds(childs);
                        }

                    })();
                }
            }

    
        
        return result_61e98ebb_d5ca_49d0_8eef_bd6980158859;

    })()
        

;
                    return r_demo_ui;
                }
            }
            
            })()
        ,`

            `,];  

                        return __result__c1af1ca0_51e0_48bc_b897_3c7f76673bcc;
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

                            
                                            uiManager.mainUIComponentClass = demo_main_ui_class;
                                            uiManager.mainUIComponentName = 'demo-main-ui';
                                        


                            return demo_main_ui_class;
                        },
                        'extends':'UIComponent',
                        'name':'demo-main-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['768d7408_3536_411a_924f_b2650a58a708']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['768d7408_3536_411a_924f_b2650a58a708']=true;
                        
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
        
                        let __result__49b1757e_5e48_4e61_9edb_694581cae12d = [`     
                    Hello
                `,];  

                        return __result__49b1757e_5e48_4e61_9edb_694581cae12d;
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
    }    

    render(){

        return(
            UIClass('demo-ui-base').render(this).add(
                (()=>{
        
                        let __result__49b1757e_5e48_4e61_9edb_694581cae12d = [`     
                    Hello
                `,];  

                        return __result__49b1757e_5e48_4e61_9edb_694581cae12d;
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

                            


                            return demo_ui_class;
                        },
                        'extends':'demo-ui-base',
                        'name':'demo-ui'
                    }
                );

            })();

        
                    }
                

                

                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['0d8fe688_15c4_45ac_bdf0_8e408fd0a3d1']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['0d8fe688_15c4_45ac_bdf0_8e408fd0a3d1']=true;
                        
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
        
                        let __result__ade0c2c3_5cfb_4d74_b88d_f4dadd427e24 = [`        
                Hello World Base
            `,];  

                        return __result__ade0c2c3_5cfb_4d74_b88d_f4dadd427e24;
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
    }    

    render(){
        return(
            (()=>{
        
                        let __result__ade0c2c3_5cfb_4d74_b88d_f4dadd427e24 = [`        
                Hello World Base
            `,];  

                        return __result__ade0c2c3_5cfb_4d74_b88d_f4dadd427e24;
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

                            


                            return demo_ui_base_class;
                        },
                        'extends':'UIComponent',
                        'name':'demo-ui-base'
                    }
                );

            })();

        
                    }
                

                