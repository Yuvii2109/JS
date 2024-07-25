// JS code linked

// Question-1
let button  = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";
document.querySelector("body").append(button);
document.querySelector("body").append(input);

// Question-2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// Question-3
document.querySelector("#btn");
button.classList.add("btn");

// Question-4
let heading = document.createElement("h1");
heading.innerText = "DOM Practice";
heading.classList.add("head");
document.querySelector("body").append(heading);

// Question-5
let para = document.createElement("p");
para.innerHTML = "Yuvraj <b>Sachdeva's</b> practice questions";
document.querySelector("body").append(para);