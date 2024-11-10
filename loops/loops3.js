// Bootcamp 2024
// Loops | While - Do While
// 1. Escribe una función llamada contarGoles que reciba un array de goles anotados en un
// partido. Cada elemento del array es un objeto que tiene dos propiedades: equipo y jugador. Usa un bucle while para recorrer el array y contar cuántos goles anotó cada equipo.

const goals = [
  { team: "Barcelona", player: "Messi" },
  { team: "Barcelona", player: "Messi" },
  { team: "Real Madrid", player: "Ronaldo" },
  { team: "Real Madrid", player: "Ronaldo" },
];

const countGoals = (array) => {
  let count = 0;
  let object = {};
  const arrayLength = array.length;

  while (count < arrayLength) {
    object[array[count].team] ??= 0;
    object[array[count].team]++;
    count++;
  }

  return object;
};

const resultExcercise1 = countGoals(goals);
console.log(resultExcercise1);

// 2. Crea una función llamada contarToques que reciba un array con el nombre de los jugadores que tocan el balón en una jugada. Usa un bucle while para contar cuántos toques hubo antes de que el balón saliera del campo. La jugada termina cuando encuentres el string "fuera" en el array.

const play = ["Messi", "Fuera", "Doye", "fuera"];

const countTouches = (array) => {
  let count = 0;
  const arrayLength = array.length;

  while (count < arrayLength) {
    if (array[count].toLowerCase() === "fuera") {
      return `They make ${count} touch/es before the ball go out`;
    }
    count++;
  }

  return "Ball never left";
};

const resultExcercise2 = countTouches(play);
console.log(resultExcercise2);

// 3. Escribe una función llamada practicarSaques que simule los intentos de un jugador de voleibol para hacer un saque exitoso. Usa un bucle do while para que el jugador siga intentando hasta que consiga hacer un saque exitoso. Usa
// Math.random() para simular si el saque fue exitoso (considerando que la probabilidad de éxito es del 30%)

const practiceServeces = () => {
  let successfulServe;
  let attempts = 0;

  do {
    attempts++;
    successfulServe = Math.random() <= 0.3;
  } while (!successfulServe);

  return `Successful serve achieved after ${attempts} attempt/s.`;
};

const resultExcercise3 = practiceServeces();
console.log(resultExcercise3);

// 4. Desde la terna arbitral de la AFA, el presidente Chiqui Mafia nos envía una lista con los jugadores que anotaron goles en un partido. Escribe una función llamada recuentoGoleadores que reciba una lista de jugadores que anotaron goles. Usa un bucle do while para contar cuántos jugadores ÚNICOS anotaron al menos un gol, y muestra el resultado en la consola.

const playersThatScore = ["Messi", "Di Maria", "Messi", "Riquelme", "Maradona"];

const scorerCount = (array) => {
  let count = 0;
  let newArray = [];
  const arrayLength = array.length;

  do {
    if (!newArray.includes(array[count])) {
      newArray.push(array[count]);
    }
    count++;
  } while (count < arrayLength);

  const newArrayLength = newArray.length;
  return `There were ${newArrayLength} unique players who scored a goal`;
};

const resultExcercise4 = scorerCount(playersThatScore)
console.log(resultExcercise4);

// 5. En un clásico Boca vs. River, se quiere analizar el rendimiento de algunos jugadores clave. Tienes un objeto llamado rendimientoJugadores que almacena el nombre de cada jugador y la cantidad de kilómetros recorridos durante el partido. Crea una función analizarRendimiento que use un bucle while para recorrer el objeto y mostrar en la consola qué jugadores recorrieron más de 10 kilómetros.
const playersPerformance = {
  "Enzo Pérez": 11.5,
  "Frank Fabra": 9.8,
  "Nicolás De La Cruz": 12.3,
  "Cristian Medina": 10.2,
};

const analyzePerformance = (object) => {
  let count = 0;
  const players = Object.entries(object);
  const playersLength = players.length;
  let newArray = [];

  while (count < playersLength) {
    if (players[count][1] > 10) {
      newArray.push(players[count][0]);
    }
    count++;
  }

  return `The players who reached 10km were ${newArray}`;
};

