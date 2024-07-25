// JS code linked

let arr = [];
let i = 0;
let largest = 0;
let n = prompt("Enter the total numbers you want in the array - ");
for(i; i < n; i++){
    arr.push(prompt("Enter the number - "));
}
console.log(arr);
for(let a = 0; a < arr.length; a++){
    if(largest < arr[a]){
        largest = arr[a];
    }
}
console.log("The largest number in the array is - " + largest);