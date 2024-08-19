// 1- Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame. Ejecutarla.
    function saludar() {
        console.log("Hola, mundo!")
    }
    saludar()

// 2- Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.
    function despedirse() {
        console.log("Adios, mundo!")
    }
    despedirse()

// 3- Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva el cuadrado de ese número. Ejecutarla.
    function calcularCuadrado(n1) {
        return n1**2
    }
    let cuadradoDelNumero = calcularCuadrado(4)
    console.log(cuadradoDelNumero)

// 4- Escribir una funcion llamada minutosAHoras que reciba un número entero de minutos como parámetro, y devuelva un número representando la misma cantidad de tiempo pero en horas. 
    function minutosAHoras(n2) {
        return n2 / 60
    }

    let horasPorCantidadDeMinutos = minutosAHoras(180)
    console.log(horasPorCantidadDeMinutos)

// 5- Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola "Hola, " seguido del nombre.
    function saludarPersona(nombre) {
        return `Hola, ${nombre}`
    }
    let saludo = saludarPersona("Lucas")
    console.log(saludo)

// 6- Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.
    function sumarNumeros(n3, n4){
        return n3 + n4
    }
    let suma = sumarNumeros(10, 2)
    console.log(suma)

// 7- Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.
    function multiplicarNumeros(n5,n6,n7) {
        return n5 * n6 * n7
    }
    let producto = multiplicarNumeros(3,3,3)
    console.log(producto)

// 8- Escribir una funcion que se llame concatenar3, que reciba 3 strings como parametros. Definir dentro de la funcion una variable que se llame separador. La funcion debe devolver un solo string, concatenando los 3 ingresados como parametro y separados por el separador. 
    function concatenar3(s1, s2 , s3) {
        let separador = "-"
        return s1 + separador + s2 + separador + s3
    }
    let separador = concatenar3("Hola", "Hola", "Hola")
    console.log(separador)

// 9- Escribir una funcion llamada promedioDeCuatroNumero, que reciba 4 numeros como parametros y devuelva el promedio de los numeros introducidos.
    function promedioDeCuatroNumero(n8, n9, n10, n11){
        return (n8 + n9 + n10 + n11) / 4 
    }
    let promedio = promedioDeCuatroNumero(2, 2, 4, 4)
    console.log(promedio)

// 10- Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la consola "Mi nombre es [nombre] y tengo [edad] años."
    function presentarPersona(nombre, edad) {
        return `Mi nombre es ${nombre} y tengo ${edad} años`
    }
    let presentacion = presentarPersona("Lucas", 18)
    console.log(presentacion)

// 11- Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.
    function areaRectangulo(ancho, alto) {
        return ancho * alto
    }
    let area = areaRectangulo(2, 6)
    console.log(area)

// 12- Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de propina a dejar en base a cuanto salió el total de la comida. Comprobarlo asignando la función a una variable y mostrando en consola el valor de la misma. 
    function calcularPropina(n12) {
        return n12 += (n12*0.1)
    }
    let propina = calcularPropina(12000)
    console.log(propina)

// 13- Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y tarifaPorHora, y devuelva el salario calculado.   
    function calcularSalario(horasTrabajadas, tarifaPorHora){
        return horasTrabajadas * tarifaPorHora
    }
    let salario = calcularSalario(8, 2000)
    console.log(salario)

// 14- Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal. La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio con descuento y devuelve el resultado.
    function calcularDescuento(precioOriginal) {
        let descuento = 0.1
        return precioOriginal += (precioOriginal*descuento)
    }
    let precioConDescuento = calcularDescuento(14000)
    console.log(precioConDescuento)

// 15- Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver "positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.
    function evaluarNumero(num) {
        if (num > 0){
            return "positivo"
        } else if (num < 0) {
            return "negativo"
        } else {
            return "cero"
        } 
    }
    let numeroEvaluado = evaluarNumero(0)
    console.log(numeroEvaluado)

// 16- Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver "Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.
    function evaluarEdad(edad){
        if (evaluarEdad < 18) {
            return "Menor de edad"
        } else {
            return "Mayor de edad"
        }
    }

    let edadEvaluada = evaluarEdad(18)
    console.log(edadEvaluada)

// 17- Declara una función llamada esPar que acepte un número como parámetro. Si el número es par, debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".
    function esPar(n13) {
        if (n13 % 2 == 0) {
            return "El numero es par"
        } else {
            return "El numero es impar"
        }
    }
    let parONo = esPar(3)
    console.log(parONo)

// 18- Declara una función llamada compararNumeros que acepte dos números como parámetros. La función debe mostrar en la consola cuál de los dos números es mayor o si son iguales.
    function compararNumeros(n14,n15){
        if (n14 > n15) { 
            return `El primer numero, ${n14}, es mayor al segundo numero, ${n15}`
        } else if (n14 < n15) {
            return `El segundo numero, ${n15}, es mayor al primer numero, ${n14}`
        } else { 
            return `Los numeros, ${n14} y ${n15}, son iguales`
        }
    }
    let resultadoComparacion = compararNumeros(13, 15)
    console.log(resultadoComparacion)

// 19- Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe mostrar en la consola si la suma de los dos números es par o impar.
    function sumaEsPar(n16,n17) {
        let suma = n16 + n17
        if (suma % 2 == 0) {
            return "La suma es par"
        } else {
            return "La suma es impar"
        }
    }

    let sumaParONo = sumaEsPar(8,3)
    console.log(sumaParONo)

// 20- Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es positivo.
    function ambosPositivos(n18,n19) {
        if (n18 > 0 && n19 > 0) {
            return "Ambos son positivos"
        } else if (n18 > 0) {
            return `Solo uno es positivo, el ${n18}`
        } else if (n19 > 0) {
            return `Solo uno es positivo, el ${n19}`
        } else {
            return "Ninguno es positivo"
        }
    }
    let dosPositivosONo= ambosPositivos(-10, 1)
    console.log(dosPositivosONo)

// 21- Declara una función llamada calcularImpuesto que acepte un parámetro ingreso. Si el ingreso es menor de 10000, el impuesto es del 10%. Si es entre 10000 y 20000, el impuesto es del 15%. Si es mayor de 20000, el impuesto es del 20%. La función debe devolver el valor del impuesto.
    function calcularImpuesto(ingreso) {
        let impuesto
        if (ingreso < 10000) {
            impuesto = 10
        } else if (ingreso >= 10000 && ingreso <= 20000) {
            impuesto = 15
        } else {
            impuesto = 20
        }
        return impuesto
    }
    let impuesto = calcularImpuesto(23000)
    console.log(`El impuesto que se te cobrara es de ${impuesto}%`) 

// 22- Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más, devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y 69, devuelve "D". Si es menor de 60, devuelve "F".
    function clasificarNota(nota) {
        if (nota >= 90) {
            return "A"
        } else if (nota >= 80 && nota <= 89) {
            return "B"
        } else if (nota >= 70 && nota <= 79) {
            return "C"
        } else if (nota >= 60 && nota <= 69) {
            return "D"
        } else {
            return "F"
        }
    }
    let notaClasificada = clasificarNota(99)
    console.log(notaClasificada)
