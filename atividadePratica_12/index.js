const readline = require('readline');
const { adicionarLivro, buscarPorTitulo, exibirLivros } = require('./biblioteca');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n=============== Bem Vindos à Biblioteca ===============");
    console.log("1. Adicionar livro");
    console.log("2. Buscar livro por título");
    console.log("3. Exibir todos os livros da biblioteca");
    console.log("4. Sair\n");

    rl.question("Escolha uma opção: ", (opcao) => {
        if (opcao === '1') {
            adicionarNovoLivro();
        } else if (opcao === '2') {
            buscarLivro();
        } else if (opcao === '3') {
            exibirTodosLivros();
        } else if (opcao === '4') {
            rl.close();
        } else {
            console.log("Opção inválida. Escolha uma opção válida.\n");
            mostrarMenu();
        }
    });
}

function adicionarNovoLivro() {
    rl.question("Digite o título do livro: ", (titulo) => {
        rl.question("Digite o autor do livro: ", (autor) => {
            rl.question("Digite o nome da editora: ", (editora) => {
                adicionarLivro(titulo, autor, editora);
                console.log("Livro adicionado com sucesso!\n");
                mostrarMenu();
            });
        });
    });
}

function buscarLivro() {
    rl.question("Digite o título do livro que deseja buscar: ", (titulo) => {
        const livrosEncontrados = buscarPorTitulo(titulo);
        if (livrosEncontrados.length === 0) {
            console.log("Nenhum livro encontrado com esse título.\n");
        } else {
            console.log("Livro(s) encontrado(s):");
            livrosEncontrados.forEach((livro, index) => {
                console.log((index + 1) + ". Título: " + livro.titulo + ", Autor: " + livro.autor + ", Ano de Publicação: " + livro.anoPublicacao);
            });
        }
        mostrarMenu();
    });
}

function exibirTodosLivros() {
    const livros = exibirLivros();
    if (livros.length === 0) {
        console.log("A biblioteca está vazia.\n");
    } else {
        console.log("Livros disponíveis na biblioteca:");
        livros.forEach((livro, index) => {
            console.log((index + 1) + ". Título: " + livro.titulo + ", Autor: " + livro.autor + ", Ano de Publicação: " + livro.anoPublicacao);
        });
    }
    mostrarMenu();
}

mostrarMenu();