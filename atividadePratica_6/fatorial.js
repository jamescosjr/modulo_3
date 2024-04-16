function calcularFatorial(numero) {
    if (numero === 0) {
        return 1;
    }
    let fatorial = 1;
    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
    }
    return fatorial;
}

module.exports = { calcularFatorial };