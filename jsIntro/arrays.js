function manageOrdered() {
  greetConsumer();
  let age = isOlder();
  let product = haveStockOrNot();
  let totalValue = calculateTotalCost(product);
  let ageDiscount = determineAgeDiscount(age);
  let cashDiscount = determineDiscountByPaymentMethod();
  showOrderTime();
  let coveredValue = calculateValueCovered(
    cashDiscount,
    ageDiscount,
    totalValue
  );
  let tax = calculateTax(coveredValue);
  showOrderSummary(totalValue, ageDiscount, cashDiscount, coveredValue, tax);
}
manageOrdered();

function greetConsumer() {
  let name = window.prompt("Enter your name").trim();
  let isNameValid = isNaN(parseFloat(name)) && name.trim().length <= 30;
  while (!isNameValid) {
    name = window.prompt("Enter your name, (30 characters max)").trim();
    isNameValid = isNaN(parseFloat(name)) && name.trim().length <= 30;
  }
  console.log(
    `Hi ${name}, welcome to Gm2, it will be a pleasure to work with you!`
  );
}

function isOlder() {
  let age = window.prompt("How old are you?").trim();
  while (isNaN(age) || age > 120 || age < 0) {
    age = window.prompt(
      "Enter your age,(may have more than 0 and less than 120)."
    ).trim();
  }
  if (age < 18) {
    console.warn("You cannot drink alcoholic beverages.");
  } else {
    console.log("You are over 18.");
  }
  return age;
}

function haveStockOrNot() {
  let product = window.prompt("What product will you buy?").toLowerCase().trim();
  let haveStock =
    product != "orange" && product != "chicken" && product != "tomato";
  while (haveStock) {
    product = window.prompt(
      "Enter other product, we dont have that one (orange,chicken,tomato)."
    ).toLowerCase().trim();
    haveStock =
      product != "orange" && product != "chicken" && product != "tomato";
  }
  console.log(`Product: ${product}`);
  return product;
}

function calculateTotalCost(product) {
  let orderQuantity = window.prompt(`How much ${product} will you want?`).trim();
  while (isNaN(orderQuantity)) {
    orderQuantity = window.prompt(`How much ${product} will you want?`).trim();

  }
  let unitPrice;
  switch (product) {
    case "orange":
      unitPrice = 10;
      break;
    case "chicken":
      unitPrice = 30;
      break;
    case "tomato":
      unitPrice = 20;
  }
  return orderQuantity * unitPrice;
}

function determineAgeDiscount(age) {
  if (age > 60) {
    return 0.1;
  } else {
    return 0;
  }
}

function determineDiscountByPaymentMethod() {
  let paymentMethod = window.prompt("How will you pay?").toLowerCase().trim();
  let isPaymentMethodValid =
    paymentMethod != "cash" &&
    paymentMethod != "card" &&
    paymentMethod != "transfer";
  while (isPaymentMethodValid) {
    paymentMethod = window.prompt("How will you pay?").toLowerCase().prompt();
    isPaymentMethodValid =
    paymentMethod != "cash" &&
    paymentMethod != "card" &&
    paymentMethod != "transfer";
  }
  if (paymentMethod === "cash") {
    return 0.1;
  } else {
    return 0;
  }
}

function showOrderTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours >= 12 && hours <= 14) {
    if (hours === 14 && minutes === 0) {
      console.log(
        "There may be delays as the order was placed during peak hours."
      );
    } else if (hours < 14) {
      console.log(
        "There may be delays as the order was placed during peak hours."
      );
    }
  }
}

function calculateValueCovered(cashDiscount, ageDiscount, totalValue) {
  let coveredValue = totalValue;
  coveredValue -= totalValue * cashDiscount;
  coveredValue -= totalValue * ageDiscount;
  return coveredValue;
}

function calculateTax(coveredValue) {
  return coveredValue * 0.05;
}

function showOrderSummary(
  totalValue,
  ageDiscount,
  cashDiscount,
  coveredValue,
  tax
) {
  console.log(`Total value = ${totalValue}`);
  console.log(`Discount apply = ${ageDiscount + cashDiscount}`);
  console.log(`Tax = ${tax}`);
  console.log(`Final cost = ${coveredValue + tax}`);
}
