let biblioteca = [];

function adicionarLivro(titulo, autor, editora) {
    let livro = {
        titulo: titulo,
        autor: autor,
        editora: editora
    };
    biblioteca.push(livro);
}

function buscarPorTitulo(titulo) {
    let livrosBuscados = [];
    for (let livro of biblioteca) {
        if (livro.titulo.toLowerCase() === titulo.toLowerCase()) {
            livrosBuscados.push(livro);
        }
    }
    return livrosBuscados;
}

function exibirLivros() {
    return biblioteca;
}

module.exports = { adicionarLivro, buscarPorTitulo, exibirLivros };
