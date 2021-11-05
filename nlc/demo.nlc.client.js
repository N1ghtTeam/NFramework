/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned["38ba8fd7_e498_400e_b64a_0eeb6cf537a7"]&&(window.NFramework.nmoduleManager.nlcElementRunned["38ba8fd7_e498_400e_b64a_0eeb6cf537a7"]=!0,(()=>{var n=new window.NFramework.NModule;n.side="both",n.name="demo",n.__TYPE="NMODULE",n.RunExternalMethod=function(e){e.call(n)},n.RunExternalMethod(function(){this.AddProperty("prop"),this.AddMethod("CreateEC",(...e)=>{return function(...e){let t=this;return function(n){return function(e){return new n}.call(t,...e)}}.call(this,...e)}),this.AddMethod("setup",async(...e)=>{let n=async function(){await manager.Get("NLC").GetThisWithCallback(e=>e.Get("Execute"))(`
                    <use html>
                    <use dom>
                    
                    <region>

                        @dom->body.appendChild(
                            <div>
                                Hello World
                            </div>
                        );

                    </region>
                `)}.bind(this);return n(...e)})}),window.NFramework.nmoduleManager.ImportModule(n)})());