const cookie = document.getElementById("clickbutton")
const label = document.getElementById("counter")
const multiplier = document.getElementById("multiplier")
const playerScore = 0
let counter = 0

cookie.addEventListener("click", function (){

    counter += 1
    console.log(counter)
    label.innerHTML = counter

})

multiplier.addEventListener("click", function(){

    counter *= 2
    console.log(counter)
    label.innerHTML = counter

})