// TP CONDICIONALES JS
// If:
    // Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.
    let A = 3
    let B = 2
    if (A > B) {
        console.log("El número A es mayor a B")
    }
    
    // Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.
    let age = 20
    let ref_num = 18
    if (age > ref_num) {
        console.log("Tiene edad mayor al numero de referencia")
    }
    
    // Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
    let num1 = 4
    let num2 = 4
    if (num1===num2) {
        console.log(true)
    }

    // Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.
    let name1 = "Lucas"
    let name2 = "Lucas"
    if (name1 === name2) {
        console.log(name1)
    }
    
    // Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.
    let name3 = "Jorge"
    let name4 = "Roman"
    if (name3 !== name4) {
        console.log("Los nombres son distintos")
    }
    
    // Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.
    let negative_num = -3
    if (negative_num < 0) {
        console.log(negative_num)
    } 

    // Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.
    let positive_num = 3
    if (positive_num >= 0) {
        console.log(positive_num)
    } 

// If…else:

    // Crea un bloque de código que reciba un numero. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.
    let num3 = 3
    if (num3 % 2 == 0) {
        console.log("El número es par")
    } else {
        console.log("El número es impar")
    }
    
    // Crea un bloque de código que reciba un número y luego imprima en consola si es positivo o negativo.
    let num4 = -1
    if (num4 < 0) {
        console.log("Es negativo")
    } else {
        console.log("Es positivo")
    }

    // Crea una función que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.
    let string1 = "l"
    function isVocal(string1) {
        if (string1 === "a" || string1 === "e" || string1 === "i" || string1 === "o" || string1 === "u") {
            console.log("Es vocal")
        } else {
            console.log("Es consonante")
        }
    }    
    isVocal(string1)

    // Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.
    // let name5 = prompt("Ingrese su nombre")
    // if (name5 == "Pedro") {
    //     console.log("Hola Pedro, como estás")
    // } else {
    //     console.log("Hola! Cómo te llamas?")
    // }

    // Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.
    let grade = 7
    if (grade >= 7) {
        console.log("Estas aprobado")
    } else {
        console.log("Estas desaprobado")
    }

// Else if:

    // Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.
    let num5 = 15
    if (num5 < 10) {
        console.log("El numero es menor a 10")
    } else if (num5 > 50) {
        console.log("El numero es mayor a 50")
    } else if (num5 >= 10 && num5 <= 50) {
        console.log("El numero es mayor a 10 pero menor que 50")
    }

    // Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.
    let num6 = 10
    let num7 = 15
    if (num6 < 10 && num7 < 10) {
        console.log(num6 * num7)
    } else if (num6 > 50 && num7 > 50){
        console.log(num6 + num7)
    } else {
        console.log(num6 - num7)
    }

    // Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. 
    let day = Math.floor(Math.random() * 7)
    if (day == 0) {
        console.log("Es domingo")
    } else if (day == 1) {
        console.log("Es lunes")
    } else if (day == 2) {
        console.log("Es martes")
    } else if (day == 3) {
        console.log("Es miercoles")
    } else if (day == 4) {
        console.log("Es jueves")
    } else if (day == 5) {
        console.log("Es viernes")
    } else if (day == 6) {
        console.log("Es sabado")
    }  

    // Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.
    let num8 = 6
    if (num8 % 2 == 0 && num8 % 3 == 0 ) {
        console.log("Es divisible por 2 y por 3")
    } else if (num8 % 2 == 0){
        console.log("Es divisible por 2")
    } else if (num8 % 3 == 0){
        console.log("Es divisible por 3")
    } else {
        console.log("No es divisible por ninguno")
    }

    // Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.
    let month = Math.floor(Math.random() * 12)
    if (month == 0) {
        console.log("Es enero")
    } else if (month == 1) {
        console.log("Es febrero")
    } else if (month == 2) {
        console.log("Es marzo")
    } else if (month == 3) {
        console.log("Es abril")
    } else if (month == 4) {
        console.log("Es mayo")
    } else if (month == 5) {
        console.log("Es junio")
    } else if (month == 6) {
        console.log("Es julio")
    } else if (month == 7) {
        console.log("Es agosto")
    } else if (month == 8) {
        console.log("Es septiembre")
    } else if (month == 9) {
        console.log("Es octubre")
    } else if (month == 10) {
        console.log("Es noviembre")
    } else if (month == 11) {
        console.log("Es diciembre")
    }  

// Switch:

    // Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.
    let switch_Day 
    switch (new Date().getDay()) {
        case 0:
            switch_Day = "Sunday";
            break;
        case 1:
            switch_Day  = "Monday";
            break;
        case 2:
            switch_Day  = "Tuesday";
            break;
        case 3:
            switch_Day = "Wednesday";
            break;
        case 4:
            switch_Day  = "Thursday";
            break;
        case 5:
            switch_Day = "Friday";
            break;
        case 6:
            switch_Day = "Saturday";
      }
      console.log(switch_Day)

    
    // Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.
    let leter = "X"
    let gen 
    switch (leter) {
        case "H":
            console.log("Es Hombre")  
            break;
        case "M":
            console.log("Es Mujer")  
            break;
        case "X":
            console.log("Es indefinido")
            break;
        default:
            console.log("No se encuentra su genero")
    }


    // Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda. 
    let num9 = 11
    switch (num9) {
        case 1:
            console.log(1)
            break;
        case 2:
            console.log(2)
            break;
        case 3:
            console.log(3)
            break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            console.log("Es mayor a 3")
            break;
        default:
            console.log("Su numero no esta entre 1 y 10")
    }

    // Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.
    let letter2 = "l"
    switch (letter2) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Es vocal")
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            console.log("Es consonante")
            break;
        default: 
            console.log("Es un caracter especial")
    }

    // Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.
    let num10 = 4
    switch (num10) {
        case 1:
            console.log("Es verano")
        case 1:
            console.log("Es otoño")
        case 1:
            console.log("Es invierno")
        case 4:
            console.log("Es primavera")
        default:
            console.log("Hay 4 estaciones del año")
        }

// Operador ternario:

    // Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.
        
    // Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.
    // Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor. Luego imprime en consola el resultado.
    // Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador ternario para imprimir en consola el día de la semana correspondiente.
    // Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.
    // Crea un bloque de código que tome de referencia un número del 1 al 100 y utilice el operador ternario para determinar si es múltiplo de 3 y 5 para imprimir el resultado en consola.

// Prácticas: 

// Crea un bloque de código que tome de referencia un número del 1 al 100 y, utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 incluyendo las diferentes combinaciones posibles.
// Crea un bloque de código que reciba un numero del 1 al 1000. Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar, si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.
// Desarrolla 10 nuevas situaciones en donde requieras de utilizar condicionales para su resolución.
