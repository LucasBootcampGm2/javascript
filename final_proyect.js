
// Mostrar el resumen del pedido: Usar console.log para mostrar todos los detalles del pedido, incluyendo el costo total, el descuento aplicado, el impuesto, y el costo final.


function gestionarPedido(nombre,edad,cantidadPedida, precioUnitario,metodoDePago,hora) {
    saludarCliente(nombre)
    esMayor(edad)
    calcularCostoTotal(cantidadPedida,precioUnitario)
    DeterminarDescuentoPorPorEdad(edad)
    DeterminarDescuentoPorMetodoDePago(metodoDePago)
    mostrarHoraDePedido(hora)
    calcularValorCubierto(descuentoEnEfectivo,descuentoPorEdad)
    mostrarResumenDelPedido()
}

function saludarCliente(nombre){
    return `Hola ${nombre}, bienvenido a Gm2, sera un gusto trabajar juntos!`
}

function esMayor(edad) {
    if (edad < 18) {
        console.warn("No puede beber bebidas alcoholicas")
    } else {
        return "Es mayor de edad"
    }
}

function calcularCostoTotal(cantidadPedida,precioUnitario) {
    return cantidadPedida * precioUnitario
} 

function DeterminarDescuentoPorEdad(edad) {
    if (edad > 60) {
        let descuentoPorEdad = 0.1
        return descuentoPorEdad
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

function calcularValorCubierto(descuentoEnEfectivo,descuentoPorEdad) {
    let valorDelCubierto = calcularCostoTotal()
    valorDelCubierto  -= valorTotal * descuentoEnEfectivo 
    valorDelCubierto -= valorTotal * descuentoPorEdad
    valorDelCubierto += valorDelCubierto * 0.05
    return valorDelCubierto
}

function mostrarResumenDelPedido(){
    console.log(`Costo total = ${calcularCostoTotal()}`)
    console.log(`Descuento aplicado = ${DeterminarDescuentoPorEdad() + DeterminarDescuentoPorMetodoDePago()}`)
    console.log(`Impuesto = ${calcularValorCubierto() -= calcularValorCubierto * 0.05}`)
    console.log(`Costo final = ${calcularValorCubierto()}`)
}


gestionarPedido()
