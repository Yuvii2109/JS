// JS code linked

const student = {
    name: "Yuvraj Sachdeva",
    maths: 100,
    physics: 84,
    chemistry: 93,
    english: 91,
    computers: 88,
    getAvg(){
        let avg = (this.maths + this.physics + this.chemistry)/3;
        return avg;
    }
}

//here we cannot use maths, physics, chemistry as it is 
//we have to use this.maths, this.physics, this.chemistry
//because we are inside the object and we are referring to the properties of the same object
console.log(`Marks in maths are - ${student.maths}`);
console.log(`Marks in physics are - ${student.physics}`);
console.log(`Marks in chemistry are - ${student.chemistry}`);
console.log(`Average is - ${student.getAvg()}`); 

function getAvg(){
    console.log(this);
}
// here this will refer to the global object (window in browser, global in nodejs)
getAvg();  // this will print the global object
// if we want to use this in a function, we have to bind it to an object
// we can use call, apply, bind methods to bind this to an object
// example - getAvg.call(student); // this will print the student object
// example - getAvg.apply(student); // this will print the student object

// Window object is the
// global object in the browser
// console.log(window); // prints the window object
// console.log(this); // prints the window object
// console.log(this === window); // prints true
// console.log(this === global); // prints false in browser, true in nodejs
// console.log(this === globalThis); // prints true in both browser and nodejs