/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework/nlc/demoGlobal.nlc.client.js";module.exports=t=>{let l=new Object;return l.customTypeDatas=[],l.customTypeDatas.Add=function(e,o){l.customTypeDatas.push({key:e,value:o})},l.customTypeDatas.Add("demoGlobal",(()=>{let e=require("fs");var o=JSCLPath,o=e.readFileSync(o).toString();t.globalObjectSourceCodes.demoGlobal=o;return"Hello World"})()),l.nmodules=[],l.pages=[],l};