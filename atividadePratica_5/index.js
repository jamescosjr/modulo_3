const { pedirNumero } = require('./input');
const { numeroPrimo } = require('./primo');

pedirNumero((numero) => {
    if (!isNaN(numero)) {
        const primo = numeroPrimo(numero);
        if (primo) {
            console.log(numero + ` é um número primo.`);
        } else {
            console.log(numero + ` não é um número primo.`);
        }
    } else {
        console.log("Entrada inválida. Por favor, digite um número válido.");
    }
});