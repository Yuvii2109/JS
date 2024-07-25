// JS code linked

//code1
const object = {
    message : "Hello World!",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);

//code2
let length = 4;
function callback(){
    console.log(this.length);
}
const object1 = {
    length : 5,
    method(callback){
        callback();
    }
};
object1.method(callback,1,2);