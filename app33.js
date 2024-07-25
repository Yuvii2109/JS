// JS Code linked

let links = document.querySelectorAll(".box a");
for(let i = 0; i < links.length; i++){
    links[i].style.color = "orange";
    links[i].style.textDecoration = "underline";
}

// Another Method
for(link of links){
    link.style.color = "orange";
    link.style.textDecoration = "underline";
}