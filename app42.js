// JS code linked

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#output");
    img.setAttribute("src",link);
    btn.innerText = "Show New Image";
})
let url = "https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(err){
        console.log(err);
        return "No Image found";
    }
}