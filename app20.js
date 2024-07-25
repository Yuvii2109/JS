// JS code linked
// To count the number of vowels in the inputted string 

function vowelCount(){
    let string = prompt("Enter a string - ");
    let uniqueStr = "";
    console.log(`You entered - ${string}`);
    for(let i = 0; i < string.length; i++){
        if(uniqueStr.indexOf(string[i]) == -1){
            uniqueStr += string[i];
        }
    }
    let vowelstr = "";
    for(let i = 0; i < uniqueStr.length; i++){
        let vowel = uniqueStr[i];
        switch(vowel)
        {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                vowelstr += vowel;
                break;
            default:
                break;

        }
    }
    if(vowelstr === ""){
        console.log("No vowels found");
    }
    else{
        console.log(`"${vowelstr}" - are the vowels present in the string that is - ${vowelstr.length} vowels`);
    }
}
vowelCount();