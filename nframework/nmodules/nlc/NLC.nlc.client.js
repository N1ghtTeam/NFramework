/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned["630de278_0d71_4834_88ec_8406af3261c1"]&&(window.NFramework.nmoduleManager.nlcElementRunned["630de278_0d71_4834_88ec_8406af3261c1"]=!0,(()=>{var e=new window.NFramework.NModule;e.name="NLC",e.__TYPE="NMODULE",e.baseModules=[],e.side="both",e.RunExternalMethod=function(n){n.call(e)},e.RunExternalMethod(function(){this.AddMethod("Execute",async(...n)=>{let e=async function(n){n=await this.GetThisWithCallback(n=>n.Get("Compile"))(n);return Function(n)()}.bind(this);return e(...n)}),this.AddMethod("TExecute",(...n)=>{return function(...n){return async function(e){return await async function(n){n=await manager.Get("NLC").GetThisWithCallback(n=>n.Get("Compile"))(e,n);return Function(n)()}(...n)}}.call(this,...n)}),this.AddMethod("Compile",async(...n)=>{let e=async function(n){var e=window.origin+"/nlc-compile/";e+=encodeURIComponent(n);let t=await fetch(e);return(await t.json()).compiledCode}.bind(this);return e(...n)})}),window.NFramework.nmoduleManager.ImportModule(e)})());