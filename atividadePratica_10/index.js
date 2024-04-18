const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite os números que quer reorganizar, separados por um espaço ' ':", (numeros) => {
    let arrayNumero = numeros.split(' ').map(Number);
    let pares = arrayNumero.filter(num => num % 2 === 0);
    let impares = arrayNumero.filter(num => num % 2 !== 0);

    let arrayReorganizado = pares.concat(impares);

    console.log("Array reorganizado com pares primeiro:", arrayReorganizado);
    rl.close();
});