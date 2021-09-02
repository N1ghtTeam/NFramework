var NModule = class{

    constructor(){

        this.properties=new Object();

        this.syncProperties=new Object();

        this.methods=new Object();

        this.serverMethods=new Object();

        this.clientMethods=new Object();

        this.baseModules=[];

        this.routers=[];

        this.isImported=false;
    }

    async GetSyncProperty(name){
        var response  = await fetch(window.origin+`/getSyncProp/${this.name}/${name}`)
        var data = await response.json();
        return data.value;
    }

    async SetSyncProperty(name,data){
        var dataJSON=JSON.stringify(data);
        var parsedData=encodeURIComponent(dataJSON);
        await fetch(window.origin+`/setSyncProp/${this.name}/${name}/${parsedData}`);
    }
    
    GetWithIsExist(name){
        var result=null;
        var isExist=false;
        if(name in this.properties){
            result=this.properties[name];
            isExist=true;
        }
        else
        if(name in this.methods){
            result=this.methods[name];
            isExist=true;
        }
        else
        if(name in this.serverMethods){
            result=this.serverMethods[name];
            isExist=true;
        }
        else
        if(name in this.clientMethods){
            result=this.clientMethods[name];
            isExist=true;
        }
        else
        if(name in this.syncProperties){
            result=this.GetSyncProperty(name);
            isExist=true;
        }
        else
        for(var i=0;i<this.baseModules.length;i++){
            var baseModule=this.GetModule(this.baseModules[i]);
            var fBM=baseModule.GetWithIsExist(name);
            if(fBM.isExist){
                result=fBM.data;
                isExist=true;
                break;
            }
        }
        return {'data':result,'isExist':isExist};
    }

    
    async AsyncGetWithIsExist(name){
        var result=null;
        var isExist=false;
        if(name in this.properties){
            result=this.properties[name];
            isExist=true;
        }
        else
        if(name in this.methods){
            result=this.methods[name];
            isExist=true;
        }
        else
        if(name in this.serverMethods){
            result=this.serverMethods[name];
            isExist=true;
        }
        else
        if(name in this.clientMethods){
            result=this.clientMethods[name];
            isExist=true;
        }
        else
        if(name in this.syncProperties){
            result=await this.GetSyncProperty(name);
            isExist=true;
        }
        else
        for(var i=0;i<this.baseModules.length;i++){
            var baseModule=this.GetModule(this.baseModules[i]);
            var fBM=await baseModule.AsyncGetWithIsExist(name);
            if(fBM.isExist){
                result=fBM.data;
                isExist=true;
                break;
            }
        }
        return {'data':result,'isExist':isExist};
    }


    async AsyncGet(name){
        var result=null;
        var r=false;
        if(name in this.properties){
            result=this.properties[name];
            r=true;
        }
        else
        if(name in this.methods){
            result=this.methods[name];
            r=true;
        }
        else
        if(name in this.serverMethods){
            result=this.serverMethods[name];
            r=true;
        }
        else
        if(name in this.clientMethods){
            result=this.clientMethods[name];
            r=true;
        }
        else
        if(name in this.syncProperties){
            result=await this.GetSyncProperty(name);
            r=true;
        }
        else{
            for(var i=0;i<this.baseModules.length;i++){
                var baseModule=this.GetModule(this.baseModules[i]);
                var fBM=await baseModule.GetWithIsExist(name);
                if(fBM.isExist){
                    result=fBM.data;
                    r=true;
                    break;
                }
            }
        }
        if(!r)
            throw new Error(`Module ${this.name}: Not Found ${name} `);
        return result;
    }


    Get(name){
        var result=null;
        var r=false;
        if(name in this.properties){
            result=this.properties[name];
            r=true;
        }
        else
        if(name in this.methods){
            result=this.methods[name];
            r=true;
        }
        else
        if(name in this.serverMethods){
            result=this.serverMethods[name];
            r=true;
        }
        else
        if(name in this.clientMethods){
            result=this.clientMethods[name];
            r=true;
        }
        else
        if(name in this.syncProperties){
            result=this.GetSyncProperty(name);
            r=true;
        }
        else{
            for(var i=0;i<this.baseModules.length;i++){
                var baseModule=this.GetModule(this.baseModules[i]);
                var fBM=baseModule.GetWithIsExist(name);
                if(fBM.isExist){
                    result=fBM.data;
                    r=true;
                    break;
                }
            }
        }
        if(!r)
            throw new Error(`Module ${this.name}: Not Found ${name} `);
        return result;
    }
    
    async AsyncSet(name,data){
        var r=false;
        if(name in this.properties){
            this.properties[name]=data;
            r=true;
        }
        else
        if(name in this.methods){
            this.methods[name]=data;
            r=true;
        }
        else
        if(name in this.serverMethods){
            this.serverMethods[name]=data;
            r=true;
        }
        else
        if(name in this.clientMethods){
            this.clientMethods[name]=data;
            r=true;
        }
        else
        if(name in this.syncProperties){
            await this.SetSyncProperty(name,data);;
            r=true;
        }
        else{
            for(var i=0;i<this.baseModules.length;i++){
                var baseModule=this.GetModule(this.baseModules[i]);
                var fBM=await baseModule.GetWithIsExist(name);
                if(fBM.isExist){
                    baseModule.Set(name,data);
                    r=true;
                    break;
                }
            }
        }
        if(!r)
            throw new Error(`Module ${this.name}: Not Found ${name} `);
    }

    Set(name,data){
        var r=false;
        if(name in this.properties){
            this.properties[name]=data;
            r=true;
        }
        else
        if(name in this.methods){
            this.methods[name]=data;
            r=true;
        }
        else
        if(name in this.serverMethods){
            this.serverMethods[name]=data;
            r=true;
        }
        else
        if(name in this.clientMethods){
            this.clientMethods[name]=data;
            r=true;
        }
        else
        if(name in this.syncProperties){
            this.SetSyncProperty(name,data);;
            r=true;
        }
        else{
            for(var i=0;i<this.baseModules.length;i++){
                var baseModule=this.GetModule(this.baseModules[i]);
                var fBM=baseModule.GetWithIsExist(name);
                if(fBM.isExist){
                    baseModule.Set(name,data);
                    r=true;
                    break;
                }
            }
        }
        if(!r)
            throw new Error(`Module ${this.name}: Not Found ${name} `);
    }

    Constructor(customizeFunc){
        customizeFunc.call(this);
    }

    AddProperty(name){
        this.properties[name]=null;
    }
    
    AddSyncProperty(name){
        this.syncProperties[name]=null;
    }

    AddMethod(name,method){
        this.methods[name]=method;
    }

    AddServerMethod(name,method){
        this.serverMethods[name]=method;
    }

    AddClientMethod(name,method){
        this.clientMethods[name]=method;
    }

    Setup(){
        if(this.methods.setup!=null){
            this.methods.setup.call(this);
        }
    }

    Start(){
        if(this.methods.start!=null){
            this.methods.start.call(this);
        }
    }
    
    GetModule(name){
        return this.manager.GetModule(name);
    }

    GetThisWithCallback(callback){
        return callback(this);
    }

    async AsyncGetThisWithCallback(callback){
        var callbackResult=await callback(this);
        return callbackResult;
    }

    SetupServerMethod(name){
        this.methods[name]=(...args)=>{

            var path=`nframework/execute-server-method/${this.name}/${name}`;

            this.manager.NFramework.socket.emit(path,args,()=>{
                
            });
        }     

        this.methods[name].WithCallback=(...args)=>{

            var path=`nframework/execute-server-method/${this.name}/${name}`;

            this.manager.NFramework.socket.emit(path,args,()=>{
                args[args.length-1]();
            });
        }      


    }
    
    SetupClientMethod(name){
        var moduleName=this.name;

        var socket=this.manager.NFramework.socket;

        var path=`nframework/execute-client-method/${moduleName}/${name}`;

        var module=this;

        socket.on(path,(data)=>{
            module.Get(name)(...data);
        });

        
    }

    SetupClientMethods(){
        var keys=Object.keys(this.clientMethods);

        for(var key of keys){
            this.SetupClientMethod(key);
        }

    }

    SetupServerMethods(){
        var keys=Object.keys(this.serverMethods);

        for(var key of keys){
            this.SetupServerMethod(key);
        }

    }

    AfterImported(){
        this.isImported=true;
        
        this.SetupServerMethods();
    }

    AfterConnected(){
        this.SetupClientMethods();
    }
}

window.NFramework.NModule=NModule;