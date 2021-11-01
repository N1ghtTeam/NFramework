class Element {
    constructor() {
        this.childs = [];
    }

    AppendChild(child){
        this.childs.push(child);
        child.parent = this;
    }
}

module.exports = Element;
