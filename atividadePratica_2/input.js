const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumero(retorno) {
    rl.question('Digite o número que deseja obter a tabuada: ', (numero) => {
        numero = parseFloat(numero);
        if (!isNaN(numero)) {
            retorno(numero);
        } else {
            console.log('Dado inválido. Por favor, digite um número.');
            pedirNumero(retorno);
        }
        rl.close();
    });
}

module.exports = { pedirNumero };