/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework/nlc/ui/demo.ui.c1.nlc.client.js";module.exports=e=>{let t=new Object;t.customTypeDatas=[],t.customTypeDatas.Add=function(e,s){t.customTypeDatas.push({key:e,value:s})};var n=require("fs").readFileSync(JSCLPath).toString();let s=e.NFramework.express_server;return e.uiComponents.push("demo-ui-c1"),s.get("/nlc/demo-ui-c1",(e,s)=>{s.send(n)}),t.nmodules=[],t.pages=[],t};