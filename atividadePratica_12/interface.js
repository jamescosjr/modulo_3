const readline = require('readline');
const { adicionarLivro, buscarPorTitulo, exibirLivros } = require('./biblioteca');
const MENSAGENS = require('./constantes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log(MENSAGENS.MENU_PRINCIPAL);
    rl.question("Escolha uma opção: ", handleUserChoice);
}

function handleUserChoice(opcao) {
    switch (opcao) {
        case '1':
            adicionarNovoLivro();
            break;
        case '2':
            buscarLivro();
            break;
        case '3':
            exibirTodosLivros();
            break;
        case '4':
            console.log(MENSAGENS.SAINDO);
            rl.close();
            break;
        default:
            console.log(MENSAGENS.OPCAO_INVALIDA);
            mostrarMenu();
    }
}

function adicionarNovoLivro() {
    rl.question("Digite o título do livro: ", titulo => {
        rl.question("Digite o autor do livro: ", autor => {
            rl.question("Digite o nome da editora: ", editora => {
                adicionarLivro(titulo, autor, editora);
                console.log(MENSAGENS.LIVRO_ADICIONADO);
                mostrarMenu();
            });
        });
    });
}

function buscarLivro() {
    rl.question("Digite o título do livro que deseja buscar: ", titulo => {
        const livrosEncontrados = buscarPorTitulo(titulo);
        if (livrosEncontrados.length === 0) {
            console.log(MENSAGENS.NENHUM_LIVRO_ENCONTRADO);
        } else {
            console.log("Livro(s) encontrado(s):");
            livrosEncontrados.forEach((livro, index) => {
                console.log(`${index + 1}. Título: ${livro.titulo}, Autor: ${livro.autor}`);
            });
        }
        mostrarMenu();
    });
}

function exibirTodosLivros() {
    const livros = exibirLivros();
    if (livros.length === 0) {
        console.log(MENSAGENS.BIBLIOTECA_VAZIA);
    } else {
        console.log("Livros disponíveis na biblioteca:");
        livros.forEach((livro, index) => {
            console.log(`${index + 1}. Título: ${livro.titulo}, Autor: ${livro.autor}`);
        });
    }
    mostrarMenu();
}

module.exports = { mostrarMenu };