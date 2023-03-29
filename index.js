let total = 0
document.getElementById("score-home").textContent = total
document.getElementById("score-guest").textContent = total


let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let resultHome = total 
let resultGuest = total
function add1(){
    resultHome += 1
    scoreHome.textContent = resultHome
}

function add2() {
    resultHome += 2
    scoreHome.textContent = resultHome
}

function add3(){
    resultHome += 3
    scoreHome.textContent = resultHome
}

function add1Guest() {
    resultGuest += 1
    scoreGuest.textContent = resultGuest
}

function add2Guest() {
    resultGuest += 2
    scoreGuest.textContent = resultGuest
}

function add3Guest() {
    resultGuest += 3
    scoreGuest.textContent = resultGuest
}