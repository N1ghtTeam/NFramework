/* NFRAMEWORK */(()=>{var e,n,t=[];manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned.dd2772c3_8b1b_4b2d_bf82_f5598ac0fba1&&(window.NFramework.nmoduleManager.nlcElementRunned.dd2772c3_8b1b_4b2d_bf82_f5598ac0fba1=!0,e=new window.NFramework.NModule,n=(()=>{if(0==t.length)return"NLC";{let n="NLC";for(var e=t.length-1;0<=e;e--)n=t[e]+":"+n;return n}})(),e.name=n,e.shortName="NLC",e.__TYPE="NMODULE",e.baseModules=[],e.side="both",e.RunExternalMethod=function(n){n.call(e)},e.RunExternalMethod(function(){this.AddMethod("Execute",async(...n)=>{let e=async function(n){n=await this.GetThisWithCallback(n=>n.Get("Compile"))(n);return Function(n)()}.bind(this);return e(...n)}),this.AddMethod("TExecute",(...n)=>{return function(...n){return async function(e){return await async function(n){n=await manager.Get("NLC").GetThisWithCallback(n=>n.Get("Compile"))(e,n);return Function(n)()}(...n)}}.call(this,...n)}),this.AddMethod("Compile",async(...n)=>{let e=async function(n){var e=window.origin+"/nlc-compile/";e+=encodeURIComponent(n);let t=await fetch(e);return(await t.json()).compiledCode}.bind(this);return e(...n)})}),window.NFramework.nmoduleManager.ImportModule(e))})();