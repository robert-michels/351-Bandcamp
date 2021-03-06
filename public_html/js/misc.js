
console.log("Running...")
var fav = document.getElementById("favorite");
var bought = document.getElementById("buyalbum");
var play = document.getElementById("playbutt");
var playblack = document.getElementById("playbuttblack");

console.log("Fav =" + fav);
fav.addEventListener("click", changefav);
bought.addEventListener("click", changebuy);
play.addEventListener("click", changeplay);
playblack.addEventListener("click", changeplay);

var filled = false;
var yougotit = false;
var itsplayingalright = false;

//Slicing arrays solution found from bottens' answer here: https://stackoverflow.com/questions/24639493/gather-divs-and-perform-css-on-them-htmlcollection-vs-array
var soundbars = document.getElementsByClassName("soundbar");
soundbars = Array.prototype.slice.call(soundbars);

function changefav(){
    console.log("Clicked!");
    if(!filled){
        fav.src = "img/favorite-fill.png";
        filled = true;
    }else{
        fav.src = "img/favorite-border.png";
        filled = false;
    }
}

function changeplay(){
    if(!itsplayingalright){
        play.src = "img/pause.png";
        playblack.src = "img/pause-black.png";
        itsplayingalright = true;
        
    }else{
        play.src = "img/play-arrow.png";
        playblack.src = "img/play-arrow-black.png";
        itsplayingalright = false;
        soundbars.forEach( function(element){
            
            element.style.height = "10%"; 
        });
    }
}


function changebuy(){
    if(!yougotit){
        bought.textContent = "You Own This";
        yougotit = true;

        fav.src = "img/favorite-fill.png";
        filled = true;
    }

}


//Set interval grabbed from Doug Neiner's answer here: https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery
window.setInterval(function(){
    
    if(itsplayingalright){
        soundbars.forEach( function(element){
            element.style.height = Math.floor(Math.random() * 100) + "%"; 
        });
    }
    
}, 100)