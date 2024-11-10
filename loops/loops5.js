// Bootcamp 2024
// Loops | For IN - For OF - ForEach
// 1. Imagina que sos parte del equipo de desarrollo de Boca, y tu tarea es gestionar el presupuesto del club de fútbol. Cada categoría de gasto del club, como sueldos de jugadores, mantenimiento del estadio, y costos de viajes, se representa como una propiedad en un objeto. Tu tarea es crear una función que calcule el total de todos los gastos del club utilizando un bucle for...in. La función debe: a. Recibir un objeto gastos donde cada propiedad representa una categoría de gasto y su valor es el monto de gasto en esa categoría. b. Utilizar un bucle for...in para recorrer las propiedades del objeto gastos y sumar los valores de cada propiedad. c. Mostrar el total de los gastos en la consola.
const bocaBills = {
  salaries: 200,
  maintenance: 200,
  trips: 2,
};

const calculateTotalBills = (bills) => {
  let sum = 0;

  for (let bill in bills) {
    sum += bills[bill];
  }

  return sum;
};

const resultExcercise1 = calculateTotalBills(bocaBills);
console.log(resultExcercise1);

// 2. Después de haber calculado el total de gastos , ahora necesitas saber cómo se distribuyen esos gastos en diferentes categorías. Tienes un objeto que representa las categorías de gastos del club, con cada propiedad indicando el tipo de gasto y su monto. Tu tarea es crear una función que: a. Reciba un objeto gastos donde cada propiedad representa una categoría de gasto y su valor es el monto gastado en esa categoría. b. Utilice un bucle for...in para recorrer las categorías de gasto. c. Imprima el monto gastado en cada categoría y calcule el total general de los gastos. d. Muestre en la consola cuánto se gastó en cada categoría y el total general, para entender mejor cómo se distribuyen los gastos.
const calculateBills = (bills) => {
  let total = 0;

  for (let bill in bills) {
    console.log(`Category: ${bill}, ${bills[bill]}$`);
    total += bills[bill];
  }

  return total;
};

const resultExcercise2 = calculateBills(bocaBills);
console.log(resultExcercise2);

// 3. Imagina que trabajás en el equipo de desarrollo de FIFA y necesitás actualizar las estadísticas de los jugadores cada año después de la temporada. Tu tarea es crear una función que tome un objeto con las estadísticas actuales del jugador y un objeto con los nuevos valores a añadir. La función debe usar un bucle for...in para recorrer las propiedades del objeto de estadísticas y actualizar los valores correspondientes. La función debe: a. Recibir un objeto jugador con las propiedades nombre, asistencias, y goles, que contienen las estadísticas actuales del jugador. b. Recibir un objeto nuevasEstadisticas con los valores de asistencias y goles que deben añadirse. c. Usar un bucle for...in para recorrer las propiedades de nuevasEstadisticas y añadir los valores a las estadísticas del jugador. d. Verificar que los nuevos valores sean números válidos (mayores o iguales a cero) antes de realizar la actualización. e. Devolver un objeto con las estadísticas actualizadas para el jugador.

let player = {
  name: "Lucas",
  age: 18,
  position: "Front",
};

const newValues = {
  name: "Lucas Cirillo Berardi",
  age: 19,
  position: "Middle field",
};

const updatePlayerValues = (playerValues, newValues) => {
  for (let key in playerValues) {
    playerValues[key] = newValues[key];
  }
  return playerValues;
};

const resultExcercise3 = updatePlayerValues(player, newValues);
console.log(resultExcercise3);

// 4. Imaginá que trabajás en el equipo de análisis de datos del Mundial de la FIFA. Necesitás saber cuántas veces aparece una letra específica en el nombre de un jugador. Tu tarea es escribir un programa que: a. Reciba una cadena de texto cadena que contiene el nombre de un jugador y un carácter caracter que deseas contar. b. Utilice un bucle for...of para recorrer cada carácter en la cadena de texto. c. Cuente cuántas veces aparece el carácter dado en el nombre del jugador. d. Muestra el resultado indicando cuántas veces aparece el carácter en el nombre.

const nameM = "Matias";

