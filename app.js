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

function game() {
    let playerScore = 0
    let cpuScore = 0

    const buttons = document.querySelectorAll('#buttons button')
    for (let button of buttons) {
        button.addEventListener('click', function play() {
            const playerMove = button.id
            if (playerScore < 5 && cpuScore < 5) {
                const result = playRound(playerMove, computerPlay())

                if (result === 'win') playerScore++
                else if (result === 'lose') cpuScore++

                console.log('Player score: ' + playerScore)
                console.log('CPU score: ' + cpuScore)
            }
            else {
                console.log('Game over! ' + ((playerScore > cpuScore) ? 'You won the game!' : 'You lost the game!'))
                button.removeEventListener('click', play)
            }
        })
    }
}

game()
