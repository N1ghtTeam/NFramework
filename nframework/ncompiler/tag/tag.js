var Tag=class{
    constructor(){

    }

    Compile(element,childsCode,code){
        return element.startContentIndex + ' ' + element.endContentIndex;
    }

    DontUseNLCFastGet(code){

        return `/*DONTUSENLCFASTGET*/${code}/*DONTUSENLCFASTGET*/`;

    }

    CheckInStr(inputs){

        var result=inputs;

        var inStrIndex=-1;

        for(var i=0;i<inputs.length;i++){

            let isInStr=false;

            var input=inputs[i];

            let strChr='';

            for(var j=0;j<input.length;j++){

                if(!isInStr && (input[j]=='"' || input[j]=="'" || input[j]=='`')){
                    strChr=input[j];
                    isInStr=true;
                }
                else
                    if(isInStr && input[j]==strChr){
                        isInStr=false;
                    }
                
            }

            if(isInStr && i<inputs.length-1){
                inStrIndex=i;
                break;
            }

        }


        if(inStrIndex>=0){

            result[inStrIndex]+=' '+result[inStrIndex+1];
            result.splice(inStrIndex+1, 1);
            
            result=this.CheckInStr(result);

        }

    }

    GetInputs(element,childsCode,code){
        var endTagIndex=element.startContentIndex;

        var strChr='"';

        var isInStr=false;
        
        
        for(var i=element.startContentIndex;i<code.data.length;i++){
            if( (!isInStr) 
                && (code.data[i]=='"' || code.data[i]=="'" || code.data[i]=='`'))
            {
                strChr=code.data[i];
                isInStr=true;
                i++;
            }
            else
            if(isInStr &&  code.data[i]==strChr){
                isInStr=false;
                i++;
            }
            if(!isInStr)
                if((code.data[i]=='>' && !this.isAutoClose)
                    || (code.data[i]=='/' && (this.isAutoClose))){
                    endTagIndex=i;
                    break;
                }
        }
        

        var startInputIndex=element.startContentIndex;

        var endTagName=startInputIndex;
    
            
        var regex=/^[a-zA-Z]+$/;
        var regex2=/^[0-9]+$/;

        var startTagNameIndex=startInputIndex;

        for(var i=element.startContentIndex;i<code.data.length;i++){
            if(code.data[i].match(regex) || code.data[i]=='_' || code.data[i]=='-'){
                startTagNameIndex=i;
                break;
            }
        }

        endTagName=startTagNameIndex+this.name.length;

        
        if (endTagName==endTagIndex){
            return [];
        }

        var inputsStr=code.data.substring(endTagName+1,endTagIndex);


        // if(this.htmlTagName=='img'){
        //     console.log(inputsStr+'/');
        //     console.log(code.data.substring(endTagIndex,code.length));
        // }

    
        var inputs=[];//inputsStr.split(' ');

        var inputsCache=[];

        var oneinput='';

        for(var i=0;i<inputsStr.length;i++){
            if(inputsStr[i]!='\r' && inputsStr[i]!='\n' && inputsStr[i]!=' '){
                //inputsCache.push(inputs[i]);
                oneinput+=inputsStr[i];
            }
            else{
                oneinput+=' ';
            }
        }
      
        var Split=function(data){
            var resultStr=[];

            var s='';

            var isInStr=false;
            var strChr='"';

            for(var i=0;i<data.length;i++){
                if(!isInStr && (data[i]=='"' || data[i]=="'" || data[i] == '`')){
                    strChr=data[i];
                    isInStr=true;
                }
                
                if((data[i]==' ' && !isInStr) || i==(data.length-1)){
                    if(i==(data.length-1) && (data[i]!=' ')){
                        s+=data[i];
                    }
                    resultStr.push(s);
                    s='';
                }
                else{
                    s+=data[i];
                }

                if(!isInStr && data[i]==strChr){
                    isInStr=false;
                }
            }


            return resultStr;
        }
        inputs=oneinput.split(' ');

        var newInputs=this.CheckInStr(inputs);


        

        

        for(var i=0;i<inputs.length;i++){
            if(inputs[i]!=''){
                inputsCache.push(inputs[i]);
            }
        }

        inputs=inputsCache;

        inputsCache=[];

        for(var i=0;i<inputs.length;i++){
            var input=inputs[i];
            var inputr='';
            var regex=/^[a-zA-Z]+$/;
            var j=0;
            var start=0;
            var end=0;
            for(;j<input.length;j++){
                if(input[j]!=' '){
                    start=j;
                    break;
                }
            }
            for(j=input.length-1;j>=start;j--){
                if(input[j]!=' ' && input[j]!='\n' && input[j]!='\r'){
                    end=j;
                    break;
                }
            }
            inputr=input.substring(start,end+1);
            inputsCache.push(inputr);
        }

        inputs=inputsCache;

        return inputs;
        
    }


    GetContent(element,childsCode,code){

        var result=[];

        
        var endTagIndex=element.startContentIndex;

        for(var i=element.startContentIndex;i<=element.endContentIndex;i++){
            if(code.data[i]=='>'){
                endTagIndex=i;
                break;
            }
        }

        var startContent=endTagIndex+1;

        var currentContentPart=new Object();
        currentContentPart.code='';

        for(var i=startContent;i<element.endContentIndex;i++){

            var isInAnyElement=false;

            var getEndElement=function(element){
                var end=element.endContentIndex;
                for(var t=element.endContentIndex;t<code.data.length;t++){
                    if(code.data[t]=='>'){
                        end=t;
                        break;
                    }
                }
                return end;
            }

            for(var j=0;j<element.childs.length;j++){
                var celementEnd=getEndElement(element.childs[j]);
                if(i>=element.childs[j].startContentIndex && i<=celementEnd){
                    isInAnyElement=true;
                    result.push(currentContentPart);
                    
                    currentContentPart=new Object();
                    currentContentPart.code=element.childs[j].code;
                    currentContentPart.type='childCode';
                    result.push(currentContentPart);

                    currentContentPart=new Object();
                    currentContentPart.code='';
                    i=celementEnd;
                    break;
                }
            }

            if(!isInAnyElement){
                currentContentPart.code+=code.data[i];
                currentContentPart.type='textContent';
            }
        }
        

        result.push(currentContentPart);

        return result;

    }


}



module.exports=Tag;