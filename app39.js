// JS code linked

h1 = document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            h1.style.color = color;
            resolve("Color Changed");
        },delay);
    });
}
colorChange("red",1000)
.then((result)=>{
    console.log("Color changed to red");
    return colorChange("blue",1000);
})
.then((result)=>{
    console.log("Color changed to blue");
    return colorChange("green",1000);
})
.then((result)=>{
    console.log("Color changed to green");
    return colorChange("purple",1000);
})
.then((result)=>{
    console.log("Color changed to purple");
    return colorChange("orange",1000);
})
.then((result)=>{
    console.log("Color changed to orange");
})
.catch((error)=>{
    console.log(error);
});