let playerScore = 0
let cpuScore = 0

const buttons = document.querySelectorAll('#buttons button')
for (let button of buttons) {
    button.addEventListener('click', game)
}

function computerPlay() {
    const items = ['rock', 'paper', 'scissors']
    return items[Math.floor(Math.random() * items.length)]
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            console.log('It\'s a tie!')
            return 'tie'
        case playerSelection === 'rock' && computerSelection === 'scissors':
        case playerSelection === 'paper' && computerSelection === 'rock':
        case playerSelection === 'scissors' && computerSelection === 'paper':
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            return 'win'
        default:
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
            return 'lose'
    }
}

function updateScore(result) {
    if (result === 'win') playerScore++
    else if (result === 'lose') cpuScore++

    console.log('Player score: ' + playerScore)
    console.log('CPU score: ' + cpuScore)
}

function game() {
    const playerMove = this.id
    const result = playRound(playerMove, computerPlay())
    updateScore(result)
    if (playerScore >= 5 || cpuScore >= 5) {
        endGame()
    }
}

function endGame() {
    console.log('Game over! ' + ((playerScore > cpuScore) ? 'You won the game!' : 'You lost the game!'))
    for (let button of buttons) {
        button.removeEventListener('click', game)
    }
}

