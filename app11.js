// JS code linked

// prompt convert the input to a string 
// So in order to perform the mathematical functions 
// it's prefered to make use of parseInt or parseFloat

let maxNum = parseInt(prompt("Enter the maximum number till which you want to generate random numbers - "));
let minNum = parseInt(prompt("Enter the minimum number from which you want to generate random numbers - "));
if(minNum<maxNum){
    let randomNum = Math.floor((Math.random()*(maxNum-minNum+1)) + minNum);
    let guess = parseInt(prompt("Guess the Random number - "));
    if(guess == randomNum){
        console.log("7 Crore!!! You guessed it correctly. The random number was indeed " + randomNum);
    }
    else{
        console.log("Manyavar Btate hue boht khed hai... You didn't guess it correctly. The random number was " + randomNum);
    }
}
else{
    console.log("Invalid input. In case you don't know... Minimum number should be less than maximum number.");
}