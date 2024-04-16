const readline = require('readline');
const { letsPlay } = require('./game');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const LEVELS = {
    "1": 10,
    "2": 8,
    "3": 6,
    "4": 4,
    "5": 2,
    "6": "quit"
};

const WELCOME_MESSAGE = `
=============== Welcome to Guess the Number ===============
1. Very Easy
2. Easy
3. Normal
4. Hard
5. Very Hard
6. Quit
`;

function showMenu() {
    console.log(WELCOME_MESSAGE);
    rl.question("Choose your level: ", handleLevelSelection);
}

function handleLevelSelection(level) {
    if (LEVELS[level]) {
        if (level === '6') {
            console.log("Thanks for playing! Goodbye.");
            rl.close();
            return;
        }
        letsPlay(LEVELS[level], rl);
    } else {
        console.log("Invalid option. Please choose a valid option.");
        showMenu();
    }
}

module.exports = { showMenu };