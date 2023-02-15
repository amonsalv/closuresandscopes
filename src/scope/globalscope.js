//Scope: Este nos determina la accesibilidad de variables, objetos y funciones desde diferentes partes del codigo

// Variables

var a; //declarando la variable

var b = "b"; //declaramos / asignamos al mismo tiempo

b = 'bb'; //reasignacion 
var a = 'aa'; //redeclaracion

//Global scope
//cualquier variable en el documento pasara a ser variable global

//esto nos dice que las variable deben de estar declaradas detro del documento, pero no detro del bloque para que enten dentro del Globla Scope y puedan ser ultilizadas dentro de otros bloques, ej:

var fruit = 'Apple'; //variable asdignada en el Global scope

//leyendo la variable desde dentro de la funcion 
function bestFruit() {
    console.log(fruit);
}

bestFruit(); //llamando la funcion

//cuidado al momento de declarar
function countries() {
    country = 'colombia';// no se define el scope y se toma como global
    console.log(country);
}

//por lo tanto se imprime 2 veces la palabra colombia
countries();
console.log(country);

