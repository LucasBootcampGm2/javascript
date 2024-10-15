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
