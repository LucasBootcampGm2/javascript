// Bootcamp 2024
// Loops | Ejercicios básicos | For - Break - Continue
// 1. En una clase, tienes un array con las notas de los alumnos. Escribe una función contarAprobados que reciba este array y cuente cuántos alumnos aprobaron (nota  mayor o igual a 6). Usa un bucle for para recorrer el array, continúe para saltar las notas menores a 6 y break para detener el conteo si encuentras una nota igual a 10 (porque es la nota máxima). Muestra el resultado en la consola.

const grades = [1, 6, 7, 7, 3, 10, 5];

const countApproved = (array) => {
  let upper6 = 0;
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] === 10) {
      break;
    } else if (array[i] < 6) {
      continue;
    } else {
      upper6++;
    }
  }
  return upper6;
};

const resultExcercise1 = countApproved(grades);
console.log(resultExcercise1);

// 2. Un canal de TV quiere saber si un programa específico está en la programación del día.  Escribe una función buscarPrograma que reciba un array con la lista de programas  del día y un nombre de programa para buscar. Usa un bucle for para recorrer el array y  break para detener la búsqueda una vez que encuentres el programa. Muestra en la  consola si el programa fue encontrado o no.

const programList = ["Tv publica", "C5N", "Lucas tv", "jorge tv", "FTP"];

const findProgram = (array, program) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] === program) {
      console.log("Program found");
      break;
    }
  }

  return "Program not found";
};

findProgram(programList, "C5N");

// 3. En una clase, un profesor quiere saber cuántos alumnos obtuvieron notas menores a 4 para ofrecerles clases de apoyo. Escribe una función contarNotasBajas que reciba un array con las notas y cuente cuántas son menores a 4. Usa for para recorrer el array y continue para saltar las notas que no sean menores a 4.

const countLowNotes = (array) => {
  let overFour = 0;
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] < 4) {
      overFour++;
    } else {
      continue;
    }
  }

  return overFour;
};

const resultExcercise3 = countLowNotes(grades);
console.log(resultExcercise3);

// 4. Tienes una lista de programas en un canal de televisión, y quieres seleccionar tus favoritos, pero solo los primeros tres que te gustan. Escribe una función seleccionarFavoritos que reciba un array con la lista de programas y un array con tus programas favoritos. Usa for para recorrer la lista, continue para saltar los que no están en tus favoritos, y break para detenerte una vez que hayas encontrado tres programas favoritos.

const favorites = ["sasas", "FPT", "Lucas tv", "jorge tv", "asasa"];

const selectFavorites = (array, favoritesTv) => {
  let favoritesCount = 0;
  let newArray = [];
  const favoritesTvLength = favoritesTv.length;

  for (let i = 0; i < favoritesTvLength; i++) {
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
};

const resultExcercise4 = selectFavorites(programList, favorites);
console.log(resultExcercise4);

// 5. En una escuela, el profesor quiere evaluar el desempeño de los alumnos. Escribe una función evaluarDesempeño que reciba un array con las notas de los alumnos y muestre en la consola si cada uno tiene un "Desempeño Excelente" (nota mayor o igual a 9). Usa for para recorrer el array y continue para saltar los que no cumplan con el criterio.
function evaluatePerformance(array) {
  let count = 0;
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] >= 9) {
      console.log("Exelent Performance");
      count++;
    } else {
      continue;
    }
  }

  return `${count} Student/s with exelent performance`;
}

const resultExcercise5 = evaluatePerformance(grades);
console.log(resultExcercise5);

// 6. Tienes un objeto alumno que contiene un array de materias, donde cada materia es un objeto con el nombre y la nota. Escribe una función filtrarAprobadas que recorra el array de materias, filtre aquellas con nota mayor o igual a 6 y las guarde en un nuevo array aprobadas. Usa for para recorrer las materias, continue para saltar las materias desaprobadas, y break si el alumno ya ha aprobado 5 materias. Muestra el array aprobadas en la consola.

