"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLista = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function addLista(addLista) {
    var posicao = addLista.length;
    var item = prompt('Insira o novo item da lista: ');
    addLista[posicao] = item;
    console.log("\n".concat(item, " foi adicionado!"));
}
exports.addLista = addLista;
