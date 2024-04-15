const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Escolha uma operação entre +, -, *, /: ', (operacao) => {
        rl.question('Digite o segundo número: ', (num2) => {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            operacao = String(operacao);

            if (operacao === '+'){

                if (!isNaN(num1) && !isNaN(num2)){
                    const soma = num1 + num2;
                    console.log('A soma dos dois números é '+ soma + '.');
                } else {
                    console.log('Dados inválidos! Digite apenas números ou a operação desejada.')
                }

            } else if(operacao === '-'){

                if (!isNaN(num1) && !isNaN(num2)){
                    const subtracao = num1 - num2;
                    console.log('A subtração dos dois números é '+ subtracao + '.');
                } else {
                    console.log('Dados inválidos! Digite apenas números ou a operação desejada.')
                }

            } else if(operacao === '*'){

                if (!isNaN(num1) && !isNaN(num2)){
                    const multiplicacao = num1 * num2;
                    console.log('A multiplicação dos dois números é '+ multiplicacao + '.');
                } else {
                    console.log('Dados inválidos! Digite apenas números ou a operação desejada.')
                }

            } else if(operacao === '/'){

                if (!isNaN(num1) && !isNaN(num2)){
                    const divisao = num1 / num2;

                    if(num2 !== 0){

                        console.log('A divisão dos dois números é '+ divisao + '.');
                        } else {
                        console.log('O denominador não pode ser 0.');
                        }} else {
                            console.log('Dados inválidos! Digite apenas números ou a operação desejada.')
                        }
            }
        rl.close();

        })
    })
})