function Mostrar(lista) {
    console.log(' # Lista do estoque # ');
    for (let i = 0; i < lista.length; i++) {
        console.log(`${i + 1} - ${lista[i]}`);
    }
    
}

export { Mostrar }