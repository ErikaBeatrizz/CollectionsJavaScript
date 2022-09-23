import { Mostrar } from './Mostrar';
import PromptSync = require('prompt-sync');

const prompt = PromptSync()

function Excluir (lista) {
    Mostrar
    const positionText = prompt('Qual elemento quer remover?: ')
    const position = Number(positionText) - 1
    lista.splice(position, 1);
}

export { Excluir }