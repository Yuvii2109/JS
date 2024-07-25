// JS code linked

function printInfo(name,age){
    console.log(`Name: ${name}, Age: ${age}`);
}
printInfo("Yuvraj",20);
printInfo("Rajvir",10);
printInfo("Mohita");

function sum(num1,num2){
    let sum = num1+num2;
    console.log(`${num1} + ${num2} = ${sum}`);
}
sum(10,20);

function avg(){
    let n1 = parseFloat(prompt("Enter the first number - "));
    let n2 = parseFloat(prompt("Enter the second number - "));
    let n3 = parseFloat(prompt("Enter the third number - "));
    let average = (n1+n2+n3)/3;
    console.log(`Average of ${n1}, ${n2} and ${n3} is ${average}`);
}
avg();