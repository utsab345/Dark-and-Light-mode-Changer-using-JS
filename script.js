let btn= document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");
btn.addEventListener("click",()=>{
    if(currMode==="light")
    {
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else {currMode="light";
    body.classList.add("light");
    body.classList.remove("dark");
}
console.log(currMode);
});