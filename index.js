var text = document.querySelector(".name h1");
var src = document.querySelector(".img1 img");
var crs = document.querySelector(".img2 img")
console.log(src); 
const hi = src.getAttribute("src");
console.log(hi)

var p1 = Math.random()*6+1;
p1 = Math.floor(p1);
console.log(p1);
var p2 = Math.random()*6+1;
p2=Math.floor(p2);
console.log(p2);
var x = "images/dice"+p1+".png";
console.log(x);
src.setAttribute("src",x);
var y = "images/dice"+p2+".png";
console.log(y);
crs.setAttribute("src",y)
if(p1>p2)
{
    text.textContent="p1 wins";
}
else if(p1<p2)
    text.textContent="p2 wins";
