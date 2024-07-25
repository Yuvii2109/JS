// JS code linked

// What are arguments ??
// In JavaScript, arguments are the values passed to a function when it is invoked.
// They are stored in an array-like object called the arguments object.
// The arguments object is accessible within the function and contains the values of the arguments passed to the function
// Example :
// function myFunction(a, b, c) {
//     console.log(arguments); // Output: [a, b, c]
//     console.log(arguments[0]); // Output: a
//     console.log(arguments.length); // Output: 3
// }
// Arguments are not arrays...
// They are array-like objects, which means they have a length property and can be accessed using bracket
// notation (e.g., arguments[0]), but they do not have array methods like push(),
// pop(), or slice().

function sum(...args){
    return args.reduce(
        (sum,el) => sum + el);
}
console.log(sum(1,2,3,4,5));

function min(msg,...args){
    console.log(msg);
    return Math.min(...args);
}
console.log(min("Minimum number is - ",1,2,-3,4,-5));
// Here rest was used because
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// It is denoted by three dots (...) followed by the name of the parameter.
// If arguments are not converted to arrays with the help of rest
// then we can't use array methods like reduce() on them.