class UIManager{
    constructor(){
        this.uiComponentClasses = new Object();
        this.uiComponentClassCreators = [];
    }

    Setup(){
        
        let manager=this;
        

        //Sort UI Component Class Creators
        let defaultBaseClass                = 'UIComponent';

        let sortedUIComponentClassCreators  = [];

        let srcUIComponentClassCreators     = this.uiComponentClassCreators;
        let newSrcUIComponentClassCreators  = [];

        let levels=new Object();

        levels[defaultBaseClass]=0;

        let creatorsPerLevels=[];

        while(srcUIComponentClassCreators.length!=0)
        {
            newSrcUIComponentClassCreators=[];
            for(let i=0;i<srcUIComponentClassCreators.length;i++){
    
                let creator = srcUIComponentClassCreators[i];
    
                if(levels[creator.extends]!=null){

                    creator.level=levels[creator.extends]+1;

                    if(creatorsPerLevels[creator.level]==null){
                        creatorsPerLevels[creator.level]=[];
                    }

                    creatorsPerLevels[creator.level].push(creator);

                    levels[creator.name]=creator.level;
                }
                else{
                    newSrcUIComponentClassCreators.push(creator);
                }
    
            }
            srcUIComponentClassCreators=newSrcUIComponentClassCreators;
            newSrcUIComponentClassCreators=[];
        }

        let creatorIndex=0;

        for(let i=1;i<creatorsPerLevels.length;i++){
            for(let j=0;j<creatorsPerLevels[i].length;j++){
                sortedUIComponentClassCreators[creatorIndex]=creatorsPerLevels[i][j];
                creatorIndex++;
            }
        }

        this.uiComponentClassCreators=sortedUIComponentClassCreators;
        

        //Create UI Component Classes
        this.uiComponentClasses[defaultBaseClass]=window.NFramework.UIComponent;

        for(let creator of this.uiComponentClassCreators){

            this.uiComponentClasses[creator.name] = creator.classCreator();

        }

        //Define Custom Elements
        let uiComponentNames=Object.keys(this.uiComponentClasses);

        for(let uiComponentName of uiComponentNames){
            
            if(uiComponentName!=defaultBaseClass)
                customElements.define(uiComponentName, this.uiComponentClasses[uiComponentName]);

        }

        
        //Create Main UI Component
        (()=>{

            let nframeworkAppUI = document.createElement(manager.mainUIComponentName);

            nframeworkAppUI.setAttribute('NUI_id',manager.mainComponentNUI_id);

            document.body.appendChild(nframeworkAppUI);

            if(nframeworkAppUI.render!=null){

                const AsyncFunction = (async () => {}).constructor;

                let isAsyncRender = nframeworkAppUI.render instanceof AsyncFunction;

                if(!isAsyncRender){
                    let childs = nframeworkAppUI.render();
                    if(childs!=null){
                        nframeworkAppUI.AppendChilds(childs);
                    }
                }
                else{
                    (async ()=>{
                        
                        let childs = await nframeworkAppUI.render();
                        if(childs!=null){
                            nframeworkAppUI.AppendChilds(childs);
                        }

                    })();
                }
            }

        })();
    }

}

window.NFramework.UIManager=UIManager;
window.NFramework.uiManager=new UIManager();