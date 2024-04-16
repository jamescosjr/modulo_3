const { pedirNumero } = require('./input');
const { calcularFatorial } = require('./fatorial');

function mostrarFatorial(numero) {
    if (!isNaN(numero) && numero >= 0) {
        const fatorial = calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é: ${fatorial}.`);
    } else {
        console.log('Dados inválidos! Digite um número inteiro não negativo.');
    }
}

pedirNumero(mostrarFatorial);