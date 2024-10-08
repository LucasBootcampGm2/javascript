// Bootcamp 2024
// Loops | Ejercicios básicos | For - Break - Continue
// 1. En una clase, tienes un array con las notas de los alumnos. Escribe una función contarAprobados que reciba este array y cuente cuántos alumnos aprobaron (nota  mayor o igual a 6). Usa un bucle for para recorrer el array, continúe para saltar las notas menores a 6 y break para detener el conteo si encuentras una nota igual a 10 (porque es la nota máxima). Muestra el resultado en la consola.
let grades = [1, 6, 7, 7, 3, 10, 5];
function countApproved(array) {
  let upper6 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
      break;
    } else if (array[i] < 6) {
      continue;
    } else {
      upper6++;
    }
  }
  return upper6;
}
console.log(countApproved(grades));

// 2. Un canal de TV quiere saber si un programa específico está en la programación del día.  Escribe una función buscarPrograma que reciba un array con la lista de programas  del día y un nombre de programa para buscar. Usa un bucle for para recorrer el array y  break para detener la búsqueda una vez que encuentres el programa. Muestra en la  consola si el programa fue encontrado o no.
let programList = ["Tv publica", "C5N", "Lucas tv", "jorge tv", "FTP"];
function findProgram(array, program) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === program) {
      return true;
    }
  }
  return false;
}

console.log(findProgram(programList, "C5N"));

// 3. En una clase, un profesor quiere saber cuántos alumnos obtuvieron notas menores a 4 para ofrecerles clases de apoyo. Escribe una función contarNotasBajas que reciba un array con las notas y cuente cuántas son menores a 4. Usa for para recorrer el array y continue para saltar las notas que no sean menores a 4.
function countLowNotes(array) {
  let overFour = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 4) {
      overFour++;
    } else {
      continue;
    }
  }
  return overFour;
}

console.log(countLowNotes(grades));

// 4. Tienes una lista de programas en un canal de televisión, y quieres seleccionar tus favoritos, pero solo los primeros tres que te gustan. Escribe una función seleccionarFavoritos que reciba un array con la lista de programas y un array con tus programas favoritos. Usa for para recorrer la lista, continue para saltar los que no están en tus favoritos, y break para detenerte una vez que hayas encontrado tres programas favoritos.
let favorites = ["sasas", "FPT", "Lucas tv", "jorge tv", "asasa"];
function selectFavorites(array, favoritesTv) {
  let favoritesCount = 0;
  let newArray = [];
  for (let i = 0; i < favoritesTv.length; i++) {
    if (array.includes(favoritesTv[i])) {
      favoritesCount++;
      newArray.push(favoritesTv[i]);
      if (favoritesCount === 3) {
        break;
      }
    } else {
      continue;
    }
  }
  return newArray;
}
console.log(selectFavorites(programList, favorites));

// 5. En una escuela, el profesor quiere evaluar el desempeño de los alumnos. Escribe una función evaluarDesempeño que reciba un array con las notas de los alumnos y muestre en la consola si cada uno tiene un "Desempeño Excelente" (nota mayor o igual a 9). Usa for para recorrer el array y continue para saltar los que no cumplan con el criterio.
function evaluatePerformance(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 9) {
      console.log("Exelent Performance");
      count++;
    } else {
      continue;
    }
  }
  return `${count} Student/s with exelent performance`;
}
console.log(evaluatePerformance(grades));

// 6. Tienes un objeto alumno que contiene un array de materias, donde cada materia es un objeto con el nombre y la nota. Escribe una función filtrarAprobadas que recorra el array de materias, filtre aquellas con nota mayor o igual a 6 y las guarde en un nuevo array aprobadas. Usa for para recorrer las materias, continue para saltar las materias desaprobadas, y break si el alumno ya ha aprobado 5 materias. Muestra el array aprobadas en la consola.
let alumno = {
  name: "Lucas",
  subjects: [
    {
      name: "Maths",
      grade: 8,
    },
    {
      name: "Language",
      grade: 3,
    },
    {
      name: "Chemistry",
      grade: 6,
    },
    {
      name: "Geography",
      grade: 6,
    },
    {
      name: "History",
      grade: 4,
    },
  ],
};
function filterApproves(object) {
  let approves = [];
  for (let i = 0; i < object.subjects.length; i++) {
    if (object.subjects[i].grade >= 6) {
      approves.push(object.subjects[i]);
    } else if (approves.length === 5) {
      break;
    } else {
      continue;
    }
  }
  return approves;
}

