import PromptSync = require('prompt-sync');

const prompt = PromptSync()

function addLista(addLista) {
    const posicao = addLista.length;
    const item = prompt('Insira o novo item da lista: ');
    addLista[posicao] = item;
    console.log(`\n${item} foi adicionado!`);
}

export { addLista }