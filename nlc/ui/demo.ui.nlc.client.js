/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned.e68a2e75_80f4_41da_ba85_631d12390adb&&(window.NFramework.nmoduleManager.nlcElementRunned.e68a2e75_80f4_41da_ba85_631d12390adb=!0,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.demo_main_ui=!0,(()=>{var r=window.NFramework.uiManager;function e(e){return r.uiComponentClasses[e]}r.uiComponentClassCreators.push({classCreator:()=>{class n extends r.uiComponentClasses.UIComponent{constructor(){super(),this.UIClass=e,this.componentName="demo-main-ui"}async render(){return[`
                
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

            `]}}return n.render=function(e){let o=[];return null!=n.prototype.render&&(o=n.prototype.render.call(e)),o.add=function(e){for(var n of e)o.push(n);return o},o.addBefore=function(e){let n=e;for(var r of o)n.push(r);return n},o},r.mainUIComponentClass=n,r.mainUIComponentName="demo-main-ui",n},extends:"UIComponent",name:"demo-main-ui"})})()),null==window.NFramework.nmoduleManager.nlcElementRunned.e4299153_e172_4acf_a0a9_017951d18fe2&&(window.NFramework.nmoduleManager.nlcElementRunned.e4299153_e172_4acf_a0a9_017951d18fe2=!0,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.demo_ui=!0,(()=>{var r=window.NFramework.uiManager;function e(e){return r.uiComponentClasses[e]}r.uiComponentClassCreators.push({classCreator:()=>{class n extends r.uiComponentClasses["demo-ui-base"]{constructor(){super(),this.UIClass=e,this.componentName="demo-ui"}render(){return e("demo-ui-base").render(this).add([`     
                    Hello
                `])}}return n.render=function(e){let o=[];return null!=n.prototype.render&&(o=n.prototype.render.call(e)),o.add=function(e){for(var n of e)o.push(n);return o},o.addBefore=function(e){let n=e;for(var r of o)n.push(r);return n},o},n},extends:"demo-ui-base",name:"demo-ui"})})()),null==window.NFramework.nmoduleManager.nlcElementRunned.b2c54c99_4a46_48b9_abe1_6d314c81ce01&&(window.NFramework.nmoduleManager.nlcElementRunned.b2c54c99_4a46_48b9_abe1_6d314c81ce01=!0,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.demo_ui_base=!0,(()=>{var r=window.NFramework.uiManager;function e(e){return r.uiComponentClasses[e]}r.uiComponentClassCreators.push({classCreator:()=>{class n extends r.uiComponentClasses.UIComponent{constructor(){super(),this.UIClass=e,this.componentName="demo-ui-base"}render(){return[`        
                Hello World Base
            `]}}return n.render=function(e){let o=[];return null!=n.prototype.render&&(o=n.prototype.render.call(e)),o.add=function(e){for(var n of e)o.push(n);return o},o.addBefore=function(e){let n=e;for(var r of o)n.push(r);return n},o},n},extends:"UIComponent",name:"demo-ui-base"})})());