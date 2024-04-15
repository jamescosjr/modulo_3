const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quantos elementos da sequência de Fibonacci você quer? ', (termo) => {

    n = parseInt(termo);

    if(!isNaN(n) && n > 0){

        let fibonacci = new Array(n-1);

        fibonacci[0] = 1;
        fibonacci[1] = 1;

        for(let i = 2; i<n; i++){
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2] 
        }

        console.log('Os ' + n + ' primeiros termos da sequência de Fibonacci são: ' + fibonacci);
        
    }
    rl.close();

})