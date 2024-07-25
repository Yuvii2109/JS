// JS code linked

let favMovie = "Interstellar";
let guess = prompt("Enter the favourite movie - ");
while((guess != favMovie)&&(guess != "quit")){
    guess = prompt("Wrong guess... please try again - ");
}
if(guess == favMovie){
    console.log("Congratulations! You've guessed the right movie!!!");
}