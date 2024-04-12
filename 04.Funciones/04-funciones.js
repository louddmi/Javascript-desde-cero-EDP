/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:

const bienvenida = function(nombre, apellido) {
    return "Bienvenido " + nombre + " " + apellido;
}


/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:
const calc = function(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error: división por cero';
            }
        default:
            return 'Operador no válido';
    }
}


/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:

const temp = function (max, min, porcentajeLluvia) {
    let mensaje = "";
    
    if (max < 15) {
        mensaje = "Es recomendable salir con abrigo";
    } else if (max < 26 && min > 17) {
        mensaje = "El día está lindo";
    } else if (min > 25) {
        mensaje = "El día estará caluroso";
    }

    if (porcentajeLluvia > 50) {
        mensaje += ", recomendable un paraguas";
    }

    return mensaje;
}


/**********************************************************************************/

// Crea una función que reciba una contraseña, esta función tiene que determinar si contiene al menos 8 caracteres la contraseña.
// Si la contraseña contiene 8 caracteres, devolver "La contraseña es segura", en caso contrario devolver "La contraseña es insegura"
// IMPORTANTE -> la funcion debe llamarse 'checkPassword'
// Tu código:

const checkPassword = function (contrasena) {
    if (contrasena.length >= 8) {
        return "La contraseña es segura";
    } else {
        return "La contraseña es insegura";
    }
}


/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:

const stringInverso = function (str) {
   
    let palabras = str.split(" ");
 
    let resultado = palabras.reverse().join(" ");

    return resultado;
}


/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    checkPassword,
    stringInverso,
}