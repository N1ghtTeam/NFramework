const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.oneTime = true;

tag.Compile = function(element, childsCode, code, manager) {
    let inputs = tag.GetInputs(element, childsCode, code);

    function checkInput(inputs){
        let newInputs = [];

        let needReCheck = false;

        for(let input of inputs){
            if(input[0]=='}' && input.length!=1){
                newInputs.push('}');
                newInputs.push(input.substring(1,input.length));
                needReCheck = true;
            }
            else
            if(input[input.length-1]=='{' && input.length!=1){
                newInputs.push(input.substring(0,input.length-1));
                newInputs.push('{');
                needReCheck = true;
            }
            else if(input[input.length-1]=='}' && input.length!=1){
                newInputs.push(input.substring(0,input.length-1));
                newInputs.push('}');
                needReCheck = true;
            }
            else if(input[0]=='{' && input.length!=1){
                newInputs.push('{');
                newInputs.push(input.substring(1,input.length));
                needReCheck = true;
            }
            else{
                newInputs.push(input);
            }
        }

        if(needReCheck){
            newInputs = checkInput(newInputs);
        }

        return newInputs;

    }

    inputs = checkInput(inputs);


    //get side
    let side=`'both'`;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i]=='side'){
            side=inputs[i+2];
            break;
        }
    }



    let contents = tag.GetContent(element, childsCode, code);

    let compiledCode = '';

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    
    let globalObjName = inputs[0];

    globalObjName = `

        ((()=>{
            
            if(namespace.length==0){
                return `+'`'+`${globalObjName}`+'`'+`;
            }
            else{
                let result=`+'`'+`${globalObjName}`+'`'+`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    `;


    if (element.forSV) {

        let compiledJSCode = '' + compiledCode + '';

        manager.jsCode[inputs[0]] = compiledJSCode;


        compiledCode = `
        (()=>{
            let fs=require('fs');
            let clientVersion=JSCLPath;
            let client_js_code=fs.readFileSync(clientVersion).toString();
            manager.globalObjectSourceCodes[${globalObjName}]=client_js_code;
            let data;
            if(${side} == 'both' || ${side} == 'server' )
                data = (${compiledCode});
            return data;
        })()`

        return `exports.customTypeDatas.Add(${globalObjName},${compiledCode});
                
                
                if(${side} == 'both' || ${side} == 'client' ){
                    var fs=require('fs');
    
                    var gobjclientVersion=JSCLPath;
    
                    var gobjclient_js_code=fs.readFileSync(gobjclientVersion);

                    let express_server = manager.NFramework.express_server;

                    let newPath = '';

                    for(let c of ${globalObjName}){
                        if(c==':'){
                            newPath += '--';
                        }
                        else newPath += c;
                    }

                    newPath = '/nlc/' + newPath;
            
                    express_server.get(newPath, (req, res) => res.send(gobjclient_js_code));
                }
        `;
    } else{

        return ` manager.customTypeDatas[${globalObjName}]=(()=>{
            let data=${compiledCode};
            return data;
        })();`;
    }
}


module.exports = tag;
