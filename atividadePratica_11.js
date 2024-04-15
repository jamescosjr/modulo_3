const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let alunos = [];

function cadastrarAluno() {
    let aluno = {};

    rl.question("Digite o nome do aluno: ", (nome) => {
        aluno.nome = nome;
        rl.question("Digite a idade do aluno: ", (idade) => {
            idade = parseInt(idade);
            if (isNaN(idade)) {
                console.log("Por favor, insira um número válido para a idade.");
                novoCadastro();
                return;
            }

            aluno.idade = idade;
            rl.question("Digite o curso do aluno: ", (curso) => {
                aluno.curso = curso;

                alunos.push(aluno);

                rl.question("Deseja cadastrar outro aluno? (sim/não): ", (resposta) => {
                    if (resposta.toLowerCase() === "sim") {
                        cadastrarAluno();
                    } else if (resposta.toLowerCase() === "não") {
                        console.log("Lista de alunos cadastrados:");
                        alunos.forEach((aluno, index) => {
                            console.log((index + 1) + '. Nome: ' + aluno.nome + ', Idade: ' + aluno.idade + ', Curso: ' + aluno.curso);
                        });
                        rl.close();
                    } else {
                        console.log('Resposta inválida! Responda "sim" ou "não".');
                        novoCadastro();
                    }
                });
            });
        });
    });
}

function novoCadastro() {
    rl.question("Deseja cadastrar um novo aluno? (sim/não): ", (resposta) => {
        if (resposta.toLowerCase() === "sim") {
            cadastrarAluno();
        } else if (resposta.toLowerCase() === "não") {
            console.log("Lista de alunos cadastrados:");
            alunos.forEach((aluno, index) => {
                console.log((index + 1) + '. Nome: ' + aluno.nome + ', Idade: ' + aluno.idade + ', Curso: ' + aluno.curso);
            });
            rl.close();
        } else {
            console.log('Resposta inválida! Responda "sim" ou "não".');
            novoCadastro();
        }
    });
}

cadastrarAluno();