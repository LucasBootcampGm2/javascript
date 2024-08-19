
// Agregar elementos al final de un array:
// ● Crea un array vacío llamado numbers.
// ● Agrega los números del 1 al 5 al array.
// ● Imprime el array resultante.
// ● Eliminar el último elemento del array.

function addFiveNumbersToAnArray(){
    let numbers = []
    let number = 0 
    for (let i = 0; i < 5; i++) {
        number += 1
        numbers.push(number)
    }
    console.log(numbers)
    numbers.pop()
    console.log(numbers)
    return numbers
}
let addFiveResult = addFiveNumbersToAnArray() 

// Utiliza el array numbers del ejercicio anterior.
// ● Elimina el último número del array.
// ● Imprime el array resultante.
// ● Agregar elementos al principio del array.

function deleteLastNumberAndAddInTheBiginning() {
    addFiveResult.pop()
    console.log(addFiveResult)
    addFiveResult.unshift(23)
    addFiveResult.unshift(34)
    addFiveResult.unshift(54)
    console.log(addFiveResult)
}
deleteLastNumberAndAddInTheBiginning(addFiveResult)

// Crea un array vacío llamado colors, agregando cada elemento al principio del array.
// ● Agrega los siguientes colores al array en el siguiente orden: 'red', 'blue', 'green'.
// Eliminar el primer elemento de un array:

colors = []
colors.unshift("red", "blue", "green" )
console.log(colors)
colors.shift(colors)
console.log(colors)

// ● Utiliza el array colors del ejercicio anterior.
// ● Elimina el primer color del array.

colors.shift() 
console.log(colors)

// Agregar múltiples elementos al final de un array:
// ● Crea un array vacío llamado fruits.
// ● Agrega los siguientes elementos al array: 'apple', 'banana', 'orange'.

let fruits = []
fruits.push("apple", "banana", "orange")
console.log(fruits)

// Eliminar múltiples elementos al final de un array:
// ● Utiliza el array fruits del ejercicio anterior.
// ● Elimina los últimos dos elementos del array utilizando el método pop.

fruits.pop()
fruits.pop()
console.log(fruits)

// Agregar múltiples elementos al principio de un array:
// ● Utiliza el array fruits del ejercicio 5.
// ● Agrega los siguientes elementos al principio del array: 'grape', 'kiwi'.

fruits.unshift("grape","kiwi")
console.log(fruits)

// Eliminar múltiples elementos al principio de un array:
// ● Utiliza el array fruits del ejercicio anterior.
// ● Elimina los primeros dos elementos del array.

fruits.shift()
fruits.shift()
console.log(fruits)


// Agregar un elemento específico al final de un array:
// ● Utiliza el array colors del ejercicio 3.
// ● Agrega el color 'yellow' al final del array.

colors.push("yellow")
console.log(colors)

// Eliminar un elemento específico del principio de un array:
// ● Utiliza el array colors del ejercicio 9.
// ● Elimina el primer color del array.

colors.shift()
