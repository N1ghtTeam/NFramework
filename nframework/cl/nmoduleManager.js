class NModuleManager {
    constructor() {
        this.modules            = new Object();
        this.customTypeDatas    = new Object();
        this.textContents       = new Object();
        this.nlcElementRunned   = new Object();
    }

    async GetDatasFromServer() {
        const response            = await fetch(window.origin + '/textContents');
        const data                = await response.json();
        this.textContents         = data;
    }

    ImportModule(module) {
        let moduleName = module.name;
        this.modules[moduleName] = module;
        this.modules[moduleName].manager = this;
        this.modules[moduleName].AfterImported();
    }

    GetTextContent(id) {
        return this.textContents[id];
    }

    Setup() {


        let keys = Object.keys(this.modules);
        for (let key of keys)
            this.modules[key].Setup();
    }

    Start() {
        let keys = Object.keys(this.modules);
        for (let key of keys)
            this.modules[key].Start();
    }

    GetModule(name) {
        return this.modules[name];
    }

    Get(name) {
        if (name in this.modules)
            return this.modules[name];
        else if (name in this.customTypeDatas)
            return this.customTypeDatas[name];
        else return name;
    }
    
    Set(name,value) {
        if (name in this.modules){
            this.modules[name] = value;
        }
        else if (name in this.customTypeDatas){
            this.customTypeDatas[name] = value;
        }
        else return name;
    }

    AutoSetParentForModules() {
        let moduleNames = Object.keys(this.modules);
        for (let moduleName of moduleNames)
            this.AutoSetParent(moduleName);
    }

    AutoSetParent(name) {
        let nameParts = name.split('-');
        let newName = nameParts[nameParts.length - 1];

        if (nameParts.length == 1) return 0;

        let parentName = '';

        for (var i = 0; i < nameParts.length - 2; i++)
            parentName += nameParts[i] + '-';

        parentName += nameParts[nameParts.length - 2];

        let parentModule = this.modules[parentName];

        if (parentModule) {
            parentModule.AddProperty(newName);
            parentModule.Set(newName, this.modules[name]);
        }
    }

    AfterConnected() {
        let keys = Object.keys(this.modules);
        for (let key of keys)
            this.modules[key].AfterConnected();
    }

}


window.NFramework.NModuleManager = NModuleManager;

window.NFramework.nmoduleManager = new NModuleManager();

window.NFramework.nmoduleManager.NFramework = window.NFramework;
