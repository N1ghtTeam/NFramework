class NFramework {
    constructor() {
        this.customTags=new Object();
    }

    IOConnectToServer() {
        const socket = io();
        this.socket=socket;
    }
}

let app = new NFramework();

window.NFramework = app;
