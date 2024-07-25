// JS code linked

// To except country names and 
// print the name of the country with the longest name

function longestCountry(){
    let countryNames = [];
    let n = prompt("Enter the number of countries you want to input - ");
    for(let i = 0; i < n; i++){
        countryNames.push(prompt("Enter country name " + (i+1) + " - "));
    }
    console.log(countryNames);
    for(let i = 0; i < countryNames.lenght; i++){
        for(let j = 1; j < countryNames.length; j++){
            if(countryNames[i].length > countryNames[j].length){
                let temp = countryNames[i];
                countryNames[i] = countryNames[j];
                countryNames[j] = temp;
            }
        }
    }
    console.log("The country with the longest name is - " + countryNames[countryNames.length-1]);
}
longestCountry();