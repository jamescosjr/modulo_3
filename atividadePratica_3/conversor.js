const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function converterTemperatura() {
    rl.question("Voce vai digitar a temperatura em qual escala ('C' para Celsius ou 'F' para Farenheit)? ", (escala) => {
        escala = String(escala);

        if (escala.toLowerCase() === 'f') {
            converterFarenheitParaCelsius();
        } else if (escala.toLowerCase() === 'c') {
            converterCelsiusParaFarenheit();
        } else {
            console.log("Dados inválidos! Escolha 'C' para Celsius ou 'F' para Farenheit");
            rl.close();
        }
    });
}

function converterFarenheitParaCelsius() {
    rl.question("Qual a temperatura em Farenheit deseja converter para Celsius? ", (temperaturaFarenheit) => {
        temperaturaFarenheit = parseFloat(temperaturaFarenheit);

        if (!isNaN(temperaturaFarenheit)) {
            const temperaturaCelsius = (temperaturaFarenheit - 32) / 1.8;
            console.log("A temperatura equivalente em Celsius é " + temperaturaCelsius + '.');
        } else {
            console.log('Dados inválidos! Digite a temperatura em números');
        }
        rl.close();
    });
}

function converterCelsiusParaFarenheit() {
    rl.question("Qual a temperatura em Celsius deseja converter para Farenheit? ", (temperaturaCelsius) => {
        temperaturaCelsius = parseFloat(temperaturaCelsius);

        if (!isNaN(temperaturaCelsius)) {
            const temperaturaFarenheit = temperaturaCelsius * 1.8 + 32;
            console.log("A temperatura equivalente em Farenheit é " + temperaturaFarenheit + '.');
        } else {
            console.log('Dados inválidos! Digite a temperatura em números');
        }
        rl.close();
    });
}

module.exports = { converterTemperatura };