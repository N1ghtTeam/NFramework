/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";module.exports=o=>{let t=new Object,e=[];t.customTypeDatas=[],t.customTypeDatas.Add=function(e,n){t.customTypeDatas.push({key:e,value:n})},t.customTypeDatas.Add("demoGlobalInDemoNLC",(()=>{let e=require("fs");var n=JSCLPath,n=e.readFileSync(n).toString();o.globalObjectSourceCodes.demoGlobalInDemoNLC=n;return 6})());var r=new(d=require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule"));r.side="both",r.name="demop",r.__TYPE="NMODULE",r.RunExternalMethod=function(e){e.call(r)},r.RunExternalMethod(function(){this.AddSyncProperty("sp")});var n=require("fs"),s=JSCLPath;r.client_js_code=n.readFileSync(s),"server"!=r.side&&r.Routing("/nlc/demop",(e,n)=>n.send(r.client_js_code)),e.push(r);var d=require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule");r=new d;r.side="both",r.name="demo",r.__TYPE="NMODULE",r.RunExternalMethod=function(e){e.call(r)},r.RunExternalMethod(function(){this.baseModules=["demop"],this.AddMethod("setup",(...e)=>{return function(){}.call(this,...e)})});n=require("fs"),s=JSCLPath;return r.client_js_code=n.readFileSync(s),"server"!=r.side&&r.Routing("/nlc/demo",(e,n)=>n.send(r.client_js_code)),e.push(r),t.nmodules=e,t.pages=[],t};