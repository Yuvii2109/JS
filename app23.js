// JS code linked
// this with Arrow function

const student = {
    name: "Yuvraj Sachdeva",
    marks: 100,
    property: this, //Global Scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //Parent's scope -> window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this); //student object
            console.log(this.name);
        }, 3000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log(this); // window's object
            console.log(this.marks);
        }, 3000);
    }
}