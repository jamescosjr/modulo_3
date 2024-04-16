const readline = require('readline');
const { adicao, subtracao, multiplicacao, divisao } = require('./operacoes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function iniciarCalculadora() {
    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Escolha uma operação entre +, -, *, /: ', (operacao) => {
            operacao = operacao.trim();
            rl.question('Digite o segundo número: ', (num2) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);

                if (operacao === '+') {
                    const resultado = adicao(num1, num2);
                    console.log(`O resultado da operação é: ${resultado}`);
                } else if (operacao === '-') {
                    const resultado = subtracao(num1, num2);
                    console.log(`O resultado da operação é: ${resultado}`);
                } else if (operacao === '*') {
                    const resultado = multiplicacao(num1, num2);
                    console.log(`O resultado da operação é: ${resultado}`);
                } else if (operacao === '/') {
                    if (num2 === 0) {
                        console.log('O denominador não pode ser 0.');
                    } else {
                        const resultado = divisao(num1, num2);
                        console.log(`O resultado da operação é: ${resultado}`);
                    }
                } else {
                    console.log('Operação inválida. Escolha entre +, -, *, /.');
                }

                rl.close();
            });
        });
    });
}

module.exports = { iniciarCalculadora };