/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework/nlc/demo.router.nlc.client.js";module.exports=t=>{let o=new Object,e=[];o.customTypeDatas=[],o.customTypeDatas.Add=function(e,n){o.customTypeDatas.push({key:e,value:n})};var a=new(require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule"));a.name="demo-router",a.__TYPE="NMODULE",a.baseModules=[],a.side="both",a.RunExternalMethod=function(e){e.call(a)},a.RunExternalMethod(function(){path="/",callback=(e,n)=>{t.Get("demoPage").Render(e,n)},a.Routing(path,callback)});var n=require("fs"),r=JSCLPath;return a.client_js_code=n.readFileSync(r),"server"!=a.side&&a.Routing("/nlc/demo-router",(e,n)=>n.send(a.client_js_code)),e.push(a),o.nmodules=e,o.pages=[],o};