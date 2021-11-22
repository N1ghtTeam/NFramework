const fs                = require('fs');
const global_nmodule    = require('./global_nmodule/global_nmodule');

class NModuleManager {
    constructor() {
        this.customTypeDatas            = new Object();
        this.customTypeDataInfos        = new Object();
        this.jsCode                     = new Object();
        this.pages                      = new Object();
        this.modules                    = new Object();
        this.textContents               = new Object();
        this.globalObjectSourceCodes    = new Object();
        this.uiComponents               = [];
        this.packages                    = new Object();

        this.modulePaths                = [];
        this.svMJSPaths                 = [];
        this.clMJSPaths                 = [];
        this.nlcPaths                   = [];
        this.watches                    = [];
    }

    Routing() {
        let manager = this;
        let express_server = this.NFramework.express_server;

        express_server.get('/textContents', (req, res) => res.send(manager.textContents));
    }

    SetupGetterAndSetterForSyncProps() {
        let express_server  = this.NFramework.express_server;
        let manager         = this;
        express_server.get('/getSyncProp/:module/:name', (req, res) => {
            let moduleName      = req.params.module;
            let syncPropName    = req.params.name;

            let property = manager.GetModule(moduleName).Get(syncPropName);

            let data = {
                value: property
            };

            let jsonText = JSON.stringify(data);

            res.send(jsonText);
        });

        express_server.get('/setSyncProp/:module/:name/:data', (req, res) => {
            let moduleName      = req.params.module;
            let syncPropName    = req.params.name;
            let data            = JSON.parse(req.params.data);

            manager.GetModule(moduleName).Set(syncPropName, data);

            res.send('{}');
        })
    }

    BuildModulePathsArray() {
        const src_path              = this.NFramework.nmodules_src_dir;
        const framework_src_path    = this.NFramework.framework_nmodules_src_dir;

        let nmm = this;

        let recompile_when_startup = this.NFramework.recompile_when_startup;
        
        let compiler = this.NFramework.ncompiler;

        const buildmpa = function(file) {


            let parts = file.split('.');
            if (parts[parts.length - 1] == 'nlc') nmm.modulePaths.push(file);
            else if (parts[parts.length - 1] == 'showjs') fs.unlinkSync(file);
            else if (
                recompile_when_startup &&
                (parts[parts.length - 3] == 'nlc') &&
                parts[parts.length - 1] == 'js' &&
                (parts[parts.length - 2] == 'server' || parts[parts.length - 2] == 'client')
            ) {

                let nlcPath='';

                for(let i=0;i<parts.length-2;i++){
                    nlcPath+=parts[i];
                    if(i<parts.length-3){
                        nlcPath+='.';
                    }
                }
            
                let nlcMsgs = compiler.ReadNLCMsgs(nlcPath);

                let isNeedCompile=!nlcMsgs.includes('NOCOMPILE');

                if(isNeedCompile)
                    fs.unlinkSync(file);
            }
        };

        const isDir = function(path) {
            let isD = false;
            let stats = fs.statSync(path);
            isD = stats.isDirectory();

            return isD;
        }

        const DoWithAllFile = function(dirPath) {
            fs.readdirSync(dirPath).forEach(file => {

                const filePath = dirPath + '/' + file;

                if (isDir(filePath)) DoWithAllFile(filePath);
                else buildmpa(filePath);
            });
        }

        DoWithAllFile(framework_src_path);
        DoWithAllFile(src_path);

    }

    GetJSCode(name) {
        return this.jsCode[name];
    }


