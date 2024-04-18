const readline = require('readline');
const { adicionarAluno, buscarAlunoPorChave } = require('./alunos');
const MENSAGENS = require('./constantes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log(MENSAGENS.MENU_PRINCIPAL);
    rl.question("Escolha uma opção: ", escolhaMenu);
}

const acoesMenu = {
    '1': adicionarNovoAluno,
    '2': buscarAluno,
    '3': sair
};

function escolhaMenu(opcao) {
    const acao = acoesMenu[opcao];
    if (acao) {
        acao();
    } else {
        console.log(MENSAGENS.OPCAO_INVALIDA);
        mostrarMenu();
    }
}

function buscarAlunoPorCriterio(criterio, valor) {
    return buscarAlunoPorChave(criterio, valor);
}

function adicionarNovoAluno() {
    rl.question("Digite o nome do aluno: ", nome => {
        rl.question("Digite a idade do aluno: ", idade => {
            rl.question("Digite o curso do aluno: ", curso => {
                rl.question("Digite a média do aluno: ", media => {
                    adicionarAluno(nome, idade, curso, parseFloat(media));
                    console.log(MENSAGENS.ALUNO_ADICIONADO);
                    mostrarMenu();
                });
            });
        });
    });
}

function buscarAluno() {
    rl.question("Digite o critério de busca (nome, idade, curso, media): ", criterio => {
        rl.question(`Digite o ${criterio} para busca: `, valor => {
            const alunosEncontrados = buscarAlunoPorCriterio(criterio, valor);
            if (alunosEncontrados.length === 0) {
                console.log(MENSAGENS.NENHUM_ALUNO_ENCONTRADO);
            } else {
                console.log("Aluno(s) encontrado(s):");
                alunosEncontrados.forEach(aluno => {
                    console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Média: ${aluno.media}`);
                });
            }
            mostrarMenu();
        });
    });
}

function sair() {
    console.log(MENSAGENS.SAINDO);
    rl.close();
}

module.exports = { mostrarMenu };