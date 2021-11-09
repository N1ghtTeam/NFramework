const fs                  = require('fs');
const NCompiler           = require('./ncompiler/ncompiler');
const NModuleManager      = require('./nmoduleManager/nmoduleManager');
const ClientManager       = require('./clientManager/clientManager');
const NModule             = require('./nmodule/nmodule');
const IORouterManager     = require('./ioroutermanager/ioRouterManager');
const Uglify            = require('uglify-js');

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

        this.MakeCLEJS();
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

    MakeCLEJS(){
        this.clejs=`<script src="/socket.io/socket.io.js"></script>\n`;

        let clfiles=JSON.parse(fs.readFileSync(__dirname+'/cl/clfiles.json').toString());

        for(let clfile of clfiles){
            this.clejs+=`<script src='${clfile.router}'></script>\n`;
        }
    }

    SetupCLEJSRouters() {
        //framework js

        
        const appCLJSFilePath           = __dirname + '/cl/app.js';
        
        let appCLJSCode                 = fs.readFileSync(appCLJSFilePath).toString();

        if(this.use_uglify_js){
            appCLJSCode = Uglify.minify(appCLJSCode).code;
        }

        this.express_server.get('/appcl', (req, res)            => res.send(appCLJSCode));
        
        

        let clfiles=JSON.parse(fs.readFileSync(__dirname+'/cl/clfiles.json').toString());

        for(let clfile of clfiles){
            const filePath               = __dirname + '/cl/'+clfile.path;
    
            let fileCode           = fs.readFileSync(filePath).toString();
    
            if(this.use_uglify_js){
                fileCode = Uglify.minify(fileCode).code;
            }

            this.express_server.get(clfile.router, (req, res)       => res.send(fileCode));
        }
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
