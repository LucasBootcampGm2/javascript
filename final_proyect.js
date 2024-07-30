
// Mostrar el resumen del pedido: Usar console.log para mostrar todos los detalles del pedido, incluyendo el costo total, el descuento aplicado, el impuesto, y el costo final.


function manageOrdered(name,age,orderQuantity,unitPrice,paymentMethod, hour) {
    greetConsumer(name)
    isMayor(age)
    let totalValue = calculateTotalCost(orderQuantity,unitPrice)
    let ageDiscount = determineAgeDiscount(age)
    let cashDiscount = determineDiscountByPaymentMethod(paymentMethod)
    showOrderTime(hour)
    let coveredValue = calculateValueCovered(cashDiscount,ageDiscount,totalValue)
    showOrderSummary(totalValue, ageDiscount, cashDiscount,coveredValue)
}
manageOrdered("Lucas", 17, 2, 500, "Efectivo", 12)

function greetConsumer(name){
    return `Hola ${name}, bienvenido a Gm2, sera un gusto trabajar juntos!`
}

function isMayor(age) {
    if (age < 18) {
        console.warn("No puede beber bebidas alcoholicas")
    } else {
        return "Es mayor de edad"
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

function showOrderTime(hour) {
    if (hour >= 12 && hour <= 12) {
        return "Puede haber demoras, ya que el pedido se hizo en hour pico"
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


