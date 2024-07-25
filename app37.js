// JS code linked

let input = document.querySelector("input");
let add = document.querySelector("#add");
let clear = document.querySelector("#clear");
let li = document.querySelector("li");
let ul = document.querySelector("ul");
input.addEventListener("change", liAdd());
function liAdd(){
    add.addEventListener("click", function(){
        let li = document.createElement("li");
        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.classList.add("check")
        li.innerText = input.value;
        ul.appendChild(li);
        li.appendChild(check);
        input.value = "";
    });
};
clear.addEventListener("click", function(){
    ul.innerHTML = "";
});
ul.addEventListener("click", function(event){
    if(event.target.type === "checkbox"){
        event.target.parentNode.style.color = "red";
    }
});

// Explaination of the code above 
// We have created a function called liAdd() which is called when the input changes
// We have added an event listener to the add button which calls the liAdd()
// We have created a new li element and added it to the ul element
// We have added a new input element and added it to the li element
// We have added a class to the input element called check
// We have added an event listener to the ul element which calls the function when clicked
// We have added a condition to the event listener which checks if the target is a checkbox
// We have added a style to the li element which changes the color of the text to red when
// We have added a condition to check if the target type is checkbox