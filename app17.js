// JS code linked
// Higher order function
// A function that returns a function

function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else{
        console.log("Invalid request");
    }
}