let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){

        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)

    })
}

function validateGuess(guess){// this will validate if the value is number or not and bw 1 to 100 or not
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a valid number')
    }else if(guess > 100){
        alert('please enter a valid number')
    }else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }


}

function checkGuess(guess){// this will check the guess to the random number, if it is equal, more or less
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }else if (guess>randomNumber){
        displayMessage(`Number is too HIGH`)
    }


}

function displayGuess(guess){// this will update the guess and tell the user how many guess he has

    userInput.value = ''//this is just cleanup of input, so that the new value will be new
    guessSlot.innerHTML += `${guess} `
    numGuess++;

    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){

    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

function newGame(){

    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e){
        e.preventDefault()
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${10-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true
    })
    
}





