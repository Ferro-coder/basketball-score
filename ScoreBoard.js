//score to change
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0

//score HOME
function homeZero(){
   countHome = 0
   scoreHome.textContent = countHome 
}


function add1Home(){
    scoreHome.textContent = countHome+1
    countHome += 1
}

function add2Home(){
    scoreHome.textContent = countHome+2
    countHome += 2
}

function add3Home(){
    scoreHome.textContent = countHome+3
    countHome += 3
}

//score GUEST
function guestZero(){
    countGuest = 0
    scoreGuest.textContent = countGuest
 }
 
 
 function add1Guest(){
     scoreGuest.textContent = countGuest+1
     countGuest += 1
 }
 
 function add2Guest(){
     scoreGuest.textContent = countGuest+2
     countGuest += 2
 }
 
 function add3Guest(){
     scoreGuest.textContent = countGuest+3
     countGuest += 3
 }
 