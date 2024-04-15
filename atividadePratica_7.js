const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número que deseja o fatorial: ', (numero) => {

    numero = parseInt(numero);

    if(!isNaN(numero) && numero >= 0){
        if(numero == 0){
            fatorial = 1;
        } else{
            fatorial = 1;
            for(let i = numero; i>=1; i--){
                fatorial = fatorial*i;
            }
        }

        console.log('O fatorial de ' + numero +' é: ' + fatorial + '.')

    } else{
        
        console.log('Dados inválidos! Digite um número inteiro não negativo.')
    }

    rl.close();

})