console.log(filterApproves(alumno));

// 7. Un canal de TV tiene una programación donde cada programa tiene una calificación.  Escribe una función buscarMejorPrograma que reciba un array de objetos  programas, cada uno con el nombre y la calificación, y encuentre el programa con la  mejor calificación. Usa for para recorrer el array, continue para saltar los programas  con calificaciones bajas (menos de 7), y break si encuentras un programa con una  calificación perfecta de 10. Muestra el nombre del mejor programa en la consola.
let programs = [
  {
    name: "Lucas tv",
    grade: 9,
  },
  {
    name: "joseh tv",
    grade: 10,
  },
  {
    name: "jorge tv",
    grade: 4,
  },
];
function searchBestProgram(array) {
  let bestGrade = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].grade > bestGrade) {
      bestGrade = array[i].grade;
      if (bestGrade.grade === 10) {
        break;
      }
    } else if (array[i].grade < 7) {
      continue;
    }
  }
  return bestGrade;
}
console.log(searchBestProgram(programs));

// 8. En una escuela, algunas materias incluyen clases prácticas. Escribe una función que reciba un objeto alumno con un array de materias, donde cada materia tiene un nombre y un booleano tienePracticas que indica si incluye prácticas. Usa for para recorrer las materias, continue para saltar las materias sin prácticas, y break si encuentras 3 materias con prácticas. Muestra en la consola cuántas materias con prácticas encontró.
let student = {
  name: "Lucas",
  subjects: [
    {
      name: "Maths",
      havePractices: false,
    },
    {
      name: "Language",
      havePractices: true,
    },
    {
      name: "Chemistry",
      havePractices: false,
    },
    {
      name: "Geography",
      havePractices: true,
    },
    {
      name: "History",
      havePractices: true,
    },
  ],
};

function havePractices(object) {
  let subjectsWithPractices = 0;
  for (let i = 0; i < object.subjects.length; i++) {
    if (object.subjects[i].havePractices) {
      subjectsWithPractices++;
      if (subjectsWithPractices === 3) {
        break;
      }
    } else {
      continue;
    }
  }
  return `${object.name} has ${subjectsWithPractices} subjects with practices`;
}
console.log(havePractices(student));

// 9. Tienes una lista de canales de TV argentinos, y quieres saber si uno de tus canales favoritos está en esa lista. Escribe una función buscarCanalFavorito que reciba un array de canales y un array de favoritos. Usa for para recorrer los canales, continue para saltar los que no están en la lista de favoritos, y break si encuentras uno de tus canales favoritos. Muestra en la consola el nombre del canal encontrado o un mensaje indicando que no está en la lista.

let argentinianCanals = ["Lucas tv", "Telefe", "América TV"];
function searchFavoriteCanals(array, favoritesTv) {
  let favoritesCount = 0;
  for (let i = 0; i < favoritesTv.length; i++) {
    if (array.includes(favoritesTv[i])) {
      favoritesCount++;
      if (favoritesCount === 1) {
        return true;
      }
    } else {
      continue;
    }
  }
  return false;
}

console.log(searchFavoriteCanals(argentinianCanals, favorites));

// usando el for hace una funciion que reciba un numero y me devuelva si es palindromo o no

let num = 32123;
function isPalindrome(palindrome) {
  let string = palindrome.toString();
  let itis = true;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      itis = false;
    }
  }
  return itis;
}

console.log(isPalindrome(num));

// usa for para pushear todos los elementos de una array en otro

let array = ["Hi", "Lucas", "Welcome"];
let newArray = ["to", "GM2"];
function addNewArrayElements(array, arrayWithNewElements) {
  for (let i = 0; i < arrayWithNewElements.length; i++) {
    array[array.length] = arrayWithNewElements[i];
  }
  return array;
}

