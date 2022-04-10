let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")

//let sumEl = document.querySelector("#sum-el")

let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomcard = Math.floor(Math.random()*13) + 1
    if (randomcard == 1){
        return 11
    }
    else if (randomcard >= 11){
        return 10
    }
    else{
        return randomcard
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]

    sum = firstCard + secondCard



    renderGame()
}



function renderGame(){

    console.log(cards)
    cardEl.textContent = "Cards: "

    for (let i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

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



function newCard(){

    if (isAlive == true && hasBlackJack == false){
        console.log("Drawing new card!")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}