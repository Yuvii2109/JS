// JS code linked

let jsonRes = 
'{"fact": "The leopard is the most widespread of all big cats.","length": 51}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let student = {
    name: "Yuvraj",
    age: 20,
};
let validJSON = JSON.stringify(student);
console.log(validJSON);