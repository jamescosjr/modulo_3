const storage = require('./storage');

let biblioteca = storage.obterDado('biblioteca') || new Map();

function adicionarLivro(titulo, autor, editora) {
    let livro = { titulo, autor, editora };
    const primeiraLetra = titulo.charAt(0).toLowerCase();
    if (!biblioteca.has(primeiraLetra)) {
        biblioteca.set(primeiraLetra, []);
    }
    biblioteca.get(primeiraLetra).push(livro);
    storage.adicionarDado('biblioteca', biblioteca);
}

function buscarPorTitulo(titulo) {
    const primeiraLetra = titulo.charAt(0).toLowerCase();
    const livros = biblioteca.get(primeiraLetra) || [];
    return livros.filter(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
}

function exibirLivros() {
    return Array.from(biblioteca.values()).flat();
}

module.exports = { adicionarLivro, buscarPorTitulo, exibirLivros };