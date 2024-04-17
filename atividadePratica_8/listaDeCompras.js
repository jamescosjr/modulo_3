const rl = require('./input');
const { mostrarMenu } = require('./menu');

let listaDeCompras = new Map();

function adicionarItem() {
    rl.question("Digite o nome do item: ", (nomeItem) => {
        rl.question("Digite o preço do item: ", (precoItem) => {
            const preco = parseFloat(precoItem);
            if (!isNaN(preco) && preco >= 0) {
                listaDeCompras.set(nomeItem, { preco: preco, comprado: false });
                console.log(`Item "${nomeItem}" adicionado à lista.`);
            } else {
                console.log("Preço inválido. Digite um valor numérico positivo.");
            }
            iniciarMenu();
        });
    });
}

function removerItem() {
    rl.question("Digite o nome do item que deseja remover: ", (nomeItem) => {
        if (listaDeCompras.has(nomeItem)) {
            listaDeCompras.delete(nomeItem);
            console.log(`Item "${nomeItem}" removido da lista.`);
        } else {
            console.log(`O item "${nomeItem}" não está na lista.`);
        }
        iniciarMenu();
    });
}

function marcarItemComoComprado() {
    rl.question("Digite o nome do item que deseja marcar como comprado: ", (nomeItem) => {
        if (listaDeCompras.has(nomeItem)) {
            const item = listaDeCompras.get(nomeItem);
            item.comprado = true;
            console.log(`Item "${nomeItem}" marcado como comprado.`);
        } else {
            console.log(`O item "${nomeItem}" não está na lista.`);
        }
        iniciarMenu();
    });
}

function exibirListaDeCompras() {
    console.log("\n=============== Lista de Compras ===============");
    listaDeCompras.forEach((item, nomeItem) => {
        const status = item.comprado ? " (comprado)" : "";
        console.log(`${nomeItem}: R$ ${item.preco.toFixed(2)}${status}`);
    });
    console.log("===============================================");
    iniciarMenu();
}

function iniciarMenu() {
    mostrarMenu();
}

module.exports = { adicionarItem, removerItem, marcarItemComoComprado, exibirListaDeCompras };