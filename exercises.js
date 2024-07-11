
//TP Variables JS

// Exercise 1
let firstName = "Lucas"
console.log(firstName)

// Exercise 2
let age = 18
console.log(age)

// Exercise 3
const isMan = true
console.log(isMan)

// Exercise 4
let names = "Lucas"
let lastName = " Cirillo Berardi" 
let result = names + lastName
console.log(result)


// Exercise 5
let number1 = 1
let number2 = 2

    // Exercise 5a  
    let addition = number1 + number2

    // Exercise 5b
    let substraction = number1 - number2

    // Exercise 5c
    let multiplication = number1 * number2

    // Exercise 5d
    let division = number1 / number2

    // Exercise 5e
    let module = number1 % number2

// Exercise 6
let name3 = "Lucas"
let number3 = 18
let result2 = name3 + number3
console.log(result2) // La tercera variable sera de tipo string

// Exercise 7
let trueValue = true
let falseValue =! trueValue

// Exercise 8
let number4 = 1
console.log(number4)

    // Exercise 8a
    number4++ 
    console.log(number4) 

    // Exercise 8b
    number4 += 1

    // Exercise 8c
    number4 -= 1 
    number4 *= 1 
    number4 /= 1 
    number4 = number4 - 1
    number4 = number4 * 1
    number4 = number4 / 1

// Exercise 9
const test = 2
//test = 3
console.log(test) // Recibo que ya esta declarada y, por tanto, me tira error

// Exercise 10
let string1 = "Hola"
let string2 = "Mundo"
let int1 = 1
let int2 = 2

    // Exercise 10a
    let valor = string1 + string2 + int1 + int2
    console.log(valor)

    // Exercise 10b
    let valor2 = ""
    valor2 = valor2.concat(string1 + " " + string2 + " " + int1 + " " + int2 + "soy valor 2")
    console.log(valor2)

// Exercise 11
let number5 = 5
let number6 = 6

    // Exercise 11a
    let b1 = number5 - number6 == 0
    let b2 = number5 * number6 == 0
    let b3 = number5 / number6 == 0
    let b4 = number5 % number6 == 0

// Exercise 12
let string3 = `${10 + 5}`
let string4 = `${10 - 7}`
let string5 = `${10 / 5}`
let string6 = `${10 * 2}`
let string7 = `${10 % 3}`

// Exercise 13
let bill = 15000
let bill_percent = prompt("Enter the percent number you would like to leave")
let tip = bill * bill_percent / 100

// Exercise 14
let product_price = 20000
let discount = 20
let final_price = product_price - product_price * discount/100

// Exercise 15
let current_year = 2024
const birth_year = prompt("Enter the year you were born")
let current_age = current_year - birth_year

// Exercise 16
let circle_radio = prompt("Enter the radio of the circle")
let circle_area = 3.14 * (r ** 2)

let square_side = prompt("Enter the size of the square side")
let square_area = square_side ** 2

let triangle_base = prompt("Enter the size of the triangle base")
let triangle_height = prompt("Enter the triangle height")
let triangle_area = triangle_base * triangle_height / 2