// JS code linked

const student = {
    name: "Yuvraj Sachdeva",
    age: 20,
    year: "2nd",
    branch: "CSE-AI",
    username: "yuvii2109",
    password: "hehe1234"
}
let{username: user,password: secret, city = "Delhi"} = student;
console.log(user);
console.log(secret);
console.log(city);

// Here we have set variable for the keys 
// username is set to user
// password is set to secret
// city is set to Delhi (default value)
// In order to access the data stored in the keys 
// we need to use the variable names we have set