    CompileOrImportModules() {
        for (let filePath of this.watches)
            fs.unwatchFile(filePath);

        this.watches = [];

        let compiler = this.NFramework.ncompiler;

        compiler.SetupCompile();

        for (let modulePath of this.modulePaths) {

            let nlcMsgs = compiler.ReadNLCMsgs(modulePath);

            let isNeedCompile=!nlcMsgs.includes('NOCOMPILE');

            let cr = (this.NFramework.recompile_when_startup && isNeedCompile) ?
                      compiler.CompileFile(modulePath) :
                      compiler.CreateModuleFromCode(null, null, modulePath);

            if (this.NFramework.debug.show_nlc_compiled_js) {
                let showerCompiledFileSV = '';
                showerCompiledFileSV += cr.dirNLCPath;
                showerCompiledFileSV += '/';
                showerCompiledFileSV += cr.fileNLCName;
                showerCompiledFileSV += '.server.showjs';

                fs.writeFileSync(showerCompiledFileSV, cr.codeSV);

                let showerCompiledFileC = '';
                showerCompiledFileC += cr.dirNLCPath;
                showerCompiledFileC += '/';
                showerCompiledFileC += cr.fileNLCName;
                showerCompiledFileC += '.client.showjs';

                fs.writeFileSync(showerCompiledFileC, cr.codeCL);
            }

            this.svMJSPaths.push(cr.fileJSSVPath);
            this.clMJSPaths.push(cr.fileJSCPath);
            this.nlcPaths.push(cr.fileNLCPath);

            let nlcfilePath = cr.fileNLCPath;

            if (this.NFramework.debug.client_nlc) {
                let manager = this;
                this.watches.push(nlcfilePath);
                fs.watchFile(nlcfilePath, (curr, prev) => {
                    manager.CompileModules();
                    manager.ReRoutingModulesForClient();
                });
            }
        }

        compiler.EndCompile();
    }

    ReRoutingModulesForClient() {
        let keys = Object.keys(this.modules);
        for (let key of keys) {
            let clMJSPath = this.modules[key].clMJSPath;
            this.modules[key].client_js_code = fs.readFileSync(clMJSPath);
        }
    }

    AutoSetParent(name) {
        let nameParts = name.split('-');
        let newName = nameParts[nameParts.length - 1];

        if (nameParts.length == 1) return 0;
        else {
            let parentName = '';
            for (let i = 0; i < nameParts.length - 2; i++)
                parentName += nameParts[i] + '-';

            parentName += nameParts[nameParts.length - 2];

            let parentModule = this.modules[parentName];

            if (parentModule) {
                parentModule.AddProperty(newName);
                parentModule.Set(newName, this.modules[name]);
            }
        }
    }

    ImportModules() {
        let useALlGlobalObjs_pages = [];
        for (let modulePath of this.svMJSPaths) {
            let eps = require(modulePath)(this);

            let ctdindex = 0;
            for (let ctData of eps.customTypeDatas) {
                this.customTypeDatas[ctData.key] = ctData.value;
                this.customTypeDataInfos[ctData.key] = new Object();
                this.customTypeDataInfos[ctData.key].isSetupCLRouter = false;
                this.customTypeDataInfos[ctData.key].path = this.clMJSPaths[ctdindex];
                ctdindex++;
            }

            eps.manager = this;
            let modules = eps.nmodules;
            for (let [i, module] of modules.entries()) {
                let moduleName = module.name;
                this.modules[moduleName] = module;
                this.modules[moduleName].manager = this;
                this.modules[moduleName].clMJSPath = this.clMJSPaths[i];
                this.modules[moduleName].AfterImported();
            }

            let pages = eps.pages;
            for (let page of pages) {
                this.pages[page.name] = page;
                if (page.useAllGlobalObjects)
                    useALlGlobalObjs_pages.push(page.name);
            }

            let packages = eps.packages;
            for (let p of packages) {
                this.packages[p.name] = p;
            }

            
        }

        let moduleNames = Object.keys(this.modules);
        for (let moduleName of moduleNames)
            this.AutoSetParent(moduleName);

        for (let pageName of useALlGlobalObjs_pages) {
            this.pages[pageName].customTypeDatas = Object.keys(this.customTypeDatas);
            this.pages[pageName].SetupGlobalObjectsRouter();
        }
    }

    Setup() {
        let keys = Object.keys(this.modules);
        for (let key of keys) this.modules[key].Setup();
    }

    Start() {
        let keys = Object.keys(this.modules);
        for (let key of keys) this.modules[key].Start();
    }

    GetModule(name) {
        return this.modules[name];
    }

    GetPage(name) {
        return this.pages[name];
    }

    Get(name) {
        if (name in this.modules)
            return this.modules[name];
        else if (name in this.pages)
            return this.pages[name];
        else if (name in this.customTypeDatas)
            return this.customTypeDatas[name];
        if (name in this.packages)
            return this.packages[name];            
        else return name;
    }
    
    Set(name,value) {
        if (name in this.modules){
            this.modules[name] = value;
        }
        else if (name in this.pages){
            this.pages[name] = value;
        }
        else if (name in this.customTypeDatas){
            this.customTypeDatas[name] = value;
        }
        else return name;
    }
}

module.exports = NModuleManager;
