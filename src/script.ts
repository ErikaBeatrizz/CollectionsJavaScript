import { Estoque } from "./Estoque";
import { mostraMenu } from "./Menu";
import PromptSync = require('prompt-sync');
import { addLista } from "./Add";
import { Mostrar } from "./Mostrar";
import { Excluir } from "./Excluir";

const prompt = PromptSync()
let lista : string [] = []
let opcao = 0

do {
    mostraMenu();
    opcao = Number(prompt('Escolha uma opção: '))

    switch (opcao) {
        case 1:
            addLista(lista);
            break;
        case 2:
            Excluir(lista);
            break
        case 3:
            Mostrar(lista)
            Excluir(lista)
            addLista(lista)
            break
        case 4:
            Mostrar(lista);
            break
        case 5:
            console.log('Erro. O programa será encerrado!');
            
        default:
            console.log('Opção inválida. Digite Novamente.')
            break;
    }
    prompt('Pressione ENTER para continuar...')
}while (opcao != 5);