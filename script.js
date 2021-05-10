const cookie = document.getElementById("clickscore")
const score = document.getElementById("showscore")
const clickmultiplier = document.getElementById("clickmultiplier")
const showmultiplier = document.getElementById("showmultiplier")
let counter = 0
let multiplier = 1

score.innerHTML = counter
showmultiplier.innerHTML = multiplier


cookie.addEventListener("click", function (){

    counter += multiplier
    score.innerHTML = counter

})

clickmultiplier.addEventListener("click", function(){

    multiplier += 1
    showmultiplier.innerHTML = multiplier

})