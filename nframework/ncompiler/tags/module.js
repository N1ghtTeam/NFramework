const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

let parsed__dirname = '';

for (let i = 0; i < __dirname.length; i++) {
    if (__dirname[i] == '\\') {
        parsed__dirname += '\\\\';
    } else {
        parsed__dirname += __dirname[i];
    }
}

let nmodulePath = parsed__dirname + '/../../nmodule/nmodule';

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let inputs = tag.GetInputs(element, childsCode, code);

    let moduleName = inputs[inputs.length - 1];

    let nmoduleImportCode = `
        function() {
            return require("${nmodulePath}");
        }()

    `;

    if (!element.forSV) {
        nmoduleImportCode = `
            function() {
                return window.NFramework.NModule;
            }()

        `;
    }

    let side = 'both';

    if (!element.forSV) {

    }

    let compiledCode = `

        let NModule=${nmoduleImportCode};

        let nmodule=new NModule();

        let This=nmodule;

        nmodule.side='${side}';

        nmodule.name='${moduleName}';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    `;

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    compiledCode += `
        });
    `;

    if (element.forSV) {
        compiledCode += `
        
        let fs=require('fs');

        let clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        if(nmodule.side!='server'){
            nmodule.Routing('/nlc/${moduleName}', (req, res) => res.send(nmodule.client_js_code));
        }

        `;
    } else {
        compiledCode += `

            let nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        `;
    }

    if (element.forSV) {
        compiledCode += `

            nmodules.push(nmodule);

        `;
    }



    if (!element.forSV) {
        compiledCode = `
            (()=>{
                ${compiledCode}
            })();
        `;
    }

    return compiledCode;
}


module.exports = tag;
