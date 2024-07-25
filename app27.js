// JS code linked

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,4,6,8];
let arr3 = [1,3,5,7];

// Every function
let val1 =  arr1.every((el) => (el%2 == 0 ));
let val2 = arr2.every((el) => (el%2 == 0));

// Some function
let val3 = arr1.some((el) => (el%2 == 0 ));
let val4 = arr3.some((el) => (el%2 == 0));

// Reduce function
let val5 = arr1.reduce((res,el) => (res+el));
let num = [2,4,6,8,3,2,5,7,9,3,3,2,5];
let result = num.reduce((max,el) => {
    if (el > max){
        return el;
    } else {
        return max;
    }
});
// explanation of the above code
// the reduce function takes a callback function as an argument
// the callback function takes two arguments, the accumulator (res) and the current element (el)
// the callback function returns the new value of the accumulator
// the reduce function returns the final value of the accumulator after iterating over all elements of the array
// in this case, we are finding the maximum number in the array
// max will keep getting alloted the maximum value from the array
// this is due to the use of 'return'

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(result + " is the largest number in " + num);