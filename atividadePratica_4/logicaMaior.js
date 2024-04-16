function verificarMaior(num1, num2, num3) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let maior;

        if (num1 > num2 && num1 > num3) {
            maior = num1;
        } else if (num2 > num3) {
            maior = num2;
        } else {
            maior = num3;
        }

        return maior;
    } else {
        throw new Error('Dados inválidos! Digite números válidos.');
    }
}

module.exports = { verificarMaior };