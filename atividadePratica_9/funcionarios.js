let funcionarios = [];

function adicionarFuncionario(nomeFuncionario, cargoFuncionario, salarioFuncionario) {
    const salario = parseFloat(salarioFuncionario);
    if (!isNaN(salario) && salario > 0) {
        funcionarios.push({
            nome: nomeFuncionario,
            cargo: cargoFuncionario,
            salario: salario
        });
        console.log("Funcionário adicionado com sucesso!");
    } else {
        console.log("Salário inválido. Por favor, digite um número positivo.");
    }
}

function mostrarMaiorSalario() {
    if (funcionarios.length > 0) {
        let maiorSalario = funcionarios.reduce((max, funcionario) => funcionario.salario > max.salario ? funcionario : max, funcionarios[0]);
        console.log(`Funcionário com maior salário: ${maiorSalario.nome}, Cargo: ${maiorSalario.cargo}, Salário: R$${maiorSalario.salario.toFixed(2)}`);
    } else {
        console.log("Nenhum funcionário cadastrado.");
    }
}

module.exports = { adicionarFuncionario, mostrarMaiorSalario };