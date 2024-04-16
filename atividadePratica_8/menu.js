const readline = require('readline');
const { adicionarItem, removerItem, marcarItemComoComprado, exibirListaDeCompras } = require('./listaDeCompras');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MENU_MESSAGE = `
=============== Lista de Compras ===============
1. Adicionar item
2. Remover item
3. Marcar item como comprado
4. Exibir lista de compras
5. Sair
===============================================
`;

const opcoesMenu = {
    '1': adicionarItem,
    '2': removerItem,
    '3': marcarItemComoComprado,
    '4': exibirListaDeCompras,
    '5': () => rl.close()
};

function mostrarMenu() {
    console.log(MENU_MESSAGE);

    rl.question("Escolha uma opção: ", (opcao) => {
        const opcaoSelecionada = opcoesMenu[opcao.trim()]; // Remover espaços em branco
        if (opcaoSelecionada) {
            opcaoSelecionada();
        } else {
            console.log("Opção inválida. Escolha uma opção válida.\n");
            mostrarMenu();
        }
    });
}

module.exports = { mostrarMenu };