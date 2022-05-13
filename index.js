var a=Math.random();
a=a*6;
var rand1=Math.floor(a)+1;
// alert(rand+1);
var rand2=(Math.floor(Math.random()*6))+1;
document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png");

if(rand1>rand2){
    document.querySelector("h1").textContent="Player "+1+" Wins!!"
}
if(rand1==rand2){
    document.querySelector("h1").textContent="Draw"
}
if(rand1<rand2){
    document.querySelector("h1").textContent="Player "+2+" Wins!!"
}

