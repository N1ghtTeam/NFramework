const nodejsPath = require('path');

const isChildOf = (child, parent) => {
    if (child === parent) return false
    const parentTokens = parent.split('\\').filter(i => i.length)
    return parentTokens.every((t, i) => child.split('\\')[i] === t)
  }


class Scope{
    constructor(path){
        this.pages                      = new Object();
        this.modules                    = new Object();
        this.globalObjectSourceCodes    = new Object();
        this.accessRange                = new Object();

        this.path                       = nodejsPath.normalize(path);
    }

    IsExist(name){
        if(name in this.pages){
            return true;
        }
        else if(name in this.modules){
            return true;
        }
        else if(name in this.globalObjectSourceCodes){
            return true;
        }
        else return false;
    }
    Get(name){
        if (name in this.modules)
            return this.modules[name];
        else if (name in this.pages)
            return this.pages[name];
        else if (name in this.customTypeDatas)
            return this.customTypeDatas[name];
        else return name;
    }

    IsInAccessRange(name,newScopePath){

        let result = isChildOf(newScopePath,this.path);

        let obj = this.Get(name);

        result = (this.accessRange[name] == 0) || (this.accessRange[name] == 1 && result);

        return result;
    }
}

module.exports = Scope;