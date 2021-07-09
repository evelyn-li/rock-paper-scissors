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
            console.log(`You won! ${playerSelection} beats ${computerSelection}`)
            return 'win'
        default:
            console.log(`You lost! ${computerSelection} beats ${playerSelection}`)
            return 'lose'
    }
}

function game() {
    // keep track of score using variables

    // while neither player has reached 5 points...
    // ask player for which item to throw
    // play a round
    // update score depending on results from function

    // after game is over, display winner
}