const countEqualLetterInName = (nameString, character) => {
  let equaletters = 0;

  for (let letter of nameString) {
    if (letter === character) {
      equaletters++;
    }
  }

  return equaletters;
};

const resultExcercise4 = countEqualLetterInName(nameM, "a");
console.log(resultExcercise4);

// 5. Imaginá que estás trabajando en el sistema de compras del Mundial de la FIFA y necesitas calcular el costo total de todos los productos en el carrito de compras de un fanático. Tienes un array que contiene objetos, donde cada objeto representa un producto con propiedades como nombre y precio. Tu tarea es crear un programa que: a. Reciba un array de objetos productos, donde cada objeto tiene propiedades nombre y precio. b. Utilice un bucle for...of para recorrer cada objeto en el array. c. Sume los precios de todos los productos en el carrito. d. Muestra el costo total acumulado, que será el monto que debe pagar el cliente por su compra.

const products = [
  {
    name: "Ball",
    price: 1000,
  },
  {
    name: "Hat",
    price: 102,
  },
];

const calculateProductsTotalValue = (array) => {
  let sum = 0;

  for (let product of array) {
    sum += product.price;
  }

  return sum;
};

const resultExcercise5 = calculateProductsTotalValue(products);
console.log(resultExcercise5);

// 6. estás trabajando en el sistema de ventas de tickets para la Copa América. Tienes un array de objetos donde cada objeto representa un ticket disponible, con propiedades nombre (del evento) y disponible (un booleano que indica si el ticket está disponible o agotado). Tu tarea es escribir un programa que: a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades nombre y disponible. b. Utilice un bucle for...of para recorrer cada objeto en el array. c. Genere un informe que muestre, para cada ticket, si está disponible o agotado. d. Presenta el nombre del evento seguido de su estado de disponibilidad.
const tickets = [
  {
    name: "Argentina vs Brasil",
    available: false,
  },
  {
    name: "Mexico vs Chile",
    available: true,
  },
];

const isAvailable = (ticketsArray) => {
  let report = [];
  let available = "";

  for (let ticket of ticketsArray) {
    if (ticket.available) {
      available = "have";
    } else {
      available = "sold out";
    }
    report.push(`${ticket.name} ${available} tickets`);
  }

  return report;
};

const resultExcercise6 = isAvailable(tickets);
console.log(resultExcercise6);

// 7. Han decidido ofrecer un descuento especial del 15% en todas las categorías de tickets. Tenés un array de objetos donde cada objeto representa un ticket, con propiedades nombre (del tipo de ticket) y precio (el precio actual del ticket). Tu tarea es escribir una función que: a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades nombre y precio. b. Utilice el método forEach para recorrer cada ticket en el array. c. Aplique un descuento del 15% al precio de cada ticket. Devuelve el array con los precios actualizados pero necesitamos un backup de los precios viejos
const discountTickets = [
  { name: "VIP", price: 10000 },
  { name: "General", price: 1000 },
];

const applyDiscount = (ticketsArray, discount) => {
  const ticketsArrayBackUp = ticketsArray.map((ticket) => ({ ...ticket }));

  ticketsArray.forEach((ticket) => {
    ticket.price -= ticket.price * discount;
  });

  return {
    lastPrices: ticketsArrayBackUp,
    priceWithDiscount: ticketsArray,
  };
};

const resultExcercise7 = applyDiscount(discountTickets, 0.15);
console.log("Original Prices backup:", result.lastPrices);
console.log("Prices with discount:", result.priceWithDiscount);

// 8. Como encargado de ajustar los precios de los videojuegos en Steam para una nueva región, debes convertir los precios a dólares y realizar ajustes basados en la popularidad de cada juego. Mantén una copia del precio original para referencia. Escribe una función que reciba: Un array de objetos juegos, donde cada objeto tiene propiedades nombre, precio, y popularidad. Una tasa de cambio a dólares. La función debe: a) Convertir los precios a dólares. b) Aplicar un ajuste adicional: i. $5 si la popularidad es 8 o más. ii. $2 si la popularidad es menos de 8. c) Calcular y mostrar el precio promedio de los juegos.

