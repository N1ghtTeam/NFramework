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
                result_${rfid}.setAttribute(attributes_${rfid}[attributes_${rfid}.length-1].key,attributes_${rfid}[attributes_${rfid}.length-1].value);
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
                result_${rfid}.appendChild(${contents[i].code});
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

            window.result_${rfid}=result_${rfid};
            
            ${attributes}

            ${childsAndTextContents}
            

    `;

    return `

    (()=>{

        ${compiledCode}
        
        return result_${rfid};

    })()
        

`;
}