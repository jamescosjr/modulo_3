const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterValores(callback) {
    rl.question('Digite o primeiro valor: ', (num1) => {
        rl.question('Digite o segundo valor: ', (num2) => {
            rl.question('Digite o terceiro valor: ', (num3) => {
                rl.close();
                callback(num1, num2, num3);
            });
        });
    });
}

module.exports = { obterValores };