const alumno = {
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

const filterApproves = (object) => {
  let approves = [];
  const subjectsLength = object.subjects.length;

  for (let i = 0; i < subjectsLength; i++) {
    if (object.subjects[i].grade >= 6) {
      approves.push(object.subjects[i]);
    } else if (approves.length === 5) {
      break;
    } else {
      continue;
    }
  }

  return approves;
};

const resultExcercise6 = filterApproves(alumno);
console.log(resultExcercise6);

// 7. Un canal de TV tiene una programación donde cada programa tiene una calificación.  Escribe una función buscarMejorPrograma que reciba un array de objetos  programas, cada uno con el nombre y la calificación, y encuentre el programa con la  mejor calificación. Usa for para recorrer el array, continue para saltar los programas  con calificaciones bajas (menos de 7), y break si encuentras un programa con una  calificación perfecta de 10. Muestra el nombre del mejor programa en la consola.

const programs = [
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

const searchBestProgram = (array) => {
  let bestGrade = 0;
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
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
};

const resultExcercise7 = searchBestProgram(programs);
console.log(resultExcercise7);

// 8. En una escuela, algunas materias incluyen clases prácticas. Escribe una función que reciba un objeto alumno con un array de materias, donde cada materia tiene un nombre y un booleano tienePracticas que indica si incluye prácticas. Usa for para recorrer las materias, continue para saltar las materias sin prácticas, y break si encuentras 3 materias con prácticas. Muestra en la consola cuántas materias con prácticas encontró.

const student = {
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

const havePractices = (object) => {
  let subjectsWithPractices = 0;
  const subjectsLength = object.subjects.length;

  for (let i = 0; i < subjectsLength; i++) {
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
};
const resultExcercise8 = havePractices(student);
console.log(resultExcercise8);

// 9. Tienes una lista de canales de TV argentinos, y quieres saber si uno de tus canales favoritos está en esa lista. Escribe una función buscarCanalFavorito que reciba un array de canales y un array de favoritos. Usa for para recorrer los canales, continue para saltar los que no están en la lista de favoritos, y break si encuentras uno de tus canales favoritos. Muestra en la consola el nombre del canal encontrado o un mensaje indicando que no está en la lista.

const argentinianCanals = ["Lucas tv", "Telefe", "América TV"];

const searchFavoriteCanals = (array, favoritesTv) => {
  let favoritesCount = 0;
  const favoritesTvLength = favoritesTv.length;
  for (let i = 0; i < favoritesTvLength; i++) {
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
};

const resultExcercise9 = searchFavoriteCanals(argentinianCanals, favorites);
console.log(resultExcercise9);

// usando el for hace una funciion que reciba un numero y me devuelva si es palindromo o no

const num = 32123;

const isPalindrome = (num) => {
  const string = num.toString();
  const stringLength = string.length;
  let palindrome = true;

  for (let i = 0; i < stringLength; i++) {
    if (string[i] !== string[stringLength - i - 1]) {
      palindrome = false;
    }
  }

  return palindrome;
};

const resultExcercise10 = isPalindrome(num);
console.log(resultExcercise10);

// usa for para pushear todos los elementos de una array en otro

let array = ["Hi", "Lucas", "Welcome"];
let newArray = ["to", "GM2"];

const addNewArrayElements = (array, newArray) => {
  const newArrayLength = newArray.length;
  const arrayLength = array.length;

  for (let i = 0; i < newArrayLength; i++) {
    array[arrayLength] = newArray[i];
  }

  return array;
};

const resultExcercise11 = addNewArrayElements(array, newArray);
console.log(resultExcercise11);

// Imagina que sos parte del equipo de desarrollo de Boca, y tu tarea es gestionar el presupuesto del club de fútbol. Cada categoría de gasto del club, como sueldos de jugadores, mantenimiento del estadio, y costos de viajes, se representa como una propiedad en un objeto. Tu tarea es crear una función que calcule el total de todos los gastos del club utilizando un bucle for...in.

const teamBills = {
  salaries: 3333,
  stadiumMaintenance: 200,
  trips: 1000,
};

const calculateTotal = (object) => {
  let sum = 0;

  for (key in object) {
    sum += object[key];
  }

  return sum;
};

const resultExcercise12 = calculateTotal(teamBills);
console.log(resultExcercise12);

// 1. Crea una función que reciba un número como parámetro y genere la tabla de multiplicar para ese número, desde 1 hasta 10. La función debe imprimir los resultados en la consola en el formato adecuado.

const num1 = 9;

const multiplyTable = (n) => {
  let table = [];

  for (let i = 0; i < 10; i++) {
    table.push(n * (i + 1));
  }

  return table;
};

const resultExcercise13 = multiplyTable(num1);
console.log(resultExcercise13);

// 2.
let invertedMessage = "2MG ot emoclew sacul ih";

function traduceInvertedMessage(message) {
  let invertedMessage = "";
  const messageLength = message.length;

  for (let i = messageLength - 1; i >= 0; i--) {
    invertedMessage += message[i];
  }

  return invertedMessage;
}

const resultExcercise14 = traduceInvertedMessage(invertedMessage);
console.log(resultExcercise14);

//3. En una noche de Clash Royale con tus amigos, cada uno puntúa las jugadas más épicas. Usa una función para encontrar el puntaje más alto y coronar al “Genio Montapuercos” de la noche. La función debe aceptar un array de números, que pueden ser enteros o decimales. a) Proceso: ○ Recorrer el array de números para identificar el valor máximo. ○ Utilizar un bucle for para comparar cada número con el valor máximo encontrado hasta el momento. ○ Asegurarse de que la función maneje adecuadamente los números dentro del array, incluso si hay valores negativos o decimales. b) Salida: La salida debe ser el valor máximo encontrado en el array. Ejemplo de salida para la entrada

const nums = [-30, 5.3, 5.9, 2, 2];

const findGreater = (array) => {
  let greater = 0;
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] > greater) {
      greater = array[i];
    }
  }

  return greater;
};

const resultExcercise15 = findGreater(nums);
console.log(resultExcercise15);

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

const calculateValidGradesProm = (array) => {
  let prom = 0;
  let count = 0;
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] > 5 || array[i] === null) {
      continue;
    } else {
      prom += array[i];
      count++;
    }
  }

  let r = "";
  const mathRound = (prom, count) => Math.round(prom / count);
  for (let i = 0; i < mathRound(prom, count); i++) {
    r += "*";
  }

  console.log(mathRound(prom, count));
  return r;
};

const resultExcercise16 = calculateValidGradesProm([2, 4, 2, 2]);
console.log(resultExcercise16);
