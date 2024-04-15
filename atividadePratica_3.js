const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número que deseja obter a tabuada: ', (numero) => {
    
    numero = parseFloat(numero);

    if(!isNaN(numero)){
        console.log('Tabuada de ' + numero);

        for(let i = 1; i<=10; i++){
            const resultado = numero*i;
            console.log(numero + ' x ' + i + ' = ' + resultado);
        }
    } else {
        console.log('Dado inválido, favor digitar um número.')

    }

    rl.close();
})