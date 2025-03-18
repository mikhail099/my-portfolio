const readline = require("readline");

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let wins = 0;
let losses = 0;
console.log("🎉 Miderma welcomes you to the number guessing game! 🎉");
console.log("Test your guessing skills and try to find the hidden number.\n");

// Function to start the game
function startGame() {
    rl.question("Choose difficulty level (Easy: 1-10, Medium: 1-50, Hard: 1-100): ", (level) => {
        let maxNumber;
        switch (level.toLowerCase()) {
            case "medium":
                maxNumber = 50;
                break;
            case "hard":
                maxNumber = 100;
                break;
            default:
                maxNumber = 10;
        }
        playGame(maxNumber);
    });
}

// Function to play the game
function playGame(maxNumber) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    let attempts = 0;
    const maxAttempts = 5;

    function askGuess() {
        if (attempts >= maxAttempts) {
            console.log(`❌ Game Over! The correct number was ${randomNumber}.`);
            losses++;
            return askReplay();
        }

        rl.question(`Guess a number between 1 and ${maxNumber} (Attempt ${attempts + 1}/${maxAttempts}): `, (input) => {
            let guess = parseInt(input);

            if (isNaN(guess) || guess < 1 || guess > maxNumber) {
                console.log("❌ Invalid input! Please enter a valid number.");
                return askGuess();
            }

            attempts++;

            if (guess === randomNumber) {
                console.log(`🎉 Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
                wins++;
                return askReplay();
            } else {
                console.log(guess < randomNumber ? "Incorrect":);
                askGuess();
            }
        });
    }

    askGuess();
}

// Function to ask for replay
function askReplay() {
    console.log(`🏆 Wins: ${wins} | ❌ Losses: ${losses}`);
    rl.question("Do you want to play again? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
            startGame();
        } else {
            console.log("Thanks for playing! Goodbye! 👋");
            rl.close();
        }
    });
}

// Start the game
startGame();
