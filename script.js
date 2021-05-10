const cookie = document.getElementById("clickscore")
const score = document.getElementById("showscore")
const clickmultiplier = document.getElementById("clickmultiplier")
const showmultiplier = document.getElementById("showmultiplier")
const autoclicker = document.getElementById("autoclicker")
const autoclickerinfo = document.getElementById("autoclickerinfo")
const bonus = document.getElementById("bonus")
const bonusinfo = document.getElementById("bonusinfo")


let counter = 0
let multiplier = 1
let multiplierbonus = 0

score.innerHTML = counter
showmultiplier.innerHTML = "Multiplier is " + multiplier + ". Next purchase will cost you " + (multiplier*10);
autoclickerinfo.innerHTML = "Autoclicker disabled -> COST = 50 cookies"
bonusinfo.innerHTML = "Bonus disabled -> COST = 100 cookies"

cookie.addEventListener("click", function (){

    counter += multiplier + multiplierbonus
    score.innerHTML = counter

})

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

       if( seconds === 0){
            clearInterval(timer);
            multiplierbonus = 0;
           bonusinfo.innerHTML = "Bonus disabled -> COST = 100 cookies";
        }
    }
}


})
//Implement yet another improvement to buy, the bonus. It should grant the player a
// boost in score of 200% per click for 30 seconds.
// When purchased the player should see a timer with the remaining time inside the bonus button.


/*Step 1: base structure
Write the base structure for the project in HTML, CSS and JavaScript. Within the HTML, put a click button which will increment a counter and a label initialised at 0 to display said counter.

Step 2: prepare the JavaScript
In your JavaScript prepare variables to allow you to control your button and label. You will also need a variable to keep track of the score.

Step 3: increase the score
When you click the button, increase the variable storing the score by 1, then display the current score inside the label.

Step 4: make a multiplier
Add another button which will act as a multiplier. When called this button will permanently multiply the number of points per click, by two for example.

Step 5: price of multiplier
The multiplier allows you to have a big score quickly, that shouldn’t be free, it should be a purchase made with the current player score.

Step 6: no credit
You can’t make credit, meaning that the player cannot have a negative score. Think about updating the score display after a purchase.

Step 7: display multiplier counter
Display the counter within the multiplier. For example, if the counter is worth 5, then the button should display something like multiplier x5.

Step 8: increase the cost
Buying a lot of multiplier is way too easy. For more fun, make it so that each time a multiplier is purchased the cost of buying a new one is increased.

Step 9: display the cost
In the text of the multiplier button you should also have the price of the upgrade.

Step 10: auto-clicker
Implement a new improvement to buy, the auto-click. As the name might suggest this bonus will automatically add a click to your score each x seconds.

Step 11: bonus
Implement yet another improvement to buy, the bonus. It should grant the player a boost in score of 200% per click for 30 seconds. When purchased the player should see a timer with the remaining time inside the bonus button.

Step 12: deactivate the buttons
Make it so that, if the player doesn’t have the points to purchase a multiplier, an auto-click or an other bonus, he can’t.

Step 13: make it pretty
Your cookie clicker must be pretty, make it look good with CSS or some extra JavaScript.*/