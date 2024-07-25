// JS code linked

let para1 = document.createElement("p");
para1.innerText = "Hey! I am red";
document.querySelector("body").append(para1);

para1.classList.add("red");

let heading1 = document.createElement("h3");
heading1.innerText = "I am a blue h3";
document.querySelector("body").append(heading1);

heading1.classList.add("blue");

let div = document.createElement("div");
let heading2 = document.createElement("h1");
heading2.innerText = "I am in a div";
let para2 = document.createElement("p");
para2.innerText = "I am also in a div";
document.querySelector("body").append(div);
document.querySelector("div").appendChild(heading2);
document.querySelector("div").appendChild(para2);

div.classList.add("specification");

// Another method - 
// let div = document.createElement("div");
// let heading2 = document.createElement("h1");
// heading2.innerText = "I am in a div";
// let para2 = document.createElement("p");
// para2.innerText = "I am also in a div";
// div.append(heading2, para2);
// document.querySelector("body").append(div);