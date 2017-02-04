var links = document.querySelectorAll("ul li a");
for(var i = 0; i < links.length; i++){
    if(links[i].getAttribute("href").indexOf("://") !== -1 && links[i].getAttribute("href").indexOf("http://internal.com") === -1){
        links[i].classList.add("external");
    }
}