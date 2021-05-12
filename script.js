// create the link with divs in html
const cookie = document.getElementById("image1")
const score = document.getElementById("showscore")
const clickmultiplier = document.getElementById("image2")
const showmultiplier = document.getElementById("status1")
const costmultiplier = document.getElementById('cost1')
const autoclicker = document.getElementById("image3")
const autoclickerinfo = document.getElementById("status2")
const bonus = document.getElementById("image4")
const bonusinfo = document.getElementById("status3")
const timerx = document.getElementById("timer")
const costauto = document.getElementById("cost 2")

//giving our variables the initial values
let counter = 0
let multiplier = 1
let multiplierbonus = 0
let priceauto = 50



//this could be done in html as well, initial text
score.innerHTML = counter

score.addEventListener('change',function () {

})


//first goal, increase goal on click, the multiplierbonus was added later on
cookie.addEventListener("click", function () {

    counter += multiplier + multiplierbonus
    score.innerHTML = counter

})

//second goal, add the multiplier when clicked on cookie, added a simple if else to check if player has enough credit
clickmultiplier.addEventListener("click", function () {
    if (counter < (multiplier * 10)) {
        alert("you can't buy progress")
    } else {
        counter -= (multiplier * 10)
        multiplier += 1
        priceauto = 50 * multiplier
        if (multiplierbonus > 0) {
            multiplierbonus = multiplier
        }
        score.innerHTML = counter
        costauto.innerHTML = "-" + priceauto + " COOKIES";
        showmultiplier.innerHTML = multiplier;
        costmultiplier.innerHTML = "-" + (multiplier * 10) + " COOKIES";
    }
})

//added an autoclicker, this function will click automatically until infinity (at a cost of 50 cookies)
//also a check if there's enough credit
autoclicker.addEventListener("click", function () {
    priceauto = 50 * multiplier
    if (counter < priceauto) {
        //autoclicker.classList.add('noclick');
        alert("You can't buy autoclicker. You need at least" + priceauto + "cookies.")
    } else {
        costauto.innerHTML = "-" + priceauto + " COOKIES"
        function myTimer() {
            counter += multiplier + multiplierbonus
            score.innerHTML = counter
        }

        setInterval(myTimer, 2000);
        autoclickerinfo.innerHTML = "ENABLED"
        counter -= priceauto;
        score.innerHTML = counter

    }
})

// Added a bonus button, only if the player has enough cookies (100).
// For this part I used a setInterval function, being used as a timer starting from 30 seconds.
// The variable reduces every second by 1
// If the variable reaches 0 the setInterval will be stopped with a Clearinterval.
// First I simply added a multplier*2 but this leaded to conflicts when multiplying while bonusing (because after 30 sec I divided it again by 2)
// So I added an extra variable to avoid conflicts (also in the other addEventlisteners)-> multiplierbonus

bonus.addEventListener("click", function () {
    if (counter < 100) {
        alert("You can't buy bonusboost. You need at least 100 cookies.")
    } else {
        let timer = setInterval(Boost, 1000);
        let seconds = 30

        bonusinfo.innerHTML = "ENABLED";
        timerx.innerHTML = "30 seconds left, multiplier is " + (multiplier * 2);
        counter -= 100
        score.innerHTML = counter;
        multiplierbonus = multiplier;

        function Boost() {
            timerx.innerHTML = (--seconds) + " seconds left, multiplier is " + (multiplier * 2);
            if (seconds === 0) {
                clearInterval(timer);
                multiplierbonus = 0;
                bonusinfo.innerHTML = "DISABLED";
                timerx.innerHTML = "";
            }
        }
    }
})
