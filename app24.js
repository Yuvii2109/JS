// JS code linked

// Arrow function to return the square of a number n 
const getSquare = () => {
    let n = parseFloat(prompt("Enter a number: "));
    console.log(`Square of ${n} = ${n*n}`);
}
getSquare();

// Function to print Hello World 5 times at an interval of 2s
function printHello(){
    let id = setInterval(() => {
        console.log("Hello World");
    }, 2000);
    setTimeout(() => {
        clearInterval(id);
    }, 10000);
}
printHello();

// There's another method of solving the above 
// question don't know if better or not but alg hai

function method2(){
    for(let i=0; i<5; i++){
        setTimeout(() => {
            console.log("Hello World");
        }, i*2000);
    }
}
method2();