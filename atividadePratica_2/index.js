const { fazerTabuada } = require('./tabuada');
const { pedirNumero } = require('./input');

pedirNumero((numero) => {
    fazerTabuada(numero);
});