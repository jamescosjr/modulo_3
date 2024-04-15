const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro valor: ', (num1) => {
    rl.question('Digite o segundo valor: ', (num2) => {
        rl.question('Digite o terceiro valor: ', (num3) => {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            num3 = parseFloat(num3);

            if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
                if(num1 > num2 && num1 > num3){
                    maior = num1;
                }
                else if (num2 > num3){
                    maior = num2;
                }
                else {
                    maior = num3;
                }
                
                console.log('O maior valor é ' + maior + '!')
            } else{
                console.log('Dados inválidos! Digite números válidos.')
            }

            rl.close();

        })
    })
})