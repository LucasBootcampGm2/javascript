
function manageOrdered(name,age,orderQuantity,unitPrice,paymentMethod) {
    greetConsumer(name)
    isMayor(age)
    let totalValue = calculateTotalCost(orderQuantity,unitPrice)
    let ageDiscount = determineAgeDiscount(age)
    let cashDiscount = determineDiscountByPaymentMethod(paymentMethod)
    showOrderTime()
    let coveredValue = calculateValueCovered(cashDiscount,ageDiscount,totalValue)
    showOrderSummary(totalValue, ageDiscount, cashDiscount,coveredValue)
}
manageOrdered("Lucas", 17, 2, 500, "Efectivo", 12)

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
    coveredValue += coveredValue * 0.05
    return coveredValue
}

function showOrderSummary(totalValue, ageDiscount, cashDiscount,coveredValue){
    console.log(`Costo total = ${totalValue}`)
    console.log(`Descuento aplicado = ${ageDiscount + cashDiscount}`)
    console.log(`Impuesto = ${coveredValue = coveredValue - (coveredValue  * 0.05)}`)
    console.log(`Costo final = ${coveredValue}`)
}


