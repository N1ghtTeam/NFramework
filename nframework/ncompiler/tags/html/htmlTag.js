/*

const { v4: uuidv4 } = require('uuid');

module.exports=function(element,childsCode,code,manager,htmlTagName,tag){
    var isAutoClose=tag.isAutoClose;

    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

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

    var childs=``;

    if(isAutoClose!=true){
        for(var i=0;i<contents.length;i++){
            if(contents[i].type=='childCode'){
                childs+=`
                result_${rfid}.appendChild(${contents[i].code});
                `;
            }
        }
    }



    var attributes=`
        var attributes_${rfid}=[];
    `;

    var regex=/^[a-zA-Z]+$/;
    var regex2=/^[0-9]+$/;

    for(var i=0;i<inputs.length;i++){
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
        `;
    }

    attributes+=`
        for(var attribue of attributes_${rfid}){
            result_${rfid}.setAttribute(attribue.key,attribue.value);
        }
    `;

    var textContent=``;//result.textContent+=



    for(var i=0;i<contents.length;i++){
        if(contents[i].type=='textContent'){
            var fid = uuidv4();
            manager.textContents[fid]=contents[i].code;
            textContent+=`result_${rfid}.textContent+=manager.GetTextContent('${fid}');
            `;
        }
    }


    var compiledCode=`

            var result_${rfid}=document.createElement('${htmlTagName}');
            
            ${attributes}

            ${textContent}

            ${childs}
            

    `;

    return `

    (()=>{

        ${compiledCode}
        
        return result_${rfid};

    })()
        

`;
}

*/

const { v4: uuidv4 } = require('uuid');

var tag=require('../../tag/tag');

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
                let parsedTextContent=tag.ParseToHTMLElementTextcontent(contents[i].code);
                childsAndTextContents+=`result_${rfid}.innerHTML+=${parsedTextContent};`;
            }
        }
    }


    var compiledCode=`

            var result_${rfid}=document.createElement('${htmlTagName}');
            
            ${attributes}

            ${childsAndTextContents}
            
            if(result_${rfid}.render!=null){
                let childs = result_${rfid}.render();
                if(childs!=null){
                    for(let child of childs){
                        result_${rfid}.appendChild(child);
                    }
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