let firstCard = 6
let secondCard = 9

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

//let sumEl = document.querySelector("#sum-el")


function startGame(){

    sumEl.textContent = "Sum: " + sum

    if (sum < 21){
        message = "Do you want to draw a new card?"
    } 
    else if (sum == 21){
        message = "Got blackjack!"
        hasBlackJack = true
    }
    
    else {
        message = "Youre out of the game!"
        isAlive = false
    }

    
    messageEl.textContent = message 
}



