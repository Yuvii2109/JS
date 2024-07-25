// JS code linked

const url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    show(colleges);
});
function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(let college of colleges){
        console.log(college.name);
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}
async function getColleges(country){
    try{
        let response = await axios.get(url+country);
        return response.data;
    }catch(err){
        console.log(err);
        return [];
    }
};