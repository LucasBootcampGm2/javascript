// Imagina que estás desarrollando una plataforma de venta de entradas para un evento en línea. Tenes un sistema básico donde los usuarios pueden comprar entradas. Sin embargo, varias personas pueden intentar comprar la misma cantidad de entradas al mismo tiempo, lo que puede provocar inconsistencias en la cantidad de entradas disponibles debido a las “race conditions”.

// Requerimientos:

// Hay un total de 10 entradas disponibles.

// Varias solicitudes pueden llegar al servidor al mismo tiempo para comprar entradas.

// El sistema debe garantizar que no se vendan más de las 10 entradas disponibles.

// Tareas:

// Escribir una simulación en JavaScript (puede ser en un entorno Node.js) donde múltiples usuarios intenten comprar entradas al mismo tiempo.

// Usar la función setTimeout para simular las solicitudes concurrentes. Cada usuario intentará comprar entradas con un retraso aleatorio.

// Crear una función que se encargue de la compra, que reciba la cantidad de entradas solicitadas y actualice el número total de entradas disponibles.

// Detectar el problema: Ver qué sucede cuando varios usuarios intentan comprar al mismo tiempo y cómo las entradas pueden ser vendidas en exceso (race condition).

// Solucionar la race condition: Proponer y aplicar una solución para evitar que las entradas disponibles se vendan en exceso. Se puede utilizar una de las siguientes estrategias:

// Uso de bloqueos (locks) para asegurar que solo una solicitud pueda procesar la compra a la vez.

// Implementar algún tipo de sincronización entre las solicitudes.

// Alternativamente, puedes implementar promesas que aseguren que la actualización del stock sea atómica.

// function buyTickets(quantity, user) {
//   console.log(`${user} is buying ${quantity} tickets...`);

//   if (availableTickets >= quantity) {
//     setTimeout(() => {
//       availableTickets -= quantity;
//       console.log(
//         `User ${user} bought ${quantity} tickets. Remaining tickets: ${availableTickets}`
//       );
//     }, Math.random() * 100);
//   } else {
//     console.log(`User ${user} could not buy tickets. Not enough available.`);
//   }
// }

// setTimeout(() => {
//   buyTickets(4, "Lucas");
//   buyTickets(3, "Franco");
//   buyTickets(2, "Matias");
//   buyTickets(3, "Seba");
// }, Math.random() * 100);

let availableTickets = 10;

function buyTickets(quantity, user) {
  return new Promise((resolve, reject) => {
    console.log(`${user} is buying ${quantity} tickets...`);

    if (availableTickets > 0) {
      setTimeout(() => {
        if (availableTickets - quantity < 0) {
          reject(
            `They are only ${availableTickets} avialable so ${user} only buy that quantity`
          );
          availableTickets = 0;
        } else {
          availableTickets -= quantity;
          console.log(
            `User ${user} bought ${quantity} tickets. Remaining tickets: ${availableTickets}`
          );
          resolve();
        }
      }, Math.random() * 100);
    } else {
      reject(`User ${user} tried to buy tickets but there are not enough`);
    }
  });
}

async function purchaseTickets() {
  try {
    await buyTickets(4, "Lucas");
    await buyTickets(3, "Seba");
    await buyTickets(5, "Franco");
    await buyTickets(6, "Matias");
  } catch (error) {
    console.error("Error", error);
  }
}

purchaseTickets();
