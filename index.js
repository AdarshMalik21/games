

var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;


var displayImage="images/"+"dice"+randomNumber1+".png";


var Image1 =document.querySelectorAll("img")[0];
Image1.setAttribute("src", displayImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var displayImage2="images/dice"+randomNumber2+".png";

var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src",displayImage2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
