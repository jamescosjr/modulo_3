const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumero(retorno) {
    rl.question('Quantos elementos da sequência de Fibonacci você quer? ', (termo) => {
        rl.close();
        const n = parseInt(termo);
        retorno(parseInt(n));
    });
}

module.exports = { pedirNumero };