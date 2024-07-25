// JS code linked
// Handling rejection

h1 = document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            let num = Math.floor(Math.random()*5+1);
            if(num>4){
                reject("Promise rejected");
            }
            h1.style.color = color;
            resolve("Color Changed");
        },delay);
    });
}
async function demo(){
    try{
        await colorChange("violet",1000);
        await colorChange("indigo",1000);
        await colorChange("blue",1000);
        await colorChange("green",1000);
        await colorChange("yellow",1000);
        await colorChange("orange",1000);
        colorChange("red",1000);
    }catch(err){
        console.log("Error occured - ", err);
    }

    let a = 5;
    console.log(a);
    console.log("Thala for a reason - ", a+2);
};