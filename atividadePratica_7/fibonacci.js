function definirFibonacci(n) {
    if (!isNaN(n) && n > 0) {
        let fibonacci = new Array(n);

        fibonacci[0] = 1;
        fibonacci[1] = 1;

        for (let i = 2; i < n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }

        return fibonacci;
    } else {
        return [];
    }
}

module.exports = { definirFibonacci };