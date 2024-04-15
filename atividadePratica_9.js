const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lista = [];

rl.question("Digite os números da lista, separados por um espaço ' ': ", (entrada) => {
    
    const numerosLista = entrada.trim().split(" ").map(numeroLista => parseInt(numeroLista));

  
    const saoNumeros = numerosLista.every(numeroLista => !isNaN(numeroLista));

    if (saoNumeros) {
        
        lista = numerosLista;

        rl.question("Digite um número para verificar se está presente na lista predefinida: ", (numeroEntrada) => {
            const numero = parseInt(numeroEntrada);

            if (!isNaN(numero)) {
                if (lista.includes(numero)) {
                    console.log(`O número ${numero} está na lista.`);
                } else {
                    console.log(`O número ${numero} não está na lista.`);
                }
            } else {
                console.log("Dados inválidos! Digite números válidos.");
            }

            rl.close();
        });
    } else {
        console.log("Dados inválidos! Digite apensa números válidos.");
        rl.close();
    }
});