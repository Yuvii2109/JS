// JS code linked

//To check if all the numbers in an array are multiple of 10
let arr = [];
let n = prompt("Enter the number of elements you want in the array - ");
for (let i = 0; i < n; i++) {
    arr.push(parseFloat(prompt("Enter element " + (i + 1) + " - ")));
}
console.log(arr);
let multipleCheck = arr.every((el) => (el%10 == 0));
console.log(multipleCheck);
if(multipleCheck == true){
    console.log("All elements in the array are multiple of 10");
} else {
    console.log("Not all elements in the array are multiple of 10");
}

//To find the minimum number in the array 
let minCheck = arr.reduce((min,el) => {
    if(min < el){
        return min;
    } else {
        return el;
    }
});
console.log("Minimum number in the array is - " + minCheck);