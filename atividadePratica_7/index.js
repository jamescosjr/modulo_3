const { pedirNumero } = require('./input');
const { definirFibonacci } = require('./fibonacci');

function mostrarFibonacci(n) {
    if (!isNaN(n) && n > 0) {
        const fibonacci = definirFibonacci(n);
        console.log(`Os ${n} primeiros termos da sequência de Fibonacci são: ${fibonacci.join(', ')}`);
    } else {
        console.log('Número inválido. Por favor, digite um número inteiro positivo.');
    }
}

pedirNumero(mostrarFibonacci);