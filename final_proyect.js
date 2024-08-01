
function manageOrdered() {
    greetConsumer()
    isMayor()
    haveStockOrNot() 
    let product = haveStockOrNot()
    let totalValue = calculateTotalCost(orderQuantity,product)
    let ageDiscount = determineAgeDiscount(isMayor())
    let cashDiscount = determineDiscountByPaymentMethod(paymentMethod)
    showOrderTime()
    let coveredValue = calculateValueCovered(cashDiscount,ageDiscount,totalValue)
    let tax = calculateTax(coveredValue)
    showOrderSummary(totalValue, ageDiscount, cashDiscount,coveredValue,tax)
}
manageOrdered()

function greetConsumer(name){
    let name = window.prompt("Enter your name")
    if (isNaN(parseFloat(name)) && (name.trim()).length() <= 30) {
        console.log(name)
        console.log( `Hi ${name}, welcome to Gm2, it will be a pleasure to work with you!`)
    } else {
        while (!isNaN(parseFloat(name)) || (name.trim()).length() > 30) {
            name = window.prompt("Enter your name, (30 characters max)")
        }
        console.log(`Name: ${name}`)
    }
}

function isMayor(age) {
    let age = window.prompt("How old are you?")
    while (isNaN(age) || age > 120 || age < 0){
        age = window.prompt("Enter your age,(may have more than 0 and less than 120).")
    }
    if (age < 18) {
        console.warn("You cannot drink alcoholic beverages.")
    } else {
        console.log( "You are over 18.")
    }
    console.log(`Your age: ${age} years.`)
    return age
}

function haveStockOrNot(product) {
    let product = window.prompt("What product will you buy?")
    product = product.toLowerCase()
    while (product != "orange" && product != "chicken" && product != "tomato") {
        product = window.prompt("Enter other product, we dont have that one (orange,chicken,tomato).")
        product = product.toLowerCase()
    }
    console.log(`Product: ${product}`)
    return product
}

function calculateTotalCost(orderQuantity) {
    let orderQuantity = window.prompt(`How much ${product} will you want?`)
    let unitPrice
    switch (product) {
        case "orange":
            unitPrice = 10
            break;
        case "chicken":
            unitPrice = 30
            break;
        case "tomato": 
            unitPrice = 20
    }
    return orderQuantity * unitPrice
} 

function determineAgeDiscount(age) {
    if (age > 60) {
        return 0.1
    } else {
        return 0
    }
}

function determineDiscountByPaymentMethod(paymentMethod) {
    let paymentMethod = window.prompt("How will you pay?")
    paymentMethod = paymentMethod.toLowerCase()
    while (paymentMethod != "cash" && paymentMethod != "card" && paymentMethod != "transfer") {
        paymentMethod = window.prompt("How will you pay?")
        paymentMethod = paymentMethod.toLowerCase()

    }
    if (paymentMethod === "cash") {
        return 0.1
    } else {
        return 0
    }
}

function showOrderTime() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours >= 12 && hours <= 14 ) {
        if (hours === 14 && minutes === 0) {
            console.log( "There may be delays as the order was placed during peak hours.")
        } else if (hours < 14) {
            console.log( "There may be delays as the order was placed during peak hours.")
        }
    }
}

function calculateValueCovered(cashDiscount,ageDiscount,totalValue) {
    let coveredValue = totalValue
    coveredValue  -= totalValue * cashDiscount 
    coveredValue -= totalValue * ageDiscount
    return coveredValue
}

function calculateTax(coveredValue){
    return coveredValue * 0.05
}

function showOrderSummary(totalValue, ageDiscount, cashDiscount,coveredValue,tax){
    console.log(`Costo total = ${totalValue}`)
    console.log(`Descuento aplicado = ${ageDiscount + cashDiscount}`)
    console.log(`Impuesto = ${tax}`)
    console.log(`Costo final = ${coveredValue + tax}`)
}


