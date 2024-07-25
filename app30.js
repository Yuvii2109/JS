// JS code linked

let players = ["Yuv","Raj","Vir","Sach","Deva"];
let [winner,runnerup,others] = players;
console.log(winner); 
console.log(runnerup); 
console.log(others); 
console.log("________________________");

// here only one name got printed in others 
// because we are using destructuring and it 
// will only assign the values of the first 3 elements of the array
// to the variables winner, runnerup and others respectively.
// The rest of the elements will be ignored.
// To get all the remaining elements in the others variable, we can use the rest operator(...)

let [winner1,runnerup1,...others1] = players;
console.log(winner1);
console.log(runnerup1);
console.log(others1); 
// here all the remaining elements will be stored in others1 as an array.