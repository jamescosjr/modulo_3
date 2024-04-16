const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumero(retorno) {
    rl.question('Digite o número que deseja o fatorial: ', (numero) => {
        rl.close();
        retorno(parseInt(numero));
    });
}

module.exports = { pedirNumero };