const JSCLPath = "D:\\MyTechs\\nframework/nlc/demo-ui.nlc.client.js";

module.exports = (manager) => {
    let exports     = new Object();
    let nmodules    = [];
    let pages       = [];
    exports.customTypeDatas=[];
    exports.customTypeDatas.Add=function(key,value){
        exports.customTypeDatas.push({
            'key':key,
            'value':value
        });
    }

    

    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}