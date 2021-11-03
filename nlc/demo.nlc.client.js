/* NFRAMEWORK */var adbf4910f_ee50_40fd_bd0f_af9957aedd7f_module;manager=window.NFramework.nmoduleManager,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.my_mb=!0;class my_mb_class extends HTMLElement{constructor(){super(),this.componentName="my-mb"}render(){let e=document.createElement("style");return e.textContent=`

            my-mb{
                color: red;
            }

        `,this.appendChild(e),[`

                `,(()=>{var e=document.createElement("h1");if(e.innerHTML+="\r\n\r\n                    my-mb\r\n\r\n                ",null!=e.render){var n=e.render();if(null!=n)for(var r of n)try{e.appendChild(r)}catch{e.innerHTML+=r}}return e})(),`
            
            `]}}customElements.define("my-mb",my_mb_class),null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.my_button=!0;class my_button_class extends HTMLElement{constructor(){super(),this.componentName="my-button"}render(){let e=document.createElement("style");return e.textContent=`

            my-button{
                color: blue;
            }

        `,this.appendChild(e),[`

                OK

                `,(()=>{if(null!=window.NFramework.customTags.ui&&null!=window.NFramework.customTags.ui.my_mb)return(()=>{var e=document.createElement("my-mb");if(e.innerHTML+="\r\n\r\n\r\n                ",null!=e.render){var n=e.render();if(null!=n)for(var r of n)try{e.appendChild(r)}catch{e.innerHTML+=r}}return e})()})(),`

            `]}}customElements.define("my-button",my_button_class),null==window.NFramework.nmoduleManager.nlcElementRunned["19de740c_af5a_4c1f_b4d0_dd4af64dd679"]&&(window.NFramework.nmoduleManager.nlcElementRunned["19de740c_af5a_4c1f_b4d0_dd4af64dd679"]=!0,(()=>{var n=new window.NFramework.NModule;n.side="both",n.name="demo",n.__TYPE="NMODULE",n.RunExternalMethod=function(e){e.call(n)},n.RunExternalMethod(function(){this.AddProperty("prop"),this.AddMethod("setup",async(...e)=>{let n=async function(){this.GetThisWithCallback(e=>{adbf4910f_ee50_40fd_bd0f_af9957aedd7f_module=e});let e={set stter(e){adbf4910f_ee50_40fd_bd0f_af9957aedd7f_module.Set("prop",e)}};e.stter='console.log("clicked");',manager.Get("dom").GetThisWithCallback(e=>e.Get("body")).appendChild((()=>{if(null!=window.NFramework.customTags.ui&&null!=window.NFramework.customTags.ui.my_button)return(()=>{var e=document.createElement("my-button");if(e.innerHTML+="\r\n\r\n                    ",null!=e.render){var n=e.render();if(null!=n)for(var r of n)try{e.appendChild(r)}catch{e.innerHTML+=r}}return e})()})())}.bind(this);return n(...e)})}),window.NFramework.nmoduleManager.ImportModule(n)})());