const readline = require('readline');
const { adicionarAluno, buscarChaveEmAlunos } = require('./alunos');
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
    '2': buscarChaveAluno,
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

function adicionarNovoAluno() {
    rl.question("Digite o nome do aluno: ", nome => {
        rl.question("Digite a idade do aluno: ", idade => {
            rl.question("Digite o curso do aluno: ", curso => {
                rl.question("Digite a média do aluno: ", media => {
                    const solicitarDetalhes = () => {
                        rl.question("Digite detalhes adicionais em formato JSON (ex: {\"contato\": {\"email\": \"exemplo@dominio.com\"}}): ", detalhes => {
                            try {
                                const detalhesObj = JSON.parse(detalhes);
                                adicionarAluno(nome, idade, curso, parseFloat(media), detalhesObj);
                                console.log(MENSAGENS.ALUNO_ADICIONADO);
                                mostrarMenu();
                            } catch (e) {
                                console.log("JSON inválido. Por favor, digite um JSON válido.");
                                solicitarDetalhes(); // Chama a função novamente para pedir os detalhes corretos
                            }
                        });
                    };
                    solicitarDetalhes();
                });
            });
        });
    });
}

function buscarChaveAluno() {
    rl.question("Digite a chave de busca: ", chave => {
        const alunosEncontrados = buscarChaveEmAlunos(chave);
        if (alunosEncontrados.length === 0) {
            console.log(MENSAGENS.NENHUM_ALUNO_ENCONTRADO);
        } else {
            console.log("Aluno(s) encontrado(s):");
            alunosEncontrados.forEach(aluno => {
                console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Média: ${aluno.media}`);
                console.log(`Detalhes: ${JSON.stringify(aluno.detalhes)}`);
            });
        }
        mostrarMenu();
    });
}

function sair() {
    console.log(MENSAGENS.SAINDO);
    rl.close();
}

module.exports = { mostrarMenu };