let games = [
  {
    name: "Disney Universe",
    price: 12000,
    popularity: 5,
  },
  {
    name: "GTA 5",
    price: 12000,
    popularity: 10,
  },
];

const updatePriceGames = (gamesArray) => {
  let prom = 0;
  let count = 0;

  for (let game of gamesArray) {
    game.price /= 1300;
    if (game.popularity >= 8) {
      game.price += 5;
    } else {
      game.price += 2;
    }
    prom += game.price;
    count++;
  }

  prom /= count;
  return prom;
};

const resultExcercise8 = updatePriceGames(games);
console.log(resultExcercise8);

// 9.   Imaginá que sos el encargado de la tienda de merchandising de Argentina y necesitas actualizar el inventario después de una gran venta celebrando un triunfo. Los hinchas han estado comprando productos como locos, ¡y tu tarea es ajustar el stock! Descripción del Problema: Escribe una función en JavaScript que realice las siguientes tareas: a) Recibe un Array de Productos: Cada objeto en el array representa un producto y tiene las siguientes propiedades: ○ nombre: El nombre del producto (por ejemplo, "Camiseta del Campeón", "Gorra del Dibu"). ○ cantidad: La cantidad actual en stock del producto. ○ vendido: La cantidad del producto que se ha vendido. b) Actualizar el Stock: ○ Utiliza el método forEach para recorrer el array de productos. ○

//Calcula la cantidad restante de cada producto después de la venta (restando la cantidad vendida de la cantidad en stock).

// ○ Actualiza la cantidad en stock del producto con el nuevo valor. c) Mostrar Mensajes: ○ Crea un mensaje para cada producto que indique si el stock es suficiente o está bajo: ■ Si la cantidad restante es mayor a 10, el mensaje debe ser: "La [nombre del producto] está bien abastecida. Cantidad restante en stock: [cantidad restante]". ■ Si la cantidad restante es 10 o menos, el mensaje debe ser: "¡La [nombre del producto] está en bajo stock! Solo quedan [cantidad restante] unidades.". d) Mostrar los Mensajes en la Consola: Imprime cada mensaje en la consola. e) Calcular el Porcentaje Restante: calcula el porcentaje de stock restante. El porcentaje se calcula como: (cantidadRestante / cantidadOriginal) * 100. Ejemplo de Entrada: const productos = [ { nombre: "Camiseta del Campeón", cantidad: 100, vendido: 30 }, { nombre: "Gorra del Dibu", cantidad: 50, vendido: 20 }, { nombre: "La Bufanda de los Campeones del Mundo", cantidad: 75, vendido: 25 }]; Salida esperada: La Camiseta del Campeón está bien abastecida. Cantidad restante en stock: 70. Porcentaje de stock restante: 70%. La Gorra del Dibu está bien abastecida. Cantidad restante en stock: 30. Porcentaje de stock restante: 60%. ¡La Bufanda de los Campeones del Mundo está en bajo stock! Solo quedan 50 unidades. Porcentaje de stock restante: 66.67%.

const productsArray = [
  { name: "Champion T-shirt", quantity: 100, sold: 30 },
  { name: "Dibu's Cap", quantity: 50, sold: 20 },
  { name: "World Champions Scarf", quantity: 75, sold: 25 },
];

const updateStock = (array) => {
  array.forEach((product) => {
    const originalQuantity = product.quantity;

    product.quantity -= product.sold;

    const remainingPercentage = (product.quantity / originalQuantity) * 100;

    if (product.quantity > 10) {
      console.log(
        `The ${product.name} is well supplied. Remaining stock: ${
          product.quantity
        }. Remaining stock percentage: ${remainingPercentage.toFixed(2)}%.`
      );
    } else {
      console.log(
        `The ${product.name} is in low stock! Only ${
          product.quantity
        } units left. Remaining stock percentage: ${remainingPercentage.toFixed(
          2
        )}%.`
      );
    }
  });
};

updateStock(productsArray);

//  10. Imaginá que sos parte del equipo de marketing de BOCA que acaba de lanzar una nueva línea de productos oficiales.

