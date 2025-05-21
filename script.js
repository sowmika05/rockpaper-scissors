function playGame(userChoice) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("userChoice").textContent = "You: " + userChoice;
    document.getElementById("computerChoice").textContent = "Computer: " + computerChoice;

    let winner = "";

    if (userChoice === computerChoice) {
        winner = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        winner = "You win!";
    } else {
        winner = "Computer wins!";
    }

    document.getElementById("winner").textContent = winner;
}