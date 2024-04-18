const readline = require('readline');
const { adicionarUsuario, buscarPorEmail } = require('./usuarios');
const MENSAGENS = require('./constantes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log(MENSAGENS.MENU_PRINCIPAL);
    rl.question("Escolha uma opção: ", escolhaUsuario);
}

const acoesMenu = {
    '1': adicionarNovoUsuario,
    '2': buscarUsuarioPorEmail,
    '3': sair
};

function escolhaUsuario(opcao) {
    const acao = acoesMenu[opcao];
    if (acao) {
        acao();
    } else {
        console.log(MENSAGENS.OPCAO_INVALIDA);
        mostrarMenu();
    }
}

function adicionarNovoUsuario() {
    rl.question("Digite o nome do usuário: ", nome => {
        rl.question("Digite o email do usuário: ", email => {
            rl.question("Digite a idade do usuário: ", idade => {
                adicionarUsuario(nome, email, idade);
                console.log(MENSAGENS.USUARIO_ADICIONADO);
                mostrarMenu();
            });
        });
    });
}

function buscarUsuarioPorEmail() {
    rl.question("Digite o email do usuário que deseja buscar: ", email => {
        const usuarioEncontrado = buscarPorEmail(email);
        if (!usuarioEncontrado) {
            console.log(MENSAGENS.NENHUM_USUARIO_ENCONTRADO);
        } else {
            console.log("Usuário encontrado:");
            console.log(`Nome: ${usuarioEncontrado.nome}, Email: ${usuarioEncontrado.email}, Idade: ${usuarioEncontrado.idade}`);
        }
        mostrarMenu();
    });
}

function sair() {
    console.log(MENSAGENS.SAINDO);
    rl.close();
}

module.exports = { mostrarMenu };