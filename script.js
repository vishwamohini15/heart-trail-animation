let bodyel=document.querySelector("body")

bodyel.addEventListener("mousemove",(e)=>{
//   console.log("movef");
//   console.log(e.x,e.y);
let xpos=e.x
let ypos=e.y
let spancre=document.createElement("span")
spancre.style.left=xpos+"px"
spancre.style.top=ypos+"px"

let creatediffsize=Math.random()*100;
spancre.style.width=creatediffsize +"px"
spancre.style.height=creatediffsize +"px"

bodyel.appendChild(spancre)
setTimeout(()=>{
    spancre.remove();
},3000)
// bodyel.innerHTML=spancre
})