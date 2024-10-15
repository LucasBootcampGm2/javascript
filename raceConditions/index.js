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

// let availableTickets = 10;

// function buyTickets(quantity, user) {
//   return new Promise((resolve, reject) => {
//     console.log(`${user} is buying ${quantity} tickets...`);

//     if (availableTickets > 0) {
//       setTimeout(() => {
//         if (availableTickets - quantity < 0) {
//           reject(
//             `They are only ${availableTickets} avialable so ${user} only buy that quantity`
//           );
//           availableTickets = 0;
//         } else {
//           availableTickets -= quantity;
//           console.log(
//             `User ${user} bought ${quantity} tickets. Remaining tickets: ${availableTickets}`
//           );
//           resolve();
//         }
//       }, Math.random() * 100);
//     } else {
//       reject(`User ${user} tried to buy tickets but there are not enough`);
//     }
//   });
// }

// function purchaseTickets(){
//     try {
//         for await (let i = 0; i < array.length; i++) {
//             await buyTickets(array[i].tickets,array[i].user)

//         }
//     } catch (error) {

//     }
// }

// async function purchaseTickets() {
//   try {
//     await buyTickets(4, "Lucas");
//     await buyTickets(3, "Seba");
//     await buyTickets(5, "Franco");
//     await buyTickets(6, "Matias");
//   } catch (error) {
//     console.error("Error", error);
//   }
// }

// purchaseTickets();

let availableTickets = 10;
let lock = false;
const resultElement = document.getElementById("result");

function buyTickets(quantity, user) {
  return new Promise((resolve, reject) => {
    resultElement.innerText = `${user} is trying to buy ${quantity} ticket/s...`;

    if (availableTickets >= quantity) {
      setTimeout(() => {
        availableTickets -= quantity;
        console.log(
          `${user} bought ${quantity} tickets. Remaining: ${availableTickets}`
        );
        resolve(`${user} successfully bought ${quantity} ticket/s!`);
      }, Math.random() * 4000);
    } else {
      if (availableTickets > 0) {
        reject(
          `Sorry, ${user}. Only ${availableTickets} ticket/s are available.`
        );
      } else {
        reject(`Sorry, tickets are sold out`);
      }
    }
  });
}

async function handlePurchase(event) {
  event.preventDefault();

  if (lock) {
    document.getElementById("result").innerText =
      "Please wait. Another purchase is in progress.";
    return;
  }

  lock = true;

  const name = document.getElementById("name").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  try {
    const message = await buyTickets(quantity, name);
    resultElement.innerText = message;
  } catch (error) {
    resultElement.innerText = error;
  } finally {
    lock = false;
  }
}

document
  .getElementById("ticket-form")
  .addEventListener("submit", handlePurchase);
