// JS Code Linked
// Create a program that generates a random number 
// representing a dice roll. [ The number should be between 1 and 6 ].

let num = Math.floor((Math.random()*6) + 1);
if(num == 6){
    console.log("Congratulations! You rolled a 6! You can roll again");
    num = Math.floor((Math.random()*6) + 1);
    if(num == 6){
        console.log("Congratulations! You rolled a 6 again! You can roll again!");
        num = Math.floor((Math.random()*6) + 1);
        if(num == 6){
            console.log("Baari cut... You rolled a 6 thrice in a row")
        }
        else{
            console.log("You rolled a " + num);
        }

    }
    else{
        console.log("You rolled a " + num);
    }
}
else{
    console.log("You rolled a " + num);
}