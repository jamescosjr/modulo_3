const rl = require('./input');
const { adicionarFuncionario, mostrarMaiorSalario } = require('./funcionarios');

function perguntaCadastro() {
    rl.question('Deseja cadastrar um novo funcionário (SIM/NÃO)? ', (opcaoCadastro) => {
        if (opcaoCadastro.toLowerCase() === 'sim') {
            rl.question("Digite o nome do funcionário: ", (nomeFuncionario) => {
                rl.question("Digite o cargo do funcionário: ", (cargoFuncionario) => {
                    rl.question("Digite o salário do funcionário: ", (salarioFuncionario) => {
                        adicionarFuncionario(nomeFuncionario, cargoFuncionario, salarioFuncionario);
                        perguntaCadastro();
                    });
                });
            });
        } else if (opcaoCadastro.toLowerCase() === 'não') {
            mostrarMaiorSalario();
            rl.close();
        } else {
            console.log("Opção inválida! Digite 'sim' ou 'não'.");
            perguntaCadastro();
        }
    });
}

perguntaCadastro();