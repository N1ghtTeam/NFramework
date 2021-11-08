const { v4: uuidv4 } = require('uuid');

var tag=require('../../tag/tag');

CompileAutoBindingSyntax=function(code){

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

module.exports=function(element,childsCode,code,manager,htmlTagName,tag){
    tag.isJSTag=true;

    var isAutoClose=tag.isAutoClose;

    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

    if(inputs.length>0){
        let newInputs=[];


        newInputs=[];

        for(let i=0;i<inputs.length;i++){

            let ct=false;

            let icache=i;

            if(inputs[i][0]=='='){
                newInputs[i-1]+='='//+inputs[i+1];
                ct=true;
                if(inputs[i][inputs[i].length-1]=='='){
                    newInputs[i-1]+=inputs[i+1];
                    icache=i+1;
                }
            }
            else
            if(inputs[i][inputs[i].length-1]=='='){
                newInputs[i]='='+inputs[i+1];
                icache=i+1;
                ct=true;
            }
            

            i=icache;
            
            if(!ct)
            newInputs.push(inputs[i]);

        }

        inputs=newInputs;


        newInputs=[];

        let inputsStr='';

        for(let i=0;i<inputs.length;i++){

            inputsStr+=inputs[i];

            if(i<inputs.length-1){
                inputsStr+='\n';
            }

        }

        let inputIndex=0;

        let newInputsStr='';

        let curlyBracketCount=0;

        for(let i=0;i<inputsStr.length;i++){

            let strChar='';
            let isInStr=false;

            if(inputsStr[i]=='\n' && curlyBracketCount!=0){
                inputIndex++;
            }
            else{
                if(inputsStr[i]!='\n' || curlyBracketCount==0){
                    newInputsStr+=inputsStr[i];
                }
                else{
                    newInputsStr+=' ';
                }
            }

            if(!isInStr && (inputsStr[i]=='"' || inputsStr[i]=='`' || inputsStr[i]=="'")){
                strChar=inputsStr[i];
                isInStr=true;
            }
            if(isInStr && inputsStr[i]==strChar){
                isInStr=false;
            }

            if(!isInStr){
                
                if(inputsStr[i]=='{'){
                    curlyBracketCount++;
                }
                
                if(inputsStr[i]=='}'){
                    curlyBracketCount--;
                }

            }

        }

        newInputs=newInputsStr.split('\n');

        inputs=newInputs;
        
        newInputs=[];

        for(let i=0;i<inputs.length;i++){

            let parsedInp='';

            let inp=inputs[i];

            let parts=inp.split('=');

            if(parts.length>1){
                let start=0;

                let part1='';

                for(let t=1;t<parts.length;t++){
                    part1+=parts[t];
                    if(t<parts.length-1){
                        part1+='=';
                    }
                }

                let end=part1.length-1;
                for(;start<part1.length;start++){
                    if(part1[start]!=' '){
                        break;
                    }
                }
                for(;end>=0;end--){
                    if(part1[end]!=' '){
                        break;
                    }
                }
                var parsedPart1=part1.substring(start,end+1);

                if(parsedPart1[0]=='{' && parsedPart1[parsedPart1.length-1]=='}'){
                    parsedPart1=parsedPart1.substring(1,parsedPart1.length-1);
                }

                parsedInp = (parts[0]+'='+parsedPart1);
            }
            else{
                parsedInp = (inp);
            }

            newInputs.push(parsedInp);

        }

        inputs=newInputs;
    }



    var rfid = uuidv4();

    var rfid2='';

    for(var i=0;i<rfid.length;i++){
        if(rfid[i]!='-'){
            rfid2+=rfid[i];
        }
        else
        rfid2+='_'
    }

    rfid=rfid2;

    var attributes=`
        var attributes_${rfid}=[];
    `;

    var regex=/^[a-zA-Z]+$/;
    var regex2=/^[0-9]+$/;

    for(var i=0;i<inputs.length;i++){

        //CheckAtriibute
        {

            var atbName='';
            var isStart=false;
            for(var j=0;j<inputs[i].length;j++){
                if(!isStart && (inputs[i][j].match(regex) || inputs[i][j].match(regex2) || inputs[i][j]=='-' || inputs[i][j]=='_')){
                    isStart=true;
                }
                if(isStart && !(inputs[i][j].match(regex) || inputs[i][j].match(regex2) || inputs[i][j]=='-' || inputs[i][j]=='_')){
                    isStart=false;
                    break;
                }
                if(isStart){
                    atbName+=inputs[i][j];
                }
            }
            attributes+=`
                var a${rfid}${atbName}=true;
                attributes_${rfid}.push({
                    key:'${atbName}',
                    value:(()=>{return a${rfid}${inputs[i]}})()
                });
                result_${rfid}.setAttribute('${atbName}',(()=>{return a${rfid}${inputs[i]}})());
            `;
        }
    }

    //attributes+=`
        //for(var attribue of attributes_${rfid}){
        //    result_${rfid}.setAttribute(attribue.key,attribue.value);
        //}
    //`;

    var childsAndTextContents=``;

    for(var i=0;i<contents.length;i++){
        
        if(isAutoClose!=true){
            if(contents[i].type=='childCode'){
                childsAndTextContents+=`
                try{
                    result_${rfid}.appendChild(${contents[i].code});
                }
                catch{
                    result_${rfid}.innerHTML+=${contents[i].code};
                }
                `;
            }
            else
            if(contents[i].type=='textContent'){
                let fid = uuidv4();

                let autoBindingSyntaxRs = CompileAutoBindingSyntax(contents[i].code);

                for(let absR of autoBindingSyntaxRs){
                    let parsedTextContent = tag.ParseToHTMLElementTextcontent(absR.value);
                    if(absR.type=='child'){
                        childsAndTextContents+= `result_${rfid}.appendChild(${absR.value});`;
                    }
                    else if(absR.type=='scriptText'){
                        childsAndTextContents+= `result_${rfid}.innerHTML+=(${absR.value});`;
                    }
                    else{
                        childsAndTextContents+= `result_${rfid}.innerHTML+=${parsedTextContent};`;
                    }
                }

            }
        }
    }


    var compiledCode=`

            var result_${rfid}=document.createElement('${htmlTagName}');

            result_${rfid}.setAttribute('NUI_id','${rfid}');
            
            result_${rfid}.callInside=function(){

                ${attributes}
    
                ${childsAndTextContents}

            }

            result_${rfid}.callInside.call(result_${rfid});

            
            if(result_${rfid}.render!=null){
                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = (result_${rfid}.render instanceof AsyncFunction);

                if(!isAsyncRender){
                    let childs = result_${rfid}.render();
                    if(childs!=null){
                        result_${rfid}.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await result_${rfid}.render();
                        if(childs!=null){
                            result_${rfid}.AppendChilds(childs);
                        }

                    })();
                }
            }

    `;

    return `

    (()=>{

        ${compiledCode}
        
        return result_${rfid};

    })()
        

`;
}