function nlc(code){
    var manager=window.NFramework.nmoduleManager;
    manager.Get('NLC').Get('Execute')(code);
}

async function q_nlc(code){
    var manager=window.NFramework.nmoduleManager;
    await (manager.Get('NLC').Get('Execute')(`
        <region>
        (()=>{
            return (${code});
        })()
        </region>
    `));
}