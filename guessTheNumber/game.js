const randomNumber = Math.floor(Math.random() * 101) + 100;

function letsPlay(attempts, rl) {
    console.log("\nGuess the Number Game\n");
    console.log("You have", attempts, "attempts to guess the number between 100 and 200.");
    console.log("Type 'exit' to quit the game.\n");

    rl.question("Enter your guess: ", (guess) => {
        if (guess.toLowerCase() === 'exit') {
            console.log("Thanks for playing! Goodbye.");
            rl.close();
            return;
        }

        const guessNumber = parseInt(guess);
        if (isNaN(guessNumber)) {
            console.log("Invalid input. Please enter a valid number.");
            letsPlay(attempts, rl);
        } else {
            if (guessNumber === randomNumber) {
                console.log("Congratulations! You guessed the correct number:", randomNumber);
                rl.close();
            } else {
                attempts--;
                if (attempts === 0) {
                    console.log("Game Over! The correct number was:", randomNumber);
                    rl.close();
                } else {
                    if (guessNumber < randomNumber) {
                        console.log("Too low! Try again.");
                    } else {
                        console.log("Too high! Try again.");
                    }
                    letsPlay(attempts, rl);
                }
            }
        }
    });
}

module.exports = { letsPlay };