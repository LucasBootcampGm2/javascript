
function manageOrdered(name,age,orderQuantity,unitPrice,paymentMethod) {
    greetConsumer(name)
    isMayor(age)
    let totalValue = calculateTotalCost(orderQuantity,unitPrice)
    let ageDiscount = determineAgeDiscount(age)
    let cashDiscount = determineDiscountByPaymentMethod(paymentMethod)
    showOrderTime()
    let coveredValue = calculateValueCovered(cashDiscount,ageDiscount,totalValue)
    let tax = calculateTax(coveredValue)
    showOrderSummary(totalValue, ageDiscount, cashDiscount,coveredValue,tax)
}
manageOrdered("Lucas", 66, 2, 500, "Efectivo")

function greetConsumer(name){
    console.log( `Hola ${name}, bienvenido a Gm2, sera un gusto trabajar juntos!`)
}

function isMayor(age) {
    if (age < 18) {
        console.warn("No puede beber bebidas alcoholicas")
    } else {
        console.log( "Es mayor de edad")
    }
}

function calculateTotalCost(orderQuantity,unitPrice) {
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
    if (paymentMethod === "Efectivo") {
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
            console.log( "Puede haber demoras, ya que el pedido se hizo en hora pico")
        } else if (hours < 14) {
            console.log( "Puede haber demoras, ya que el pedido se hizo en hora pico")
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


