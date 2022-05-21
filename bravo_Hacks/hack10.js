//Agregar mi alias despues del item 500

let lista = [100,200,300,400,500,600,700];
let alias="qux";
let alias2="thud";

let numero=lista.pop();
let numero2=lista.pop();

lista.push(alias,alias2,numero2,numero);

console.log(lista);

