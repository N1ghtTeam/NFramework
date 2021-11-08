class Tag {
    constructor() {
        this.specialCharacters = {
            '"': `'"'+`,
            '`': "'`'+",
            "'": "`'`+",
            "\n": `'\\n'+`,
            "\r": `'\\r'+`
        }
    }

    Compile(element, childsCode, code) {
        return element.startContentIndex + ' ' + element.endContentIndex;
    }

    ParseToHTMLElementTextcontent(str) {
        let result = '';

        /*
        str.split('').map(str => result += this.specialCharacters[str] || `'${str}'+`);

        let rcache2 = '';

        let strChr = '';

        for (let i = 0; i < result.length; i++) {
            if (result[i] == '"' || result[i] == "'" || result[i] == '`') {
                strChr = result[i];
                for (; i < result.length; i++) {
                    if (result[i] == strChr) {
                        if (result[i + 2] != strChr) {
                            rcache2 += result[i];
                        } else {
                            i += 2;
                        }
                        break;
                    }
                    rcache2 += result[i];
                }
            } else {
                rcache2 += result[i];
            }
        }

        result = rcache2;

        let rcache = '\n' + '""+'+result + '+""' + '\n';
        if(rcache[rcache.length - 4] == rcache[rcache.length - 5]) rcache = '\n' + '""+' + result + '""' + '\n';

        result = rcache;
        */

        for(let i=0;i<str.length;i++){
            if(str[i]=='`'){
                result+='`+"`"+`';
            }
            else{
                result+=str[i];
            }
        }

        result='`'+result+'`';

        return result;
    }

    CheckInStr(inputs) {
        let result = inputs;

        let inStrIndex = -1;

        for (let i = 0; i < inputs.length; i++) {
            let isInStr = false;

            let input = inputs[i];

            let strChr = '';

            for (let j = 0; j < input.length; j++) {
                if (!isInStr && (input[j] == '"' || input[j] == "'" || input[j] == '`')) {
                    strChr = input[j];
                    isInStr = true;
                } else if (isInStr && input[j] == strChr) {
                    isInStr = false;
                }
            }

            if (isInStr && i < inputs.length - 1) {
                inStrIndex = i;
                break;
            }
        }

        if (inStrIndex >= 0) {
            result[inStrIndex] += ' ' + result[inStrIndex + 1];
            result.splice(inStrIndex + 1, 1);

            result = this.CheckInStr(result);
        }
    }

    GetInputs(element, childsCode, code) {
        let endTagIndex = element.startContentIndex;
        let strChr = '"';
        let isInStr = false;
        
        let curlyBracketCount=0;
        let roundBracketCount=0;

        for (let i = element.startContentIndex; i < code.data.length; i++) {
            if ((!isInStr) &&
                (code.data[i] == '"' || code.data[i] == "'" || code.data[i] == '`')) {
                strChr = code.data[i];
                isInStr = true;
            }
            else if (isInStr && code.data[i] == strChr) {
                isInStr = false;
            }

            if(!isInStr){
                if(code.data[i]=='{'){
                    curlyBracketCount++;
                }
                if(code.data[i]=='}'){
                    curlyBracketCount--;
                }
                if(code.data[i]=='('){
                    roundBracketCount++;
                }
                if(code.data[i]==')'){
                    roundBracketCount--;
                }
            }

            if (!isInStr){
                
                if ((code.data[i] == '>' && !this.isAutoClose && (roundBracketCount==0 && curlyBracketCount==0)) ||
                    (code.data[i] == '/' && (this.isAutoClose)  && (roundBracketCount==0 && curlyBracketCount==0))) {
                    endTagIndex = i;
                    break;
                }
            }
        }

        let startInputIndex = element.startContentIndex;

        let endTagName = startInputIndex;

        let regex = /^[a-zA-Z]+$/;
        let regex2 = /^[0-9]+$/;

        let startTagNameIndex = startInputIndex;

        for (let i = element.startContentIndex; i < code.data.length; i++) {
            if (code.data[i].match(regex) || code.data[i] == '_' || code.data[i] == '-') {
                startTagNameIndex = i;
                break;
            }
        }

        endTagName = startTagNameIndex + this.name.length;

        if (endTagName == endTagIndex) return [];

        let inputsStr = code.data.substring(endTagName + 1, endTagIndex);

        let inputs = [];

        let inputsCache = [];

        let oneinput = '';

        for (let i = 0; i < inputsStr.length; i++)
            oneinput += (inputsStr[i] != '\r' && inputsStr[i] != '\n' && inputsStr[i] != ' ') ?
                         inputsStr[i] : ' ';


        inputs = oneinput.split(' ');

        let newInputs = this.CheckInStr(inputs);

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i] != '') {
                inputsCache.push(inputs[i]);
            }
        }

        inputs = inputsCache;

        inputsCache = [];

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let inputr = '';
            let regex = /^[a-zA-Z]+$/;
            let j = 0;
            let start = 0;
            let end = 0;
            for (; j < input.length; j++) {
                if (input[j] != ' ') {
                    start = j;
                    break;
                }
            }
            for (j = input.length - 1; j >= start; j--) {
                if (input[j] != ' ' && input[j] != '\n' && input[j] != '\r') {
                    end = j;
                    break;
                }
            }
            inputr = input.substring(start, end + 1);
            inputsCache.push(inputr);
        }

        inputs = inputsCache;

        return inputs;
    }


    GetContent(element, childsCode, code) {
        let result = [];


        let endTagIndex = element.startContentIndex;

        let curlyBracketCount=0;
        let roundBracketCount=0;
        let strChr = '"';
        let isInStr = false;

        for (let i = element.startContentIndex; i <= element.endContentIndex; i++) {
            if ((!isInStr) &&
                (code.data[i] == '"' || code.data[i] == "'" || code.data[i] == '`')) {
                strChr = code.data[i];
                isInStr = true;
            }
            else if (isInStr && code.data[i] == strChr) {
                isInStr = false;
            }

            if(!isInStr){
                if(code.data[i]=='{'){
                    curlyBracketCount++;
                }
                if(code.data[i]=='}'){
                    curlyBracketCount--;
                }
                if(code.data[i]=='('){
                    roundBracketCount++;
                }
                if(code.data[i]==')'){
                    roundBracketCount--;
                }
            }


            if (code.data[i] == '>' && !isInStr && (curlyBracketCount==0 && roundBracketCount==0)) {
                endTagIndex = i;
                break;
            }
        }

        let startContent = endTagIndex + 1;
        

        let currentContentPart = new Object();
        currentContentPart.code = '';

        for (let i = startContent; i < element.endContentIndex; i++) {
            let isInAnyElement = false;

            let getEndElement = function(element) {
                let end = element.endContentIndex;
                for (let t = element.endContentIndex; t < code.data.length; t++) {
                    if (code.data[t] == '>') {
                        end = t;
                        break;
                    }
                }
                return end;
            }

            for (let j = 0; j < element.childs.length; j++) {
                let celementEnd = getEndElement(element.childs[j]);
                if (i >= element.childs[j].startContentIndex && i <= celementEnd) {
                    isInAnyElement = true;
                    result.push(currentContentPart);

                    currentContentPart = new Object();
                    currentContentPart.code = element.childs[j].code;
                    currentContentPart.type = 'childCode';
                    result.push(currentContentPart);

                    currentContentPart = new Object();
                    currentContentPart.code = '';
                    i = celementEnd;
                    break;
                }
            }

            if (!isInAnyElement) {
                currentContentPart.code += code.data[i];
                currentContentPart.type = 'textContent';
            }
        }

        result.push(currentContentPart);

        if(this.name=='demo_component'){
            //console.log(code.data.substring(element.startContentIndex,element.endContentIndex));
        }

        return result;
    }
}

module.exports = Tag;
