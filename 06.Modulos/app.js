const { suma, resta, multiplicacion, division } = require('./calculadora');

const { PI, calcularAreaCirculo } = require('./geometria');

const radio = 5;
const area = calcularAreaCirculo(radio);
console.log('El área del círculo con radio', radio, 'es:', area);

const datosPersonales = require('./datosPersonales');

console.log('Nombre:', datosPersonales.nombre);
console.log('Edad:', datosPersonales.edad);
console.log('Ciudad:', datosPersonales.ciudad);