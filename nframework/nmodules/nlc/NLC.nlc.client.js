/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned["92bbe2a9_cae8_498b_aedc_3415d3a0da8f"]&&(window.NFramework.nmoduleManager.nlcElementRunned["92bbe2a9_cae8_498b_aedc_3415d3a0da8f"]=!0,(()=>{var n=new window.NFramework.NModule;n.name="NLC",n.__TYPE="NMODULE",n.baseModules=[],n.side="both",n.RunExternalMethod=function(e){e.call(n)},n.RunExternalMethod(function(){this.AddMethod("Execute",async(...e)=>{let n=async function(e){e=await this.GetThisWithCallback(e=>e.Get("Compile"))(e);return Function(e)()}.bind(this);return n(...e)}),this.AddMethod("TExecute",(...e)=>{return function(...e){return async function(n){return await async function(e){e=await manager.Get("NLC").GetThisWithCallback(e=>e.Get("Compile"))(n,e);return Function(e)()}(...e)}}.call(this,...e)}),this.AddMethod("Compile",async(...e)=>{let n=async function(e){var n=window.origin+"/nlc-compile/";n+=encodeURIComponent(e);let a=await fetch(n);return(await a.json()).compiledCode}.bind(this);return n(...e)})}),window.NFramework.nmoduleManager.ImportModule(n)})());