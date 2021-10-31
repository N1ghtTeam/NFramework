class IORouterManager {
    constructor() {
        this.routers = [];
    }

    AddRouter(e) {
        this.routers.push(e);
    }

    IORouting(clientSocket, router) {
        clientSocket.on(router.path, (data, clientCallback) => {
            let rdata = router.callback(clientSocket, data);
            if (clientCallback) clientCallback(rdata);
        });
    }

    Emit(clientSocket, path, data) {
        clientSocket.emit(path, data);
    }

    SetupFor(clientSocket) {
        for (let router of this.routers) {
            this.IORouting(clientSocket, router);
        }
    }

}

module.exports = IORouterManager;
