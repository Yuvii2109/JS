// JS code linked

// To return array elements larger than a number

function largerEle(){
    let arr = [];
    let num = prompt("Enter the number of elements you want to insert in the array - ");
    for(let i = 0; i < num; i++){
        arr.push(parseFloat(prompt(`Enter element ${i+1} - `)));
    }
    console.log(arr);
    let n = parseFloat(prompt("Enter the number to compare with array elements - "));
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > n){
            console.log(`Element ${arr[j]} is larger than ${n}`);
        }
    }
}
largerEle();

// To print unique characters from a string

function uniquePrint(){
    let str = prompt("Enter a string - ");
    let uniqueStr = "";
    console.log(`You entered - ${str}`);
    for(let i = 0; i < str.length; i++){
        if(uniqueStr.indexOf(str[i]) == -1){
            uniqueStr += str[i];
        }
    }
    console.log(uniqueStr);
}
uniquePrint();