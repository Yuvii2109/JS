// Js code linked

function series(){
    let n = parseInt(prompt("Enter the last number in the series - "));
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log(`Sum of consecutive terms from 1 to ${n} is ${sum}`);
}
series();

//Concatenation of strings in an array

function concat(){
    let arr = [];
    let con = "";
    let n = prompt("Enter the number of strings you want to input in the array - ");
    for(let i = 0; i < n; i++){
        arr.push(prompt(`Enter the string ${i+1} - `));
    }
    console.log(arr);
    for(let j = 0; j < arr.length; j++){
        con += arr[j];
    }
    console.log(con);
}
concat();