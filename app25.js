// JS code linked

// Question 1
const arrayAverage = () => {
    let arr = [];
    sum = 0;
    let num = parseInt(prompt("Enter the number of numbers you want in the array - "));
    for (let i = 0; i < num; i++){
        arr.push(parseInt(prompt(`Enter number ${i + 1} - `)));
    }
    console.log(arr);
    for (let j = 0; j < arr.length; j++){
        sum += arr[j];
    }
    let average = sum / arr.length;
    console.log(`Average of the numbers in the array is - ${average}`);
}
arrayAverage();

// Question 2
const isEven = () => {
    let n = parseInt(prompt("Enter a number - "));
    if (n % 2 == 0 && n > 0) {
        console.log(`${n} is even.`);
    }
    else{
        console.log(`${n} is not even.`);
    }
}
isEven();