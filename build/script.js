"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("./Menu");
var PromptSync = require("prompt-sync");
var Add_1 = require("./Add");
var Mostrar_1 = require("./Mostrar");
var Excluir_1 = require("./Excluir");
var prompt = PromptSync();
var lista = [];
var opcao = 0;
do {
    (0, Menu_1.mostraMenu)();
    opcao = Number(prompt('Escolha uma opção: '));
    switch (opcao) {
        case 1:
            (0, Add_1.addLista)(lista);
            break;
        case 2:
            (0, Excluir_1.Excluir)(lista);
            break;
        case 3:
            (0, Mostrar_1.Mostrar)(lista);
            (0, Excluir_1.Excluir)(lista);
            (0, Add_1.addLista)(lista);
            break;
        case 4:
            (0, Mostrar_1.Mostrar)(lista);
            break;
        case 5:
            console.log('Erro. O programa será encerrado!');
        default:
            console.log('Opção inválida. Digite Novamente.');
            break;
    }
    prompt('Pressione ENTER para continuar...');
} while (opcao != 5);
