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
// Importante: Solo pueden usar el bucle for y maximo 2 if, de lo contrario, el ejercicio esta mal
// Ejemplo:
let nums = [8, 8, 2, 5, 5, 6, 6]

function findUniqueElement(array) {
  for (let i = 0; i < array.length; i++) {
    let isUnique = true;
    for (let j = 0; j < array.length; j++) {
        if (i !== j && array[i] === array[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        return array[i];
    }
  }
  return null;
}

console.log(findUniqueElement(nums)); 


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

let products = [
  { name: 'Laptop', amount: 4, unitePrice: 1000, category: 'Electrónica' },
  { name: 'Teclado', amount: 10, unitePrice: 50, category: 'Electrónica' },
  { name: 'Mouse', amount: 20, unitePrice: 25, category: 'Electrónica' },
  { name: 'Monitor', amount: 5, unitePrice: 200, category: 'Electrónica' },
  { name: 'Silla', amount: 10, unitePrice: 150, category: 'Muebles' },
  { name: 'Escritorio', amount: 5, unitePrice: 300, category: 'Muebles' }
];

function generateInventoryReport(products, minValue) {
  let report = [];
  let groupedByCategory = {};
  for (product of products) {
      let { category, name, amount, unitePrice } = product;
      let totalValue = amount * unitePrice;

      if (!groupedByCategory[category]) {
          groupedByCategory[category] = {
              categoria: category,
              productos: [],
              valorTotalCategoria: 0
          };
      }

      if (totalValue > minValue) {
          groupedByCategory[category].productos.push({
              nombre: name,
              cantidad: amount,
              valorTotal: totalValue
          });
          groupedByCategory[category].valorTotalCategoria += totalValue;
      }
  }

  for (let category in groupedByCategory) {
      report.push(groupedByCategory[category]);
  }

  return report;
}

let report = generateInventoryReport(products, 500);
console.log(report);

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
