



function clickForWorks(){
    let imgs = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

    let img1 = imgs[Math.floor(Math.random()*imgs.length)];
    let img2 = imgs[Math.floor(Math.random()*imgs.length)];
    

    document.querySelector(".img1").setAttribute("src", img1);
    document.querySelector(".img2").setAttribute("src", img2);

    if(img1 > img2){
        document.querySelector(".winner").innerHTML = "The winner player was player 1";
    } else   if(img1 < img2){
        document.querySelector(".winner").innerHTML = "The winner player was player 2";
    } else{
        document.querySelector(".winner").innerHTML = "Tie";
    }
}