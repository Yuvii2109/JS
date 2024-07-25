// JS code linked

let todo = [];
let req = prompt("Enter your request");
while(true){
    if(req == "Quit" || req == "quit"){
        console.log("Quitting the system");
        break;
    }
    else if(req == "List" || req == "list"){
        console.log("_______________________");
        let i = 1;
        for(task of todo){
            console.log(i, task);
            i++;
        }
        console.log("_______________________");
        req = prompt("Enter your request");
    }
    else if(req == "Add" || req == "add"){
        let num = prompt("Enter the number of tasks you want to add - ");
        for(let i = 0; i < num; i++){
            console.log("_______________________");
            let task = prompt("Enter your task");
            todo.push(task);
            console.log("Task added");
            console.log("_______________________");
        }
        req = prompt("Enter your request");
    }
    else if(req == "Delete" || req == "delete"){
        console.log("_______________________");
        let task = prompt("Enter the task to delete");
        let index = todo.indexOf(task);
        if(index != -1){
            todo.splice(index,1);
        }
        console.log("Task removed");
        console.log("_______________________");
        req = prompt("Enter your request");
    }
    else{
        console.log("Invalid request");
        break;
    }
}