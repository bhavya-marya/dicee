var random1=Math.random();
random1=(random1*6)+1;
random1=Math.floor(random1);
var img1="images/dice"+random1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",img1);

var random2=Math.random();
random2=(random2*6)+1;
random2=Math.floor(random2);
var img2="images/dice"+ random2 +".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",img2);

var heading=document.querySelectorAll("h1")[0];
if(random1>random2){
    heading.innerHTML="🚩 Player 1 wins!";
} else if(random2==random1){
    heading.innerHTML="Draw!"
} else{
    heading.innerHTML="Player 2 wins! 🚩"
}