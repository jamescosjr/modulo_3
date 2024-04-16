const readline = require('readline');
const { letsPlay } = require('./game');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let attempts;

function showMenu() {
    console.log("\n=============== Welcome to Guess the Number ===============");
    console.log("1. Very Easy");
    console.log("2. Easy");
    console.log("3. Normal");
    console.log("4. Hard");
    console.log("5. Very Hard");
    console.log("6. Quit\n");

    rl.question("Choose your level: ", (level) => {
        if (level === '1') {
            attempts = 10;
            letsPlay(attempts, rl);
        } else if (level === '2') {
            attempts = 8;
            letsPlay(attempts, rl);
        } else if (level === '3') {
            attempts = 6;
            letsPlay(attempts, rl);
        } else if (level === '4') {
            attempts = 4;
            letsPlay(attempts, rl);
        } else if (level === '5') {
            attempts = 2;
            letsPlay(attempts, rl);
        } else if (level === '6') {
            console.log("Thanks for playing! Goodbye.");
            rl.close();
        } else {
            console.log("Invalid option. Please choose a valid option.");
            showMenu();
        }
    });
}

module.exports = { showMenu };