function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
let count = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === "a" || phrase[i] === "e" || phrase[i] === "i" || phrase[i] === "o" || phrase[i] === "u") {
            count++;
        }
    }
    return count;
}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
// Tu código:👇
let numero = dividendo;
while (numero % divisor !== 0) {
    numero++;
}
return numero;
}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
for ( let i=1; i <=100 ; i++) {  
    if(i===x)
    return `el numero x es ${x}`
    }
}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
let suma= 0
for (let i=0; i<=num;i++)
suma +=i
return suma;
}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
let decimal = 0;
for (let i = 0; i < num.length; i++) {
    let bit = parseInt(num[num.length - 1 - i]);
    decimal += bit * Math.pow(2, i);
}
return decimal;
}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
if (numero <=1)
return `${numero }no es primo `
for (let i =2; i <=  Math.sqrt(numero); i++)
if (numero % 2 === 0)
return `${numero}no es primo `
return `${numero} es primo `
}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
let cadenaInvertida = 'cadena';
for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
}
return cadenaInvertida;
}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}