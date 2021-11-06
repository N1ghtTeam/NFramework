/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned.ca831326_1f81_4b13_b7e0_695fdd31f32b&&(window.NFramework.nmoduleManager.nlcElementRunned.ca831326_1f81_4b13_b7e0_695fdd31f32b=!0,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.demo_main_ui=!0,(()=>{var r=window.NFramework.uiManager;function e(e){return r.uiComponentClasses[e]}r.uiComponentClassCreators.push({classCreator:()=>{class n extends r.uiComponentClasses.UIComponent{constructor(){super(),this.UIClass=e,this.componentName="demo-main-ui"}async render(){return[`
                
                `,await manager.Get("NLC").GetThisWithCallback(e=>e.Get("Execute"))(`
                            <use html>

                            <region>
                            
                                return (
                                    <div>
                                        Hello World
                                    </div>                
                                );
        
                            </region>

                        `),`

                `,(()=>{var e,n;if(null!=window.NFramework.customTags.ui&&null!=window.NFramework.customTags.ui.demo_ui)return(n=document.createElement("demo-ui")).innerHTML+="\r\n\r\n                ",null!=n.render&&(n.render instanceof(async()=>{}).constructor?(async()=>{var e=await n.render();null!=e&&n.AppendChilds(e)})():null!=(e=n.render())&&n.AppendChilds(e)),n})(),`

            `]}}return n.render=function(e){let o=[];return null!=n.prototype.render&&(o=n.prototype.render.call(e)),o.add=function(e){for(var n of e)o.push(n);return o},o.addBefore=function(e){let n=e;for(var r of o)n.push(r);return n},o},r.mainUIComponentClass=n,r.mainUIComponentName="demo-main-ui",n},extends:"UIComponent",name:"demo-main-ui"})})()),null==window.NFramework.nmoduleManager.nlcElementRunned.abdca33b_b161_4c0a_b81a_2f3e6dd9e5de&&(window.NFramework.nmoduleManager.nlcElementRunned.abdca33b_b161_4c0a_b81a_2f3e6dd9e5de=!0,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.demo_ui=!0,(()=>{var r=window.NFramework.uiManager;function e(e){return r.uiComponentClasses[e]}r.uiComponentClassCreators.push({classCreator:()=>{class n extends r.uiComponentClasses["demo-ui-base"]{constructor(){super(),this.UIClass=e,this.componentName="demo-ui"}render(){return e("demo-ui-base").render(this).add([`     
                    Hello
                `])}}return n.render=function(e){let o=[];return null!=n.prototype.render&&(o=n.prototype.render.call(e)),o.add=function(e){for(var n of e)o.push(n);return o},o.addBefore=function(e){let n=e;for(var r of o)n.push(r);return n},o},n},extends:"demo-ui-base",name:"demo-ui"})})()),null==window.NFramework.nmoduleManager.nlcElementRunned["27f166ca_5b19_40df_b147_b64465677ee7"]&&(window.NFramework.nmoduleManager.nlcElementRunned["27f166ca_5b19_40df_b147_b64465677ee7"]=!0,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.demo_ui_base=!0,(()=>{var r=window.NFramework.uiManager;function e(e){return r.uiComponentClasses[e]}r.uiComponentClassCreators.push({classCreator:()=>{class n extends r.uiComponentClasses.UIComponent{constructor(){super(),this.UIClass=e,this.componentName="demo-ui-base"}render(){return[`        
                Hello World Base
            `]}}return n.render=function(e){let o=[];return null!=n.prototype.render&&(o=n.prototype.render.call(e)),o.add=function(e){for(var n of e)o.push(n);return o},o.addBefore=function(e){let n=e;for(var r of o)n.push(r);return n},o},n},extends:"UIComponent",name:"demo-ui-base"})})());