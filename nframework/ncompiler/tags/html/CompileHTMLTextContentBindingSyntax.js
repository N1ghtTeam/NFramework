
const { v4: uuidv4 } = require('uuid');

let CompileHTMLTextContentBindingSyntax=function(code){

    let result=[];

    let level=0;

    let strChr='';
    let isInStr=false;

    function UpdateIsInStr(i){
        if(!isInStr && (code[i] == '"' || code[i] == '`' || code[i] == "'")){
            isInStr = true;
            strChr  = code[i];
        }
        else
        if(isInStr && code[i] == strChr){
            isInStr = false;
        }
    }

    for(let i=0;i<code.length;i++){

        if(code[i]=='[' && code[i+1]!='['){


            let start   = i;

            i++;

            let end     = i;

            let commaIndex   = -1;

            let bracketLevel        = 0;
            let curlyBracketLevel   = 0;
            let roundBracketLevel   = 0;

            for(;i<code.length;i++){
                UpdateIsInStr(i);

                if(!isInStr){

                    if(commaIndex == -1){
                        if(code[i]=='['){
                            bracketLevel++;
                        }
                        if(code[i]==']'){
                            bracketLevel--;
                        }
                        if(code[i]=='{'){
                            curlyBracketLevel++;
                        }
                        if(code[i]=='}'){
                            curlyBracketLevel--;
                        }
                        if(code[i]=='('){
                            roundBracketLevel++;
                        }
                        if(code[i]==')'){
                            roundBracketLevel--;
                        }
                    }
                    else{
                        if(code[i]==']'){
                            end=i;
                            break;
                        }
                    }

                    if(
                        (
                            curlyBracketLevel    == 0
                            && roundBracketLevel == 0
                            && bracketLevel      == 0
                        )
                        && code[i] == ','
                    ){

                        commaIndex = i; 

                    }


                }

            }

            let autoBindingSyntax = code.substring(start,end+1);

            
            var rfid = uuidv4();

            var rfid2='';

            for(var l=0;l<rfid.length;l++){
                if(rfid[l]!='-'){
                    rfid2+=rfid[l];
                }
                else
                rfid2+='_'
            }

            rfid=rfid2;

            let moduleScript = `(${code.substring(start+1,commaIndex)})`;

            let newPropName = '';

            let propStart = commaIndex+1;
            let propEnd = end-1;

            for(;propStart<end;propStart++){
                if(code[propStart]!=' '){
                    break;
                }
            }
            for(;propEnd>commaIndex;propEnd--){
                if(code[propEnd]!=' '){
                    break;
                }
            }

            let propName = `${code.substring(propStart,propEnd+1)}`;

            result.push({
                'value':`
                            (()=>{
                                var tag_${rfid}=document.createElement('n-text');

                                tag_${rfid}.setAttribute('NUI_id','${rfid}');

                                ${moduleScript}.nTextBindings['${propName}'].push('${rfid}');

                                tag_${rfid}.textContent = ${moduleScript}.Get('${propName}');

                                return tag_${rfid};
                            })()
                        `,
                'type':'child'
            });

            i=end;

        }
        else if(code[i]=='[' && code[i+1]=='['){
            i++;
            result.push({
                'value':'[',
                'type':'textContent'
            });
        }
        else if(code[i]==']' && code[i+1]==']'){
            i++;
            result.push({
                'value':']',
                'type':'textContent'
            });
        }
        else if(code[i]=='{' && code[i+1]!='{'){

            let start   = i;

            i++;

            let end     = i;

            let bracketLevel        = 0;
            let curlyBracketLevel   = 0;
            let roundBracketLevel   = 0;

            for(;i<code.length;i++){
                UpdateIsInStr(i);

                if(!isInStr){

                    if(code[i]=='['){
                        bracketLevel++;
                    }
                    if(code[i]==']'){
                        bracketLevel--;
                    }
                    if(code[i]=='{'){
                        curlyBracketLevel++;
                    }
                    if(code[i]=='}'){
                        if(curlyBracketLevel==0){
                            
                            end=i;
                            break;

                        }
                        curlyBracketLevel--;
                    }
                    if(code[i]=='('){
                        roundBracketLevel++;
                    }
                    if(code[i]==')'){
                        roundBracketLevel--;
                    }

                }

            }

            

            let scriptText = `(${code.substring(start+1,end)})`;

            result.push({
                'value':`
                            (()=>{

                                return ${scriptText};
                            })()
                        `,
                'type':'scriptText'
            });


            i=end;

        }
        else if(code[i]=='{' && code[i+1]=='{'){
            i++;
            result.push({
                'value':'{',
                'type':'textContent'
            });
        }
        else if(code[i]=='}' && code[i+1]=='}'){
            i++;
            result.push({
                'value':'}',
                'type':'textContent'
            });
        }
        else{
            result.push({
                'value':code[i],
                'type':'textContent'
            });
        }

    }

    let rcache=[];

    for(let i=0;i<result.length;i++){
        if(result[i].type=='child'){
            let newR=result[i];
            rcache.push(newR);
        }
        else if(result[i].type=='scriptText'){
            let newR=result[i];
            rcache.push(newR);
        }
        else{
            let j=i+1;
            let newR=result[i];
            for(;j<result.length;j++){
                if(result[j].type=='textContent'){
                    newR.value+=result[j].value;
                }
                else{
                    break;
                }
            }
            rcache.push(newR);
            i=j-1;
        }
    }

    result=rcache;

    return result;
}


module.exports = CompileHTMLTextContentBindingSyntax;