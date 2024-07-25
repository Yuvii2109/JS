// JS code linked

console.log("Enter 5 elements to create an array...");
let a = prompt("Element 1 - ");
let b = prompt("Element 2 - ");
let c = prompt("Element 3 - ");
let d = prompt("Element 4 - ");
let e = prompt("Element 5 - ");
let arr = [a,b,c,d,e];
let ele = prompt("Enter the element - ");
console.log(arr);
if(arr.indexOf(ele) == -1){
    console.log("Entered element is - "+ ele);
    console.log("Element not found in the array");
}
else{
    console.log("Entered element is - "+ ele);
    console.log("Element found in the array");
}