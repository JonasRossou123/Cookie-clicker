// create the link with divs in html
const cookie = document.getElementById("clickscore")
const score = document.getElementById("showscore")
const clickmultiplier = document.getElementById("clickmultiplier")
const showmultiplier = document.getElementById("showmultiplier")
const autoclicker = document.getElementById("autoclicker")
const autoclickerinfo = document.getElementById("autoclickerinfo")
const bonus = document.getElementById("bonus")
const bonusinfo = document.getElementById("bonusinfo")

//giving our variables the initial values
let counter = 0
let multiplier = 1
let multiplierbonus = 0


//this could be done in html as well, initial text
score.innerHTML = counter
showmultiplier.innerHTML = "Multiplier is " + multiplier + ". Next purchase will cost you " + (multiplier*10);
autoclickerinfo.innerHTML = "Autoclicker disabled -> COST = 50 cookies"
bonusinfo.innerHTML = "Bonus disabled -> COST = 100 cookies"


//first goal, increase goal on click, the multiplierbonus was added later on
cookie.addEventListener("click", function (){

    counter += multiplier + multiplierbonus
    score.innerHTML = counter

})

//second goal, add the multiplier when clicked on cookie, added a simple if else to check if player has enough credit
clickmultiplier.addEventListener("click", function(){
    if (counter<(multiplier*10)){
        alert("you can't buy progress")
    }
    else{
        counter -= (multiplier*10)
        multiplier += 1
        if (multiplierbonus>0){
            multiplierbonus = multiplier
        }
        score.innerHTML = counter
        showmultiplier.innerHTML = "Multiplier is " + multiplier + ". Next purchase will cost you " + (multiplier*10);
    }
})

//added an autoclicker, this function will click automatically until infinity (at a cost of 50 cookies)
//also a check if there's enough credit
autoclicker.addEventListener("click", function (){

    if (counter<50){
        alert("You can't buy autoclicker. You need at least 50 cookies.")
    }
    else{
        function myTimer() {
            counter += multiplier + multiplierbonus
            score.innerHTML = counter
        }

        setInterval(myTimer, 2000);
        autoclickerinfo.innerHTML = "autoclicker enabled"
        counter -= 50;
        score.innerHTML = counter

    }
})

// Added a bonus button, only if the player has enough cookies (100).
// For this part I used a setInterval function, being used as a timer starting from 30 seconds.
// The variable reduces every second by 1
// If the variable reaches 0 the setInterval will be stopped with a Clearinterval.
// First I simply added a multplier*2 but this leaded to conflicts when multiplying while bonusing (because after 30 sec I divided it again by 2)
// So I added an extra variable to avoid conflicts (also in the other addEventlisteners)-> multiplierbonus

bonus.addEventListener("click", function(){
if  (counter < 100){
    alert("You can't buy bonusboost. You need at least 100 cookies.")
}

else{
    let timer = setInterval(Boost, 1000);
    let seconds = 30

    bonusinfo.innerHTML = "30 seconds left, multiplier is "+ (multiplier*2);
    counter -= 100
    score.innerHTML= counter
    multiplierbonus = multiplier;

    function Boost() {
        bonusinfo.innerHTML = (--seconds) + " seconds left, multiplier is " + (multiplier*2);

        if(seconds === 0){
           clearInterval(timer);
           multiplierbonus = 0;
           bonusinfo.innerHTML = "Bonus disabled -> COST = 100 cookies";
        }
    }
}
})
