let usuarios = [];

function adicionarUsuario(nome, email, idade) {
    const idadeNum = parseFloat(idade);
    if (!isNaN(idadeNum) && idadeNum > 0) {
        usuarios.push({ nome, email, idade: idadeNum });
        console.log("Usuário adicionado com sucesso!");
    } else {
        console.log("Idade inválida. Por favor, digite um número positivo.");
    }
}

function buscarPorEmail(email) {
    return usuarios.find(usuario => usuario.email === email);
}

module.exports = { adicionarUsuario, buscarPorEmail };