console.log(addNewArrayElements(array, newArray));

// Imagina que sos parte del equipo de desarrollo de Boca, y tu tarea es gestionar el presupuesto del club de fútbol. Cada categoría de gasto del club, como sueldos de jugadores, mantenimiento del estadio, y costos de viajes, se representa como una propiedad en un objeto. Tu tarea es crear una función que calcule el total de todos los gastos del club utilizando un bucle for...in.
let teamBills = {
  salaries: 3333,
  stadiumMaintenance: 200,
  trips: 1000,
};

function calculateTotal(object) {
  let sum = 0;
  for (key in object) {
    sum += object[key];
  }
  return sum;
}
console.log(calculateTotal(teamBills));

// 1. Crea una función que reciba un número como parámetro y genere la tabla de multiplicar para ese número, desde 1 hasta 10. La función debe imprimir los resultados en la consola en el formato adecuado.
let num1 = 9;
function multiplyTable(n) {
  let table = [];
  for (let i = 0; i < 10; i++) {
    table.push(n * (i + 1));
  }
  return table;
}
console.log(multiplyTable(num1));

// 2.
let invertedMessage = "2MG ot emoclew sacul ih";

function traduceInvertedMessage(message) {
  let invertedMessage = "";
  for (let i = message.length -1; i >= 0; i--) {
    invertedMessage += message[i];
  }
  return invertedMessage;
}

console.log(traduceInvertedMessage(invertedMessage));

//3. En una noche de Clash Royale con tus amigos, cada uno puntúa las jugadas más épicas. Usa una función para encontrar el puntaje más alto y coronar al “Genio Montapuercos” de la noche. La función debe aceptar un array de números, que pueden ser enteros o decimales. a) Proceso: ○ Recorrer el array de números para identificar el valor máximo. ○ Utilizar un bucle for para comparar cada número con el valor máximo encontrado hasta el momento. ○ Asegurarse de que la función maneje adecuadamente los números dentro del array, incluso si hay valores negativos o decimales. b) Salida: La salida debe ser el valor máximo encontrado en el array. Ejemplo de salida para la entrada 
let nums = [-30, 5.3, 5.9, 2, 2]

function findGreater(array){
    let greater = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > greater) {
            greater = array[i] 
        }
        
    }
    return greater
}
console.log(findGreater(nums))

// 4. Como desarrollador del juego FIFA, estás añadiendo una funcionalidad para mostrar el
// promedio de calificaciones de los jugadores usando estrellas (*) en la página web. Cada
// estrella representará una unidad del promedio redondeado al entero más cercano, con
// un máximo de 5 estrellas.
// Requisitos:
// a) Entrada:
// ○ La función debe recibir un array de calificaciones, donde cada calificación
// es un número entre 1 y 5. Algunos valores pueden ser null o mayores a
// 5, y deben ser ignorados.
// b) Proceso:
// ○ Recorre el array de calificaciones y calcula el promedio de las
// calificaciones válidas.
// ○ Redondea el promedio al número entero más cercano.
// ○ Usa un bucle for para construir una cadena de estrellas (*). La cantidad
// de estrellas debe coincidir con el promedio redondeado, hasta un máximo
// de 5 estrellas.
// c) Salida:
// ○ La salida debe ser una cadena de asteriscos (*) que representa el
// promedio redondeado.
// ○ Ejemplo de salida para la entrada [3, 1, 4, 5, 2]: *** (3 estrellas).
// ○ Ejemplo de salida para la entrada [4, 3, 5, 2, 4]:**** (4
// estrellas).
// ○ Ejemplo de salida para la entrada [4, 6, null, 2, 4]: *** (3
// estrellas)

function calculateValidGradesProm(array){
    let prom = 0
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5 || array[i] === null) {
            continue
        } else {
            prom += array[i] 
            count++
        }
    }
    let r = ''
    for (let i = 0; i < Math.round(prom/count); i++) {
        r += '*'
    }
    console.log(Math.round(prom/count))
    return r
}

console.log(calculateValidGradesProm([2,4,2,2]))
