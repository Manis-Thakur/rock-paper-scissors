const computerScore = document.getElementById('computerScore');
const yourScore = document.getElementById('yourScore');
const playerDisplay = document.getElementById('yourChoose');
const computerDisplay = document.getElementById('computerChoose');
const rock = document.getElementById('rockplay');
const paper = document.getElementById('paperplay');
const scissors = document.getElementById('scissorplay');
const displayResult = document.getElementById('resultscore');

let playerPoints = 0;
let computerPoints = 0;


const array = ['rock', 'paper', 'scissors'];


function playGame(playerChoice) {
    const computerChoice = array[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    if (result === "You Win!") {
        playerPoints++;
    } else if (result === "You Lose!") {
        computerPoints++;
    }

    playerDisplay.textContent = `You choose: ${playerChoice}`;
    computerDisplay.textContent = `Computer choose: ${computerChoice}`;
    computerScore.textContent = playerPoints;
    yourScore.textContent = computerPoints;
    displayResult.style.display = "block";
    displayResult.textContent = result;
}

rock.addEventListener('click', () => playGame("rock"));
paper.addEventListener('click', () => playGame("paper"));
scissors.addEventListener('click', () => playGame("scissors"));