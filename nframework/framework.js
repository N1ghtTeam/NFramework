const fs                  = require('fs');
const NCompiler           = require('./ncompiler/ncompiler');
const NModuleManager      = require('./nmoduleManager/nmoduleManager');
const ClientManager       = require('./clientManager/clientManager');
const NModule             = require('./nmodule/nmodule');
const IORouterManager     = require('./ioroutermanager/ioRouterManager');

class NFramework {
    constructor() {
        this.framework_nmodules_src_dir = __dirname + '/nmodules';

        //event listeners
        this.eventListeners=new Object();

        //on server started event listeners
        this.eventListeners['server_listening']=[];


        // N compiler
        this.ncompiler = new NCompiler();
        this.ncompiler.NFramework = this;

        // N module manager
        this.nmoduleManager = new NModuleManager();
        this.nmoduleManager.NFramework = this;

        // Client manager
        this.clientManager = new ClientManager();
        this.clientManager.NFramework = this;

        // IO router manager
        this.ioRouterManager = new IORouterManager();
        this.ioRouterManager.NFramework = this;

        // Debug
        this.debug = new Object();
        this.debug.show_nlc_compiled_js = false;

        // Server
        this.server = new Object();
        this.server.PORT = 7070;

        this.clejs = this.GetCLEJS();
    }

    Init() {
        this.StartServer();
        this.SetupCLEJSRouters();
        this.nmoduleManager.SetupGetterAndSetterForSyncProps();
    }

    Build() {
        this.nmoduleManager.BuildModulePathsArray();
        this.nmoduleManager.CompileOrImportModules();
        this.nmoduleManager.ImportModules();
    }

    Run() {
        this.nmoduleManager.Routing();
        this.nmoduleManager.Setup();
        this.nmoduleManager.Start();
    }

    GetCLEJS() {
        return `
            <script src="/socket.io/socket.io.js"></script>
            <script src='/nframework'></script>
            <script src='/nmodule-manager'></script>
            <script src='/nmodule'></script>
            <script src='/ui/component'></script>
        `;
    }

    SetupCLEJSRouters() {
        //framework js

        const frameworkCLJSFilePath     = __dirname + '/cl/framework.js';
        const nmoduleCLJSFilePath       = __dirname + '/cl/nmodule.js';
        const nmoduleMCLJSFilePath      = __dirname + '/cl/nmoduleManager.js';
        const appCLJSFilePath           = __dirname + '/cl/app.js';
        const UIComponentFilePath           = __dirname + '/cl/ui/component.js';

        let frameworkCLJSCode           = fs.readFileSync(frameworkCLJSFilePath).toString();
        let nmoduleCLJSCode             = fs.readFileSync(nmoduleCLJSFilePath).toString();
        let nmoduleMCLJSCode            = fs.readFileSync(nmoduleMCLJSFilePath).toString();
        let appCLJSCode                 = fs.readFileSync(appCLJSFilePath).toString();
        let UIComponentCode                 = fs.readFileSync(UIComponentFilePath).toString();

        this.express_server.get('/nframework', (req, res)       => res.send(frameworkCLJSCode));
        this.express_server.get('/nmodule', (req, res)          => res.send(nmoduleCLJSCode));
        this.express_server.get('/nmodule-manager', (req, res)  => res.send(nmoduleMCLJSCode));
        this.express_server.get('/appcl', (req, res)            => res.send(appCLJSCode));
        this.express_server.get('/ui/component', (req, res)            => res.send(UIComponentCode));
    }

    LoadSetting(path) {
        let str         = fs.readFileSync(path).toString();
        let settingObj  = JSON.parse(str);
        let keys        = Object.keys(settingObj);

        for(let key of keys)
            this[key] = settingObj[key];

        if(this.nmodules_src_dir[0] == '.')
            this.nmodules_src_dir = this.appDir + this.nmodules_src_dir.substring(1, this.nmodules_src_dir.length);
    }

    CompileModule(path) {
        return this.ncompiler.CompileFile(path);
    }

    StartServer(){
        const express           = require('express');
        const express_server    = express();
        const socket_io         = require('socket.io');

        express_server.set('view engine','ejs');
        express_server.use(express.static("public"));

        this.express_server = express_server;

        let server          = express_server.listen(this.server.PORT);
        let socket          = socket_io(server);
        let framework       = this;

        this.httpServer     = server;
        this.socket         = socket;

        socket.on('connection', (csocket) => {
            framework.clientManager.PushClient(csocket);
            framework.ioRouterManager.SetupFor(csocket);
            csocket.on('disconnect', () => framework.clientManager.RemoveClient(csocket));
        });

        for(let server_listening_listener of this.eventListeners['server_listening']){
            console.log('server_listening');
        }
    }

    Listen(eventName,callback){
        this.eventListeners[eventName].push(callback);
        console.log(this.eventListeners);
    }
}


module.exports = () => {
    return new NFramework();
}
