// JS code linked

let num1 = prompt("Enter the number 1 - ");
let num2 = prompt("Enter the number 2 - ");
let len1 = num1.length;
let len2 = num2.length;
if(num1[num1.length-2] === num2[num2.length-2] && num1[num1.length-1] === num2[num2.length-1]){
    console.log("Numbers have the same last 2 digits...");
}
else{
    console.log("Or vote do Modi ko...");
}