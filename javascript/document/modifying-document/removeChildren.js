function removeChildren(elem) {
    var list = elem.querySelectorAll(":scope > *");
    for(var i = 0; i < list.length; i++){
        elem.removeChild(list[i]);
    }
}