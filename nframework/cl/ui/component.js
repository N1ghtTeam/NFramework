class UIComponent extends HTMLElement{
    
    constructor(){
        super()
    }

    AppendChilds(childs){
        for(let child of childs){
            try{
                this.appendChild(child);
            }
            catch{
                this.innerHTML+=child;
            }
        }
    }

      

}

window.NFramework.UIComponent=UIComponent;