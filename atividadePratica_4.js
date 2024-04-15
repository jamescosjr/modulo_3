const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Voce vai digitar a temperatura em qual escala ('C' para Celsius ou 'F' para Farenheit)? ", (escala) => {
    escala = String(escala);

    if(escala == 'F' || escala == 'f' || escala == 'Farenheit' || escala == 'farenheit' || escala == 'FARENHEIT'){
        rl.question("Qual a temperatura em Farenheit deseja converter para Celsius? ", (temperaturaFarenheit) => {
            temperaturaFarenheit = parseFloat(temperaturaFarenheit);

            temperaturaCelsius = (temperaturaFarenheit -32)/1.8;

            if(!isNaN(temperaturaFarenheit)){
                console.log("A temperatura equivalente em Celsius é " + temperaturaCelsius + '.');
            } else {
                console.log('Dados inválidos! Digite a temperatura em números')
            }
            rl.close();
        })
    } else if(escala == 'C' || escala == 'c' || escala == 'Celsius' || escala == 'celsius' || escala == 'CELSIUS'){
        rl.question("Qual a temperatura em Celsius deseja converter para Farenheit? ", (temperaturaCelsius) => {
            temperaturaCelsius = parseFloat(temperaturaCelsius);

            temperaturaFarenheit = temperaturaCelsius * 1.8 + 32;

            if(!isNaN(temperaturaCelsius)){
                console.log("A temperatura equivalente em Farenheit é " + temperaturaFarenheit + '.');
            } else {
                console.log('Dados inválidos! Digite a temperatura em números')
            }
            rl.close();
        })
    } else {
        console.log("Dados inválidos! Escolha 'C' para Celsius ou 'F' para Farenheit")

        rl.close();
    }
})