/* NFRAMEWORK */(()=>{var l=[];module.exports=e=>{let r=new Object,n=[];r.customTypeDatas=[],r.customTypeDatas.Add=function(e,n){r.customTypeDatas.push({key:e,value:n})};var o=new(require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule")),t=(()=>{if(0==l.length)return"dom";{let e="dom";for(var n=l.length-1;0<=n;n--)e=l[n]+":"+e;return e}})();o.name=t,o.shortName="dom",o.__TYPE="NMODULE",o.baseModules=[],o.side="both",o.RunExternalMethod=function(e){e.call(o)},o.RunExternalMethod(function(){});var a=require("fs");o.client_js_code=a.readFileSync("D:\\MyTechs\\nframework\\nframework/nmodules/dom/dom.nlc.client.js");var s="";for(let e=0;e<t.length;e++)":"==t[e]?s+="--":s+=t[e];return"server"!=o.side&&o.Routing("/nlc/"+s,(e,n)=>n.send(o.client_js_code)),n.push(o),r.nmodules=n,r.pages=[],r.packages=[],r}})();