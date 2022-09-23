"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mostrar = void 0;
function Mostrar(lista) {
    console.log(' # Lista do estoque # ');
    for (var i = 0; i < lista.length; i++) {
        console.log("".concat(i + 1, " - ").concat(lista[i]));
    }
}
exports.Mostrar = Mostrar;
