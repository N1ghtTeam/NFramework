const NFramework  = require('./nframework/framework');
const app         = NFramework();

app.appDir = __dirname;

app.LoadSetting(__dirname + '/setting.json');
app.Init();
app.Build();
app.Run();
