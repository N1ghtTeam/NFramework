/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned["08342e92_70d1_439c_bc67_65b5311d6962"]&&(window.NFramework.nmoduleManager.nlcElementRunned["08342e92_70d1_439c_bc67_65b5311d6962"]=!0,(()=>{var r=new window.NFramework.NModule;r.name="demo-router",r.__TYPE="NMODULE",r.baseModules=[],r.side="both",r.RunExternalMethod=function(e){e.call(r)},r.RunExternalMethod(function(){path="/",callback=(e,r)=>{(e=>{var r=manager.NFramework,a=manager.pages.demoPage.modules,n="";n+=r.clejs,n+="\n<nlc>","*"==a&&(a=Object.keys(manager.modules));for(var o,m=0;m<a.length;m++){var c=a[m];"both"!=manager.modules[c].side&&"client"!=manager.modules[c].side||(n+=' <script  src="/nlc/'+c+'"><\/script>')}for(o of manager.pages.demoPage.customTypeDatas)n+="\n<script src='/nlc/"+o+"'><\/script>";var s,r=manager.pages.demoPage.uiComponents;for(s of r="*"==r?manager.uiComponents:r)n+="\n<script src='/nlc/"+s+"'><\/script>";n+="\n</nlc>",n="<nframework-scripts>"+(n+="\n<script src='/appcl'><\/script>")+"</nframework-scripts>",e.render(manager.pages.demoPage.src,{NFramework:n})})(r)}}),window.NFramework.nmoduleManager.ImportModule(r)})());