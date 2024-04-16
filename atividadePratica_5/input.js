const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumero(retorno) {
    rl.question("Digite um número para verificar se é primo: ", (numero) => {
        rl.close();
        retorno(parseInt(numero));
    });
}

module.exports = { pedirNumero };