if(!Element.prototype.remove){
    Element.prototype.remove = function remove(){
        this.getParent().removeChild(this);
        // this.parentNode.removeChild(this);
    }
}