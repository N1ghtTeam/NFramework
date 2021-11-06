let framework = window.NFramework;
let nmoduleManager = framework.nmoduleManager;
let uiManager = framework.uiManager;

framework.IOConnectToServer(() => {
    // Code
});

(async () => {

    await nmoduleManager.GetDatasFromServer();

    nmoduleManager.AutoSetParentForModules();

    nmoduleManager.AfterConnected();

    uiManager.Setup();

    nmoduleManager.Setup();

    nmoduleManager.Start();

})()
