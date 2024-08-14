// Bootcamp 2024
// Loops | While - Do While
// 1. Escribe una función que reciba un array de calificaciones y calcule el promedio usando un bucle while. La función debe devolver el promedio y mostrarlo en la consola

let qualifications = [70, 5, 5, 0];
function takeAverage(array) {
  let count = 0;
  let average = 0;
  while (count < array.length) {
    average += array[count];
    console.log(array[count]);
    count++;
  }
  average /= qualifications.length;
  return average;
}
console.log(takeAverage(qualifications));

// 2. Verificar Correos Electrónicos: Escribe una función llamada verificarUsuario que reciba un array de nombres de usuario y un nombre de usuario específico. Usa un bucle while para verificar si el usuario específico está en la lista. Si el usuario existe, muestra un mensaje indicando "Usuario encontrado", de lo contrario, muestra "Usuario no encontrado".
let usuarios = ["juan", "maria", "admin", "carlos"];
let usuarioBuscado = "admin";

function vericateUser(array, name) {
  let count = 0;
  while (count < array.length) {
    if (array[count] == name) {
      return true;
    }
    count++;
  }
  return false;
}

console.log(vericateUser(usuarios, usuarioBuscado));

// function vericateUser(array ,name){
//     let exist = array.includes(name)
//     return exist
// }
// console.log(vericateUser(usuarios,usuarioBuscado))

// 3. Verificar Longitud de Contraseñas: Escribe una función llamada verificarContraseñas que reciba un array de contraseñas. Usa un bucle while para verificar cuántas contraseñas tienen al menos 8 caracteres. Muestra un mensaje indicando cuántas contraseñas cumplen con esta condición.
let contraseñas = ["password", "1234567", "supersecret", "contraseña123"];

function verificatePasswords(array) {
  let count = 0;
  let lengthUper8 = 0;
  while (count < array.length) {
    if (array[count].length >= 8) {
      lengthUper8++;
    }
    count++;
  }
  return `There are ${lengthUper8} password with 8 or more characters`;
}
console.log(verificatePasswords(contraseñas));

// 4. Verificar Existencia de un Usuario: Crea una función llamada verificarCorreos que reciba un array de correos electrónicos. Usa un bucle `while` para recorrer el array y verificar que cada correo contenga un "@" y un ".". Si todos los correos son válidos, muestra "Todos los correos son válidos", de lo contrario, muestra "Correo inválido encontrado".

let correos = [
  "correo1@example.com",
  "correo2@example.com",
  "correo3@examplecom",
];

function verificateMails(array) {
  let count = 0;
  while (count < array.length) {
    if (array[count].includes("@") && array[count].includes(".")) {
      count++;
    } else {
      return `Mail not valid found`;
    }
  }
  return `All mails valid`;
}
console.log(verificateMails(correos));

// 5. Escribe una función que reciba un número y determine si es primo usando un bucle do while. La función debe devolver un valor booleano indicando si el número es primo y mostrar el resultado en la consola.

function isPrimeNumber(num) {
  let count = 1;
  let divisible = 0;
  do {
    if (num % count == 0) {
      divisible++;
    }
    count++;
  } while (count < num);
  if (num !== 1 && divisible > 2) {
    return false;
  } else {
    return true;
  }
}
console.log(isPrimeNumber(8));

// 5. Contar Cantidad de Comentarios : Escribe una función llamada contarComentarios que reciba un array de comentarios. Cada comentario es un string. La función debe usar un bucle while para contar cuántos comentarios hay en la lista y mostrar el total en la consola.
let comments = ["Hi", "Lucas", "welcome", "to", "Gm2"];

//Jose option
function countComments(array) {
  let count = 0;
  while (count < array.length) {
    count++;
  }
  return count;
}
console.log(countComments(comments));

// My option
// function countComments(array){
//     return array.length
// }
// console.log(countComments(comments))
