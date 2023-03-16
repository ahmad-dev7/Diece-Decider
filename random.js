var randomNumber1 = Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2) {

    document.querySelector("h1").innerHTML="🚩Player 1 wins";
    document.querySelector(".img1").classList.add("winner");

} else if (randomNumber2>randomNumber1){

    document.querySelector("h1").innerHTML="Player 2 wins🚩";
    document.querySelector(".img2").classList.add("winner");
}
else{
    document.querySelector("h1").innerHTML="🚩Draw🚩";
}

document.querySelector(".reload").addEventListener("click", function(){
    onclick=location.reload();
})
