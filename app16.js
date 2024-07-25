// JS code linked

let greet = "Hello"; // Global scope
function greetChange(){
    let greet = "Namaste"; // Function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet); // Lexical Scope
    }
    innerGreet();
}
console.log(greet);
greetChange();

// Here innerGreet() will not be executed because
// it is defined inside greetChange() function and
// we are not calling it anywhere. If we want to
// execute innerGreet() then we need to call it
// inside greetChange() function.