function createList(ul) {
    while(true){
        var insert = prompt("Введите текст");
        if(insert === ""){
            break;
        }
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(insert));
        ul.appendChild(li);

    }
}