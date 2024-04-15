const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número da soma: ', (num1) => {
    rl.question('Digite o segundo número da soma: ', (num2) => {

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (!isNaN(num1) && !isNaN(num2)){
            const soma = num1 + num2;
            console.log('A soma dos dois números é '+ soma + '.');
        } else {
            console.log('Dados inválidos! Digite apenas números.')
        }

        rl.close();
    })
})