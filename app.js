function computerPlay() {
    const outcomes = ['rock', 'paper', 'scissors']
    return outcomes[Math.floor(Math.random() * outcomes.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!'
    }
    else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                return 'You won! Rock beats Scissors'
            }
            return 'You lost! Scissors beats Rock'

        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                return 'You won! Paper beats Rock'
            }
            return 'You lost! Scissors beats Paper'

        }
        else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                return 'You won! Scissors beats Paper'
            }
            return 'You lost! Rock beats Scissors'
        }
    }
}