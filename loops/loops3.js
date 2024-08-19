// Bootcamp 2024
// Loops | While - Do While
// 1. Escribe una función llamada contarGoles que reciba un array de goles anotados en un
// partido. Cada elemento del array es un objeto que tiene dos propiedades: equipo y jugador. Usa un bucle while para recorrer el array y contar cuántos goles anotó cada equipo.

let goles =[{equipo: 'Argentina', jugador: 'lionel messi'}, {equipo: 'Brasil', jugador: 'Neymar'}, {equipo: 'Argentina', jugador: 'Fideo'}]

function countGoals(array){
    let count = 0 
    let goalsTeam1 = 0
    let goalsTeam2= 0
    while(count < array.length){
        if (array[count].equipo === 'Argentina'){
            goalsTeam1++
        } else {
            goalsTeam2++
        }
        count++
    }
    return `The game finalize team one ${goalsTeam1} -  team two ${goalsTeam2}`
}
console.log(countGoals(goles))

// 2. Crea una función llamada contarToques que reciba un array con el nombre de los jugadores que tocan el balón en una jugada. Usa un bucle while para contar cuántos toques hubo antes de que el balón saliera del campo. La jugada termina cuando encuentres el string "fuera" en el array. 

let jugada = ["Messi", "Di Maria", "Doye", "fuera"];
function countTouchs(array){
    let count = 0
    let touchs = 0
    while(count < array.length){
        if (array[count] !== 'fuera'){
            touchs++
        } 
        count++
    }
    return touchs
}

console.log(`They make ${countTouchs(jugada)} touchs before the ball go out`)

// 3. Escribe una función llamada practicarSaques que simule los intentos de un jugador de voleibol para hacer un saque exitoso. Usa un bucle do while para que el jugador siga intentando hasta que consiga hacer un saque exitoso. Usa
// Math.random() para simular si el saque fue exitoso (considerando que la probabilidad de éxito es del 30%)
function practiceServes() {
    let random
    let count = 0
    let succesfulServes = 0
    do {
        random = Math.floor(Math.random() * 100 + 1)
        if (random > 30){
            succesfulServes++
        }
        count++
    } while(succesfulServes === 0)
    return count
}
console.log(`He did ${practiceServes()} serves before making an exit serve`)

// 4. Desde la terna arbitral de la AFA, el presidente Chiqui Mafia nos envía una lista con los jugadores que anotaron goles en un partido. Escribe una función llamada recuentoGoleadores que reciba una lista de jugadores que anotaron goles. Usa un bucle do while para contar cuántos jugadores ÚNICOS anotaron al menos un gol, y muestra el resultado en la consola.

let jugadoresQueAnotaron = ["Messi", "Di Maria", "Messi", "Riquelme", "Maradona"];
function scorerCount(array){
    let newArray = []
    let count = 0
    do {
        if(!newArray.includes(array[count])){
            newArray.push(array[count])
        }
        count++
    } while(count < array.length)
    return newArray.length
}
console.log(`there are ${scorerCount(jugadoresQueAnotaron)} players that scored at least one goal `)

// 5. En un clásico Boca vs. River, se quiere analizar el rendimiento de algunos jugadores clave. Tienes un objeto llamado rendimientoJugadores que almacena el nombre de cada jugador y la cantidad de kilómetros recorridos durante el partido. Crea una función analizarRendimiento que use un bucle while para recorrer el objeto y mostrar en la consola qué jugadores recorrieron más de 10 kilómetros.
let rendimientoJugadores = { "Enzo Pérez": 11.5, "Frank Fabra": 9.8, "Nicolás De La Cruz": 12.3, "Cristian Medina": 10.2 };

function analyzePerformance(object){
    let k = Object.values(object)
    let count = 0
    let outOf10 = 0
    while (count < k.length){
        if (k[count] > 10){
            outOf10++
        }
        count++
    }
    return outOf10
}

console.log(analyzePerformance(rendimientoJugadores))


// 7. Imagina que estás desarrollando un carrito de compras para una página web. Tienes un array de objetos productos, donde cada objeto representa un producto con su nombre y precio. Escribe una función calcularTotal que recorra el array usando un bucle while y calcule el precio total de los productos en el carrito. Muestra el total en la consola.
let products = [{name: 'ball', price: 1800}, {name: 'table', price: 12200}, {name: 'palet', price: 13300}]
function calculateTotal(array){
    let count = 0
    let totalPrice = 0
    while(count < array.length) {
        totalPrice += array[count].price
        count++
    } 
    return totalPrice
}
console.log(calculateTotal(products))

// 8. Imagina que estás validando las entradas de un formulario en una página web. Tienes un array datosIngresados que contiene valores que el usuario ingresó. Escribe una función validarEntradas que recorra los datos usando un bucle do while para verificar que todos los campos sean válidos (por ejemplo, que no estén vacíos). Si todos los campos son válidos, muestra un mensaje en la consola indicando "Formulario válido", de lo contrario, muestra "Formulario inválido".
let inputData = [undefined, "wwwe", 23, 23223322, null]

function validateEntries(array){
    let count = 0
    do {
        if(inputData[count] === undefined || inputData[count] === null){
            return 'Invalid form'
        }
        count++
    } while (count < array.length)
    return 'Valid form'
}
console.log(validateEntries(inputData))

// 9. Imagina que estás manejando una sección de comentarios en una página web. Tienes un array de objetos comentarios, donde cada objeto tiene un usuario y un comentario. Escribe una función mostrarComentarios que recorra el array usando un bucle while y muestre cada comentario en la consola.
let comments = [{user: 'Seba', comment: 'Hi lucas, welcome to Gm2'},{user: 'Lucas', comment: 'It will be a pleasure to work with you'}]
function showComments(array){
    let count = 0
    while(count < array.length){
        console.log(`${comments[count].user}: ${comments[count].comment}`)
        count++
    }
    return
}
showComments(comments)


// 10. Imagina que estás creando una barra de progreso para una página web. La barra de progreso se llena a medida que se completa una tarea. Escribe una función simularProgreso que use un bucle do while para simular el avance de la barra, incrementando el progreso en un 10% en cada iteración hasta que alcance el 100%. Muestra el progreso en la consola en cada paso.
function simularProgreso() {
    let progress = 0;

    do {
        console.log(`Progress: ${progress}%`);
        progress += 10;
    } while (progress < 100);

    console.log(`Progress: 100% - Task completed!`);
}

simularProgreso();


// 11. Imagina que estás diseñando una función de filtrado para una tienda en línea. Tienes un array de objetos productos, donde cada objeto tiene un nombre, categoría, y precio. Escribe una función filtrarPorCategoria que recorra el array usando un bucle while y devuelva un nuevo array con los productos que pertenecen a una categoría específica. Muestra los productos filtrados en la consola.

let products1 = [{name: 'Table', category: 'Furniture', price: 1212}, {name: 'Lamp', category: 'Furniture', price: 300},{name: 'Iphone', category: 'Appliances', price: 12000000},{name: 'Mac', category: 'Appliances', price: 12000000}]

function filterProductsByCategory(array,category){
    let count = 0
    let newArray = []
    while(count < array.length) {
        if(array[count].category === category){
            newArray.push(array[count])
        }
    count++
    }
    return newArray
}

console.log(filterProductsByCategory(products1, 'Furniture'))
console.log(filterProductsByCategory(products1, 'Appliances'))