"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Excluir = void 0;
var Mostrar_1 = require("./Mostrar");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function Excluir(lista) {
    Mostrar_1.Mostrar;
    var positionText = prompt('Qual elemento quer remover?: ');
    var position = Number(positionText) - 1;
    lista.splice(position, 1);
}
exports.Excluir = Excluir;
