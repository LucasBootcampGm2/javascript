// Bootcamp 2024
// Loops | While - Do While
// 1. Escribe una función que reciba un array de calificaciones y calcule el promedio usando un bucle while. La función debe devolver el promedio y mostrarlo en la consola

const qualifications = [5, 5, 50, 5];

const takeAverage = (qualifications) => {
  let count = 0;
  let sum = 0;
  const quantity = qualifications.length;

  while (count < quantity) {
    sum += qualifications[count];
    count++;
  }

  const average = sum / quantity;
  return `The average of your qualifications is ${average}`;
};

const resultExcercise1 = takeAverage(qualifications);
console.log(resultExcercise1);

// 2. Verificar Correos Electrónicos: Escribe una función llamada verificarUsuario que reciba un array de nombres de usuario y un nombre de usuario específico. Usa un bucle while para verificar si el usuario específico está en la lista. Si el usuario existe, muestra un mensaje indicando "Usuario encontrado", de lo contrario, muestra "Usuario no encontrado".

const users = ["Matias", "Jorge", "Lucas"];
const specificUser = "Lucas";

const verificateUser = (usersArray, user) => {
  let count = 0;
  const usersLength = usersArray.length;

  while (count < usersLength) {
    if (user === usersArray[count]) {
      return `User found`;
    }
    count++;
  }

  return `User not found`;
};

const resultExcercise2 = verificateUser(users, specificUser);
console.log(resultExcercise2);

// const verficateUser = (users,user)=>{
//   const exist = users.includes(user)
//   return `User found: ${exist}`
// }
// console.log(verficateUser(users,specificUser));

// 3. Verificar Longitud de Contraseñas: Escribe una función llamada verificarContraseñas que reciba un array de contraseñas. Usa un bucle while para verificar cuántas contraseñas tienen al menos 8 caracteres. Muestra un mensaje indicando cuántas contraseñas cumplen con esta condición.

const passwords = ["password", "12345", "jasasas"];

const verificatePasswords = (array) => {
  let count = 0;
  let upperEight = 0;
  const arrayLength = array.length;

  while (count < arrayLength) {
    if (array[count].length >= 8) {
      upperEight++;
    }
    count++;
  }

  return `There are ${upperEight} nums with length upper eight`;
};
const resultExcercise3 = verificatePasswords(passwords);
console.log(resultExcercise3);

// 4. Verificar Existencia de un Usuario: Crea una función llamada verificarCorreos que reciba un array de correos electrónicos. Usa un bucle `while` para recorrer el array y verificar que cada correo contenga un "@" y un ".". Si todos los correos son válidos, muestra "Todos los correos son válidos", de lo contrario, muestra "Correo inválido encontrado".

const emails = ["email@example.com", "email@example.com", "email@example.com"];

const verificateEmails = (array) => {
  let count = 0;
  const arrayLength = array.length;

  while (count < arrayLength) {
    if (!array[count].includes("@") || !array[count].includes(".")) {
      return "Invalid email found";
    }
    count++;
  }

  return "All emails are valid";
};

const resultExcercise4 = verificateEmails(emails);
console.log(resultExcercise4);

// 5. Escribe una función que reciba un número y determine si es primo usando un bucle do while. La función debe devolver un valor booleano indicando si el número es primo y mostrar el resultado en la consola.

const isPrime = (num) => {
  let count = 1;
  let divisible = 0;

  do {
    if (num % count === 0) {
      divisible++;
    }
    count++;
  } while (count <= num);

  if (divisible > 2) {
    return `${num} is not a prime number`;
  }

  return `${num} is a prime number`;
};

const resultExcercise5 = isPrime(12);
console.log(resultExcercise5);

// 6. Contar Cantidad de Comentarios : Escribe una función llamada contarComentarios que reciba un array de comentarios. Cada comentario es un string. La función debe usar un bucle while para contar cuántos comentarios hay en la lista y mostrar el total en la consola.
let comments = ["Hi", "Lucas", "welcome", "to", "Gm2"];

const countComments = (array) => {
  let count = 0;
  const arrayLength = array.length;

  while (count < arrayLength) {
    count++;
  }

  console.log(array.join(" "));
  return `Comment array have ${count} comments`;
};

const resultExcercise6 = countComments(comments);
console.log(resultExcercise6);

// My option
// const countComments = (array) => {
//     return array.length
// }
// console.log(countComments(comments))
