// Declara un array llamado favoritemovies con tres elementos y muéstralo en la consola.
let favoritemovies = ["Deadpool", "Maze Runner", "300"]
console.log(favoritemovies)

// Accede y muestra en la consola el segundo elemento del array favoritemovies.
console.log(favoritemovies[1])

// Declara un array vacío llamado books y agrega tres elementos.
let books = []
books.push("Harry potter 1")
books.push("Harry potter 2")
books.push("Harry potter 3")
console.log(books)

// Elimina el último elemento del array books y muéstralo en la consola.
books.pop()
console.log(books)

// Declara un array llamado colors con cuatro elementos y muestra su longitud en la consola.
let colors = ["yellow", "purple", "orange", "red"]
console.log(colors)
console.log(`colors array length is ${colors.length}`)

// Del array de colors usando anteriormente, agrega 2 elementos al inicio del mismo y muéstralo en la consola.
colors.unshift("Black")
colors.unshift("White")
console.log(colors)

// Elimina el primer elemento del array colors y muéstralo en la consola.
colors.shift()
console.log(colors)

// Declara un array llamado fruits con tres elementos y verifica si contiene 'Manzana'. Muestra el resultado en la consola.
let fruits = ["orange", "strawberry", "apple"]
console.log(fruits.includes("apple"))

// Declara un array de numeros del 1 al 15 y encuentra el primer número mayor que 3 en el array numeros.
let numberOneToFifteen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let upperThree = numberOneToFifteen.find(function(num) {
    return num > 3
})

// Ecuentra todos los números menores que 4 en el array numeros.
let overFour = numberOneToFifteen.filter(function(num){
    return num < 4
})

// Declara una función llamada agregarElemento que acepte un array y un elemento como parámetros, agregue el elemento al final del array y devuelva la nueva longitud del array.

function addElement(array, element){
    array.push(element)
    return array.length
}
console.log(`The new lenght is ${addElement([1, 2 ,3 ,4], 5)}`)


// Declara una función llamada eliminarPrimerElemento que acepte un array como parámetro, elimine el primer elemento del array y devuelva el elemento eliminado.
function deleteFirstElement(array){
    return array.shift()
}
console.log(deleteFirstElement(["Hi", "Lucas"]))

// Declara una función llamada longitudArray que acepte un array como parámetro y devuelva la longitud del array mostrado en un mensaje como estee “La longitud de mi array es de [longitud]”.
function arrayLenght(array){
    console.log(`My array lenght is ${array.length}`)    
}
arrayLenght([1,1,1,1])

// Declara una función llamada verificarElemento que acepte un array y un elemento como parámetros, y devuelva true si el elemento está en el array o false si no lo está.
function elementVerification(array,element){
   return array.includes(element)
}

console.log(elementVerification([1,2,3,4], 1))

// Declara una función llamada encontrarElemento que acepte un array y un elemento como parámetros, y devuelva el primer elemento del array que sea igual al elemento dado. Si no se encuentra, devuelve undefined.
function findElement(array, element){
    let elementFind = array.find(function(x){
        return x === element
    })
    return elementFind
}
console.log(findElement([1,2,4,5], 5))

// Declara una función llamada filtrarArray que acepte un array y un número como parámetros, y devuelva un nuevo array con todos los elementos mayores al número dado.
function filterArray(array, number1){
    let newArray = array.filter(function(num){
        return num > number1
    });
    return newArray
}
console.log(filterArray([1,2,3,4], 2))

// Dado un array de números, verifica si todos son mayores que cero. Devuelve en consola el resultado
let numbers = [1,2,3,4,5]
let verificationUperCero = numbers.every(function(num) {
    return num > 0
});  
console.log(`Are all the numbers greater than cero ${verificationUperCero}`)

// Validar que todos los strings son no vacíos
let strings = ["Hi", "Lucas,", "welcome", "to", "Gm2", ""]
let emptyString = strings.every(function(string){
    return string.length > 0
})
console.log(`Are al the strings non-empty ${emptyString}`)

// Comprueba si todos los elementos en un array de strings contienen algún carácter. Devuelve en consola el resultado
let strings2 =  ["Hi", "Lucas,", "welcome", "to", "Gm2", ""]
let oneCharacterString = strings.every(function(string2){
    return string2.length >= 1
})
console.log(`Do all the strings contain some character? ${oneCharacterString}`)

// Confirmar que todos los estudiantes pasaron el examen:
// Comprueba si todos los estudiantes en un array tienen una calificación mayor o igual a 6. Devuelve en consola el resultado
// Ej: 
// [1,2,4,5,6,7,8,3,2,4,6]
// [6,7,8,9,10]
let students = [10,6,7,9,8,6]
let upperSix = students.every(function(student){
    return student >= 6
})
console.log(`Are all the students approved? ${upperSix}`)

// Verificar si todas las edades son de adultos:
// Dado un array de edades, verifica si todas las personas son mayores de 18 años.
let ages = [18, 17, 15]
let agesUpperEighteen = ages.every(function(age){
    return age >= 18
})
console.log(`Are all the people upper 18?: ${agesUpperEighteen}`)

// Comprobar si todos los números son divisibles por 5:
// Verificar si al menos un número en un array es mayor que 10.
let numbers2 = [1, 10, 20, 5, 3]
let divisibleByFive = numbers2.every(function(num2) {
    return num2 % 5 == 0
})
let upperTen = numbers2.every(function(num2){
    return num2 >= 10
})
console.log(`Are all divisible by five? ${divisibleByFive}`)
console.log(`Is there any number greater than ten? ${upperTen}`)

// Comprobar si al menos un string en un array está vacío.
let strings3 =  ["Hi", "Lucas,", "welcome", "to", "Gm2", ""]
let someEmptyString = strings3.some(function(string3){
    return string3.length === 0
})
console.log(`Is there any empty string? ${someEmptyString}`)

// Verificar si al menos un estudiante no pasó el examen (calificación menor a 6).
let students2 = [10,10,10,10,10,3]
let studentThatNotPass = students2.some(function(student2){
    return student2 < 6
})
console.log(`Is there any student who did not pass? ${studentThatNotPass}`)

// Comprobar si al menos una edad en un array corresponde a un adolescente (13-17 años).
let ages2 = [31,21,17,13,19]
let ageBetweenThirteenAndEighteen = ages.some(function(age2){
    return age2 >= 13 && age2 <= 17
})
console.log(`Is there any teenager betwwen thirteen and eighteen? ${ageBetweenThirteenAndEighteen}`)

