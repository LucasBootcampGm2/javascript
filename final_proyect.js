
// Mostrar el resumen del pedido: Usar console.log para mostrar todos los detalles del pedido, incluyendo el costo total, el descuento aplicado, el impuesto, y el costo final.


function gestionarPedido(name,age,cantidadPedida, precioUnitario,metodoDePago,hora) {
    saludarCliente(name)
    esMayor(age)
    calcularCostoTotal(cantidadPedida,precioUnitario)
    DeterminarDescuentoPorPorage(age)
    DeterminarDescuentoPorMetodoDePago(metodoDePago)
    mostrarHoraDePedido(hora)
    calcularValorCubierto(descuentoEnEfectivo,descuentoPorage)
    mostrarResumenDelPedido()
}

function greetConsumer(name){
    return `Hola ${name}, bienvenido a Gm2, sera un gusto trabajar juntos!`
}

function isMayor(age) {
    if (age < 18) {
        console.warn("No puede beber bebidas alcoholicas")
    } else {
        return "Es mayor de age"
    }
}

function calcularCostoTotal(cantidadPedida,precioUnitario) {
    return cantidadPedida * precioUnitario
} 

function DeterminarDescuentoPorage(age) {
    if (age > 60) {
        let descuentoPorage = 0.1
        return descuentoPorage
    } else {
        return 0
    }
}

function DeterminarDescuentoPorMetodoDePago(metodoDePago) {
    if (metodo === "Efectivo") {
        let descuentoEnEfectivo = 0.1
        return descuentoEnEfectivo
    } else {
        return 0
    }
}

function mostrarHoraDePedido(hora) {
    if (hora >= 12 && hora <= 12) {
        return "Puede haber demoras, ya que el pedido se hizo en hora pico"
    }
}

function calcularValorCubierto(descuentoEnEfectivo,descuentoPorage) {
    let valorDelCubierto = calcularCostoTotal()
    valorDelCubierto  -= valorTotal * descuentoEnEfectivo 
    valorDelCubierto -= valorTotal * descuentoPorage
    valorDelCubierto += valorDelCubierto * 0.05
    return valorDelCubierto
}

function mostrarResumenDelPedido(){
    console.log(`Costo total = ${calcularCostoTotal()}`)
    console.log(`Descuento aplicado = ${DeterminarDescuentoPorage() + DeterminarDescuentoPorMetodoDePago()}`)
    console.log(`Impuesto = ${calcularValorCubierto() -= calcularValorCubierto * 0.05}`)
    console.log(`Costo final = ${calcularValorCubierto()}`)
}


gestionarPedido()