// Necesitás enviar un correo electrónico a todos los usuarios registrados en tu base de datos para informarles sobre esta novedad.

// Tu tarea es escribir una función que: Reciba dos parámetros:
// ○ Un array de objetos usuarios, donde cada objeto tiene las propiedades nombre, email y preferencias.
// ○ Un objeto de promociones, donde las claves son los nombres de las categorías de productos (por ejemplo, "Camisetas", "Gorras", "Bufandas"), y los valores son las promociones asociadas a cada categoría (por ejemplo, "10% de descuento adicional").

// Utilice el método forEach para recorrer el array de usuarios. Para cada usuario, la función debe: ○ Verificar si el usuario tiene alguna preferencia en el array preferencias.

// ○ Si el usuario tiene preferencias, recorrer ese array de preferencias y: ■ Verificar si existe una promoción en el objeto promociones para esa preferencia.

// ■ Si existe una promoción, mostrar un mensaje en la consola que indique que se ha enviado un correo a ese usuario con la promoción aplicada.

// ■ Si no existe una promoción para la preferencia, mostrar un mensaje en la consola que indique que se ha enviado un correo sin promoción específica.

// ○ Si el usuario no tiene preferencias, mostrar un mensaje en la consola que indique que se ha enviado un correo genérico sin promoción.

//La función debe llevar un conteo de cuántos correos se enviaron en total y cuántas veces se aplicó cada promoción.

// Al final de la función, mostrar en la consola el total de correos enviados y un resumen de las promociones aplicadas, indicando cuántas veces se aplicó cada una.

// Ejemplo de entrada: const usuarios = [ { nombre: "Juan Pérez", email: "juan.perez@example.com", preferencias: ["Camisetas", "Gorras"] }, { nombre: "María García", email: "maria.garcia@example.com", preferencias: ["Bufandas"] }, { nombre: "Carlos López", email: "carlos.lopez@example.com", preferencias: [] } ]; const promociones = { "Camisetas": "10% de descuento adicional", "Gorras": "15% de descuento adicional", "Bufandas": "20% de descuento adicional" }; Salida Esperada: Enviando correo a Juan Pérez (juan.perez@example.com) sobre Camisetas - Promoción: 10% de descuento adicional Enviando correo a Juan Pérez (juan.perez@example.com) sobre Gorras - Promoción: 15% de descuento adicional Enviando correo a María García (maria.garcia@example.com) sobre Bufandas - Promoción: 20% de descuento adicional Enviando correo genérico a Carlos López (carlos.lopez@example.com) Total de correos enviados: 4 Promociones aplicadas: - Camisetas: 1 - Gorras: 1 - Bufandas: 1
const users = [
  {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    preferences: ["T-Shirts", "Caps"],
  },
  {
    name: "María García",
    email: "maria.garcia@example.com",
    preferences: ["Scarves"],
  },
  {
    name: "Carlos López",
    email: "carlos.lopez@example.com",
    preferences: [],
  },
];

const promotions = {
  "T-Shirts": "10% additional discount",
  Caps: "15% additional discount",
  Scarves: "20% additional discount",
};

const sendMail = (usersArray, promotionsObject) => {
  let emails = 0;
  let summary = {};

  usersArray.forEach((user) => {
    let userName = user.name;
    let userEmail = user.email;
    const userPreferences = user.preferences;
    const userPreferencesLength = user.preferences.length;

    if (userPreferencesLength > 0) {
      for (const preference of userPreferences) {
        if (promotionsObject[preference]) {
          emails++;
          console.log(
            `Sending email to ${userName} (${userEmail}) about ${preference} - Promotion: ${promotionsObject[preference]}`
          );

          if (summary[preference]) {
            summary[preference] += 1;
          } else {
            summary[preference] = 1;
          }
        } else {
          emails++;
          console.log(
            `An email has been sent to ${userName} without a specific promotion`
          );
        }
      }
    } else {
      emails++;
      console.log(
        `A generic email has been sent to ${userName} without any promotion`
      );
    }
  });

  return summary;
};

const resultExcercise10 = sendMail(users, promotions);
console.log(resultExcercise10);
