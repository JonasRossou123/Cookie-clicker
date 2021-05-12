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

const checkmulti = () => {
    if (counter < (multiplier * 10)){
        clickmultiplier.classList.add('noclick');
    }
    else {
        clickmultiplier.classList.remove('noclick');
    }
}

checkmulti()

const checkauto = () => {
    if (counter >= priceauto){
        autoclicker.classList.remove('noclick');
    }
    else
        autoclicker.classList.add("noclick");
}

checkauto()



const checkbonus = () => {
     if (counter < 100){
         bonus.classList.add('noclick');
     }
     else {
         bonus.classList.remove('noclick');
     }
}

checkbonus()

function myTimer() {
    counter += multiplier + multiplierbonus
    score.innerHTML = counter
    checkmulti();
    checkauto();
    checkbonus();
}


//first goal, increase counter on click, the multiplierbonus was added later on
cookie.addEventListener("click", function () {
    counter += multiplier + multiplierbonus
    score.innerHTML = counter
    checkmulti();
    checkauto();
    checkbonus();
})


//second goal, add the multiplier when clicked on cookie, added a simple if else to check if player has enough credit
clickmultiplier.addEventListener("click", function () {



        counter -= (multiplier * 10)
        multiplier += 1
        priceauto = 50 * multiplier


        if (multiplierbonus > 0) {
            multiplierbonus = multiplier
        }
    checkmulti();
    checkauto();
    checkbonus();

        score.innerHTML = counter
        costauto.innerHTML = "-" + priceauto + " COOKIES";
        showmultiplier.innerHTML = multiplier;
        costmultiplier.innerHTML = "-" + (multiplier * 10) + " COOKIES";
})

//added an autoclicker, this function will click automatically until infinity (at a cost of 50 cookies)
//also a check if there's enough credit
autoclicker.addEventListener("click", function () {
    priceauto = 50 * multiplier
    costauto.innerHTML = "-" + priceauto + " COOKIES"

        setInterval(myTimer, 1000);
        autoclickerinfo.innerHTML = "ENABLED"
        counter -= priceauto;
        score.innerHTML = counter
    checkmulti();
    checkauto();
    checkbonus();

})

// Added a bonus button, only if the player has enough cookies (100).
// For this part I used a setInterval function, being used as a timer starting from 30 seconds.
// The variable reduces every second by 1
// If the variable reaches 0 the setInterval will be stopped with a Clearinterval.
// First I simply added a multplier*2 but this leaded to conflicts when multiplying while bonusing (because after 30 sec I divided it again by 2)
// So I added an extra variable to avoid conflicts (also in the other addEventlisteners)-> multiplierbonus

bonus.addEventListener("click", function () {

        let timer = setInterval(Boost, 1000);
        let seconds = 30

        bonusinfo.innerHTML = "ENABLED";
        timerx.innerHTML = "30 seconds left, multiplier is " + (multiplier * 2);
        counter -= 100

    checkmulti();
    checkauto();
    checkbonus();

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

})
