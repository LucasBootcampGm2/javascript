// Desafío: Generación de Pirámides Numéricas
// Instrucciones:
// Solicitar un número: Define un número n que determine la altura de la pirámide.
// Construir la pirámide:
// Escribe una función generarPiramide(n) que genere una pirámide de n niveles.
// La pirámide debe estar formada por secuencias de números. Comenzamos a contar desde 1, no desde 0. La función debe imprimir cada fila de la pirámide en la consola.
// Importante: Solo podes usar el bucle for, de lo contrario, el ejercicio está mal.
// Ejemplo:
// Si n = 5, la salida debe ser:
// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

function generatePyramid(n) {
  for (let i = 1; i <= n; i++) {
    let pyramid = "";
    for (let j = 1; j <= i; j++) {
      pyramid += j;
    }
    for (let k = i - 1; k >= 1; k--) {
      pyramid += k;
    }

    console.log(pyramid);
  }
}
generatePyramid(5);

// Desafío: Encuentra el Elemento Único
// Objetivo:
// Identificar el elemento único en un array donde todos los elementos, excepto uno, aparecen en pares.
// Instrucciones:
// Definir un array: El array numeros contiene enteros donde todos los elementos aparecen en pares, excepto uno que aparece solo una vez.
// Encontrar el elemento único:
// Escribe una función encontrarElementoUnico(numeros) que encuentre y devuelva el elemento que no tiene pareja.
// Importante: Solo pueden usar el bucle for, de lo contrario, el ejercicio esta mal
// Ejemplo:
let nums = [2, 3, 2, 5, 5, 6, 6]

function findUniqueElement(array) {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    let nums = []
    for (let j = i; j < array.length; j++) {
    }
  }
  return nums
}

console.log(findUniqueElement(nums)); // Debería imprimir 3


// Desafío: Crear un Array de Números en Escalera
// Objetivo:
// Crear un array de números en escalera donde cada fila contiene un número incrementado con respecto a la fila anterior.
// Imprimir el array en formato escalera.
// Instrucciones:
// Definir un número de filas: Por ejemplo, 5.
// Crear el array en escalera:
// Escribe una función crearArrayEscalera(n) que genere un array de n filas, donde cada fila contiene un número repetido incrementando en cada fila.
// Imprimir cada fila del array.
// Ejemplo:
// Si n = 4, el array en escalera debería ser:
//   [1]
//   [2, 2]
//   [3, 3, 3]
//   [4, 4, 4, 4]
function createLadderAray(n) {
  for (let i = 0; i < n; i++) {
    let ladder = [];
    for (let j = 0 ; j <= i; j++) {
      ladder[j] =  i+1
    }
    console.log(ladder);
  }
}
createLadderAray(4);
// SISTEMA DE ESTUDIANTES
// Inventario de Tienda con Filtrado y Agrupación por Categoría
// Descripción:
// Además de calcular el valor total de cada producto, la tienda ahora quiere agrupar los productos por categoría y obtener un informe detallado que incluya:
// El valor total del inventario por categoría.
// Los productos con un valor total mayor a un valor especificado (por ejemplo, 500 USD).
// Debes escribir un código que:
// Agrupe los productos por categoría.
// Calcule el valor total del inventario por cada categoría.
// Filtre los productos con un valor total mayor al valor especificado.
// Cree un objeto con el siguiente formato:

// {
//     categoria: 'Electrónica',
//     productos: [
//         { nombre: 'Laptop', cantidad: 4, valorTotal: 4000 },
//         // ...otros productos
//     ],
//     valorTotalCategoria: X
// }

// Finalmente, imprima el objeto resultante.

// Entrada :

// const productos = [
//     { nombre: 'Laptop', cantidad: 4, precioPorUnidad: 1000, categoria: 'Electrónica' },
//     { nombre: 'Teclado', cantidad: 10, precioPorUnidad: 50, categoria: 'Electrónica' },
//     { nombre: 'Mouse', cantidad: 20, precioPorUnidad: 25, categoria: 'Electrónica' },
//     { nombre: 'Monitor', cantidad: 5, precioPorUnidad: 200, categoria: 'Electrónica' },
//     { nombre: 'Silla', cantidad: 10, precioPorUnidad: 150, categoria: 'Muebles' },
//     { nombre: 'Escritorio', cantidad: 5, precioPorUnidad: 300, categoria: 'Muebles' }
// ];

// Salida esperada:

// [
//     {
//         categoria: 'Electrónica',
//         productos: [
//             { nombre: 'Laptop', cantidad: 4, valorTotal: 4000 },
//             { nombre: 'Monitor', cantidad: 5, valorTotal: 1000 }
//         ],
//         valorTotalCategoria: 6000
//     },
//     {
//         categoria: 'Muebles',
//         productos: [
//             { nombre: 'Escritorio', cantidad: 5, valorTotal: 1500 }
//         ],
//         valorTotalCategoria: 1500
//     }
// ]
