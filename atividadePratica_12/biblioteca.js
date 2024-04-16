let biblioteca = [];

function adicionarLivro(titulo, autor, editora) {
    let livro = { titulo, autor, editora };
    biblioteca.push(livro);
}

function buscarPorTitulo(titulo) {
    return biblioteca.filter(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
}

function exibirLivros() {
    return biblioteca;
}

module.exports = { adicionarLivro, buscarPorTitulo, exibirLivros };