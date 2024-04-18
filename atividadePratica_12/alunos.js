let alunos = [];

function adicionarAluno(nome, idade, curso, media) {
    alunos.push({ nome, idade, curso, media });
    console.log("Aluno adicionado com sucesso!");
}

function buscarAlunoPorChave(chave, valor) {
    return alunos.filter(aluno => aluno[chave] && aluno[chave].toString().toLowerCase() === valor.toLowerCase());
}

module.exports = { adicionarAluno, buscarAlunoPorChave };
