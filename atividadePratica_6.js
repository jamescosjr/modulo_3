const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

rl.question("Digite um número para verificar se é primo: ", (numero) => {
    numero = parseInt(numero);
    
    if (!isNaN(numero)) {
        const primo = isPrime(numero);
        if (primo) {
            console.log(numero + ` é um número primo.`);
        } else {
            console.log(numero + ` não é um número primo.`);
        }
    } else {
        console.log("Entrada inválida. Por favor, digite um número válido.");
    }
    
    rl.close();
});