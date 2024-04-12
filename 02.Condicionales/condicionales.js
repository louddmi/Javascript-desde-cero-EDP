// Ejercicio de Ejemplo:
/* TITULO - NO MODIFICAR*/ document.write('<div class="titulo"><p>Ejercicio de Ejemplo - Resultado:</p></div>')
// En la Escuela de Programación tienen como condicion para poder inscribirse a los cursos, la persona tenga 18 años o más.
// Pidele al usuario que ingrese su edad ( usando prompt() ), y en caso que tenga 18 años o más imprima un mensaje indicandole que puede inscribirse.
// caso contrario se le indica que no puede inscribirse y la razón.
// Tu codigo 👇:
let edad = prompt("Ingresa tu edad:");

if (edad >= 18) {
    console.log("¡Puedes inscribirte en los cursos!");
} else {
    console.log("Lo siento, no puedes inscribirte en los cursos porque eres menor de 18 años.");
}
//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 1 - Calificación | Resultado:</p></div>')
// Ejercicio N° 1:
// Escribe un programa que solicite al usuario ingresar una calificación del 0 al 100 y luego muestre un mensaje según la siguiente escala:
// Calificación de 90 o más: "Excelente"
// Calificación entre 70 y 89: "Bueno"
// Calificación entre 60 y 69: "Suficiente"
// Calificación menor a 60: "Insuficiente"
// Tu codigo 👇:
let nota = parseInt(prompt("Ingresa una calificacion"))
if (nota >= 90) 
console.log("Excelente")
else if (nota >=70 && nota <=89)
console.log("Bueno")
else if (nota >=60 && nota <= 69)
console.log("Suficiente")
else 
console.log("Insifuciente") 


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 2 - Par o Impar | Resultado:</p></div>')
// Ejercicio N° 2:
// Escribe un programa que solicite al usuario ingresar un número entero y luego determine si es par o impar.
// Tu codigo 👇:
let numero = parseInt(prompt("Ingresa un número entero:"));

if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 3 - Día de la Semana | Resultado:</p></div>')
// Ejercicio N° 3:
// Escribe un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana, y luego imprima el nombre del día correspondiente.
// Por ejemplo, si el usuario ingresa 1, el programa debe imprimir "Lunes".
// Tu codigo 👇:
let dia = parseInt(prompt("Ingrese un numero del 1 al 7"))
switch (numero) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Número inválido. Ingresa un número del 1 al 7.");
    }

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 4 - Antigüedad laboral | Resultado:</p></div>')
// Ejercicio N° 4:
// Escribe un programa que solicite al usuario ingresar su antigüedad en años en una empresa y su salario actual.
// Si la antigüedad es mayor o igual a 5 años, y el salario es menor a $500,
// el programa debe imprimir un mensaje que indique que el empleado es elegible para una bonificación del 10% de su salario actual.
// Tu codigo 👇:
let antiguedad = parseInt(prompt("Ingresa tu antigüedad en años en la empresa:"));
let salario = parseFloat(prompt("Ingresa tu salario actual:"));

if (antiguedad >= 5 && salario < 500) {
    let bonificacion = salario * 0.1;
    console.log("¡Eres elegible para una bonificación del 10% de tu salario actual!");
    console.log("Monto de la bonificación: $" + bonificacion.toFixed(2));
} else {
    console.log("No eres elegible para la bonificación.");
}


//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 5 - Rango de edad | Resultado:</p></div>')
// Ejercicio N° 5:
// Escribe un programa que solicite al usuario ingresar su edad y luego determine en qué rango de edad se encuentra:
// Menor de 18 años: "Menor de edad"
// Entre 18 y 65 años: "Adulto"
// Mayor de 65 años: "Senior"
// Tu codigo 👇:
let año = parseInt(prompt("Ingrese su edad"))
if (año < 18)
console.log("Es menor de edad")
else if (año >=18 && año <= 65)
console.log("Es adulto")
else 
console.log("Es senior")



//_________________________________________


// 👇👇 NO MODIFICAR 👇👇

const footer = `

<footer>
        <a href="https://github.com/AvLeo/Javascript-desde-cero-EDP" target="_blank">REPO GITHUB</a>
        <a href="https://leo-a.notion.site/JavaScript-8243598cde1e4cc5aea0fc1eeb7a090f?pvs=74" target="_blank">Notion</a>
</footer>


`

document.write(footer)