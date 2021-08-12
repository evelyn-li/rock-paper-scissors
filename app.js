let playerScore = 0
let cpuScore = 0

const buttons = document.querySelectorAll('#buttons button')
for (let button of buttons) {
    button.addEventListener('click', game)
}

function game() {
    const result = playRound(this.className, computerPlay())
    updateScore(result)
    if (playerScore >= 5 || cpuScore >= 5) {
        endGame()
    }
}

function computerPlay() {
    const items = ['rock', 'paper', 'scissors']
    return items[Math.floor(Math.random() * items.length)]
}

function displayMoves(playerSelection, computerSelection) {
    const playerClasses = document.querySelector('#player .image').classList
    playerClasses.remove(playerClasses.item(1))
    playerClasses.add(playerSelection)

    const cpuClasses = document.querySelector('#computer .image').classList
    cpuClasses.remove(cpuClasses.item(1))
    cpuClasses.add(computerSelection)
}

function playRound(playerSelection, computerSelection) {
    displayMoves(playerSelection, computerSelection)
    switch (true) {
        case playerSelection === computerSelection:
            displayResult('tie', 'It\'s a tie!')
            return 'tie'
        case playerSelection === 'rock' && computerSelection === 'scissors':
        case playerSelection === 'paper' && computerSelection === 'rock':
        case playerSelection === 'scissors' && computerSelection === 'paper':
            displayResult('win', 'You win!')
            return 'win'
        default:
            displayResult('lose', 'You lose!')
            return 'lose'
    }
}

function displayResult(result, msg) {
    const display = document.querySelector('#result')
    display.innerText = msg

    const classes = display.classList
    classes.remove(classes.item(0))
    classes.add(result)
}

function updateScore(result) {
    if (result === 'win') playerScore++
    else if (result === 'lose') cpuScore++

    const liveScore = document.querySelector('h2 span')
    liveScore.innerText = `${playerScore} - ${cpuScore}`
}

function endGame() {
    console.log('Game over! ' + ((playerScore > cpuScore) ? 'You won the game!' : 'You lost the game!'))
    for (let button of buttons) {
        button.removeEventListener('click', game)
    }
}

