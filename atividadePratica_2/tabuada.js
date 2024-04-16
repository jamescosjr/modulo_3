function fazerTabuada(numero) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

module.exports = { fazerTabuada };