const resultExcercise5 = analyzePerformance(playersPerformance)
console.log(resultExcercise5);

// 7. Imagina que estás desarrollando un carrito de compras para una página web. Tienes un array de objetos productos, donde cada objeto representa un producto con su nombre y precio. Escribe una función calcularTotal que recorra el array usando un bucle while y calcule el precio total de los productos en el carrito. Muestra el total en la consola.
const productsArray = [
  { name: "ball", price: 1800 },
  { name: "table", price: 12200 },
  { name: "palet", price: 13300 },
];

const calculateTotal = (array) => {
  let count = 0;
  let totalPrice = 0;
  const arrayLength = array.length;

  while (count < arrayLength) {
    totalPrice += array[count].price;
    count++;
  }

  return totalPrice;
};

const resultExcercise7 = calculateTotal(productsArray)
console.log(resultExcercise7);

// 8. Imagina que estás validando las entradas de un formulario en una página web. Tienes un array datosIngresados que contiene valores que el usuario ingresó. Escribe una función validarEntradas que recorra los datos usando un bucle do while para verificar que todos los campos sean válidos (por ejemplo, que no estén vacíos). Si todos los campos son válidos, muestra un mensaje en la consola indicando "Formulario válido", de lo contrario, muestra "Formulario inválido".
const inputData = [undefined, "wwwe", 23, 23223322, null];

const validateEntries = (array) => {
  const arrayLength = array.length;
  let count = 0;

  do {
    if (inputData[count] === undefined || inputData[count] === null) {
      return "Invalid form";
    }
    count++;
  } while (count < arrayLength);

  return "Valid form";
};

const resultExcercise8 = validateEntries(inputData)
console.log(resultExcercise8);

// 9. Imagina que estás manejando una sección de comentarios en una página web. Tienes un array de objetos comentarios, donde cada objeto tiene un usuario y un comentario. Escribe una función mostrarComentarios que recorra el array usando un bucle while y muestre cada comentario en la consola.
let comments = [
  { user: "Seba", comment: "Hi lucas, welcome to Gm2" },
  { user: "Lucas", comment: "It will be a pleasure to work with you" },
];

const showComments = (array) => {
  let count = 0;
  const arrayLength = array.length;

  while (count < arrayLength) {
    console.log(`${comments[count].user}: ${comments[count].comment}`);
    count++;
  }

  return;
};

showComments(comments);

// 10. Imagina que estás creando una barra de progreso para una página web. La barra de progreso se llena a medida que se completa una tarea. Escribe una función simularProgreso que use un bucle do while para simular el avance de la barra, incrementando el progreso en un 10% en cada iteración hasta que alcance el 100%. Muestra el progreso en la consola en cada paso.

const simulateProgress = () => {
  let progress = 0;

  do {
    console.log(`Progress: ${progress}%`);
    progress += 10;
  } while (progress < 100);

  console.log(`Progress: 100% - Task completed!`);
};

simulateProgress();

// 11. Imagina que estás diseñando una función de filtrado para una tienda en línea. Tienes un array de objetos productos, donde cada objeto tiene un nombre, categoría, y precio. Escribe una función filtrarPorCategoria que recorra el array usando un bucle while y devuelva un nuevo array con los productos que pertenecen a una categoría específica. Muestra los productos filtrados en la consola.

let products1 = [
  { name: "Table", category: "Furniture", price: 1212 },
  { name: "Lamp", category: "Furniture", price: 300 },
  { name: "Iphone", category: "Appliances", price: 12000000 },
  { name: "Mac", category: "Appliances", price: 12000000 },
];

const filterProductsByCategory = (array, category) => {
  let count = 0;
  let newArray = [];
  const arrayLength = array.length;

  while (count < arrayLength) {
    if (array[count].category === category) {
      newArray.push(array[count]);
    }
    count++;
  }

  return newArray;
};

console.log(filterProductsByCategory(products1, "Furniture"));
console.log(filterProductsByCategory(products1, "Appliances"));
