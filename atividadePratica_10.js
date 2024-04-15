const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite os números que deseja obter a média separados por um espaço " ": ', (entrada) => {
    const numerosLista = entrada.trim().split(" ").map(numero => parseInt(numero, 10));
  
    const saoNumeros = numerosLista.every(numero => !isNaN(numero));

    if (saoNumeros) {
        
        const soma = numerosLista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        const media = soma / numerosLista.length;
        console.log('A média é: ' + media + '!');
    } else {
        console.log('Dados inválidos! Digite números válidos separados por espaço.');
    }

    rl.close();
});