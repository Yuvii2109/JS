// JS code linked

//Question-1
//Method-1
let arr = [];
let num = prompt("Enter the number of elements you want to input in the array - ");
for (let i = 0; i < num; i++) {
    arr.push(parseFloat(prompt("Enter element " + (i + 1) + " - ")));
}
console.log(arr);
let squareSumAvg = arr.reduce( (sum,el) => {
    sum += el*el;
    return sum;
});
squareSumAvg /= arr.length;
console.log("Square sum average is - " + squareSumAvg);

//Method-2
let sum = 0;
for (let i = 0; i < num; i++) {
    arr.push(parseFloat(prompt("Enter element " + (i + 1) + " - ")));
}
console.log(arr);
for (let j = 0; j < arr.length; j++){
    sum += arr[j]*arr[j];
}
let avg = sum/arr.length;
console.log(avg);

//Question-2
let arr = [];
let num = prompt("Enter the number of elements you want to input in the array - ");
for (let i = 0; i < num; i++) {
    arr.push(parseFloat(prompt("Enter element " + (i + 1) + " - ")));
}
let plusFive = arr.map(
    function (el) {
        return el+5;
    }
);
console.log("Array after adding 5 to each element - " + plusFive);

//Question-3
let arr = [];
let num = prompt("Enter the number of elements you want to input in the array - ");
for (let i = 0; i < num; i++) {
    arr.push(prompt("Enter element " + (i + 1) + " - "));
}
console.log(arr);
let upperCase = arr.map(
    function (el) {
        return el.toUpperCase();
    }
);
console.log("Array after converting each element to uppercase - " + upperCase);

//Question-4
function double(...args){
    return args.map(
        (el) => el*2
    );
}
console.log(double(1,2,3,4,5));

//Question-5
const obj1 = {
    name: "Yuvraj Sachdeva",
    age: 20,
    branch: "CSE-AI"
};
const obj2 = {
    college: "MAIT",
    city: "Delhi",
    placement: "1 cr"
};
const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});
console.log(mergeObjects(obj1,obj2));