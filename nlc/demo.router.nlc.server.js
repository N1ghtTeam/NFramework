/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework/nlc/demo.router.nlc.client.js";module.exports=n=>{let s=new Object,e=[];s.customTypeDatas=[],s.customTypeDatas.Add=function(e,r){s.customTypeDatas.push({key:e,value:r})};var c=new(require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule"));c.side="both",c.name="demo-router",c.__TYPE="NMODULE",c.RunExternalMethod=function(e){e.call(c)},c.RunExternalMethod(function(){path="",callback=()=>{},path="/",callback=(e,r)=>{(e=>{var r=n.NFramework,s=n.pages.demoPage.modules,c="";c+=r.clejs;for(var a,t,o=0;o<s.length;o++)c+=' <script  src="/nlc/'+s[o]+'"><\/script>';for(a of n.pages.demoPage.customTypeDatas)c+="\n<script src='/nlc/"+a+"'><\/script>";for(t of n.pages.demoPage.uiComponents)c+="\n<script src='/nlc/"+t+"'><\/script>";e.render(n.pages.demoPage.src,{NFramework:c="<nframework-scripts>"+(c+="\n<script src='/appcl'><\/script>")+"</nframework-scripts>"})})(r)},c.Routing(path,callback)});var r=require("fs"),a=JSCLPath;return c.client_js_code=r.readFileSync(a),"server"!=c.side&&c.Routing("/nlc/demo-router",(e,r)=>r.send(c.client_js_code)),e.push(c),s.nmodules=e,s.pages=[],s};