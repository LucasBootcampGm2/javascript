// El objetivo de este ejercicio es analizar el rendimiento de distintos fragmentos de código y evaluar su eficiencia utilizando técnicas de benchmarking. Se deberá realizar ejemplos de operaciones comunes, como ciclos y manejo de variables, y se medirá el tiempo de ejecución de cada uno para comparar su performance.
// Para la medicion de tiempos se puede utilizar console.time (leer documentacion)
// console.time("for loop")
// console.timeEnd("for loop");
// Comparación de ciclos:

// Implementar un ciclo for, un ciclo while y un ciclo forEach que iteren sobre una lista de 1,000,000 elementos.

// For Loop
const forLoop = "For Loop";
console.time(forLoop);

const arrayFor = Array.from({ length: 1_000_000 }, (_, i) => i);
const arrayForLength = arrayFor.length;

for (let i = 0; i < arrayForLength; i++) {
  const result = arrayFor[i] * 2;
}
console.timeEnd(forLoop);

// While Loop
const whileLoop = "While Loop";
console.time(whileLoop);

const arrayWhile = Array.from({ length: 1_000_000 }, (_, i) => i);
const arrayWhileLength = arrayWhile.length;

let i = 0;
while (i < arrayWhileLength) {
  const result = arrayWhile[i] * 2;
  i++;
}
console.timeEnd(whileLoop);

// ForEach Loop
const forEachLoop = "For Each";
console.time(forEachLoop);

const arrayForEach = Array.from({ length: 1_000_000 }, (_, i) => i);

arrayForEach.forEach((element) => {
  const result = element * 2;
});
console.timeEnd(forEachLoop);

// Medir el tiempo de ejecución de cada uno y compáralos. ¿Qué ciclo es más rápido y por qué?
// Hice varias pruebas y los ciclos for y while tardan casi el mismo tiempo en ejecutarse pero el forEach tardo un poco mas, por lo que investigue es debido a la sobrecarga que genera invocar una función de callback en cada iteración. Ademas el ciclo que se ejecuta primero habia veces que tardaba unos milisegundos más porque el motor de JavaScript puede estar "frío" al inicio. Segun decia el señor google es porque JS interpreta el codigo al ejecutarlo.

// 2. Uso de variables:
// Crear dos versiones de una función que realice una operación matemática simple 1,000,000 veces: una donde utilices variables locales y otra donde utilices variables globales.

// Variables globales
let globalResult = 0;
console.time("Global Variables");

for (let i = 0; i < 1_000_000; i++) {
  globalResult += i;
}
console.timeEnd("Global Variables");

// Variables locales
console.time("Local Variables");

function sumWithLocalVariables() {
  let localResult = 0;
  for (let i = 0; i < 1_000_000; i++) {
    localResult += i;
  }
}
sumWithLocalVariables();
console.timeEnd("Local Variables");

// Medir el tiempo de ejecución de cada versión. ¿Cuál es más eficiente en términos de tiempo y por qué?

// Las variables locales son las mas rápidas porque están limitadas al ámbito de la función, lo que facilita al motor de JavaScript optimizarlas. Las variables globales se tienen que verificar en un ámbito más amplio y hay más procesamiento.

// 3. Optimización de código:
// Escribir una función que use concatenación de cadenas con el operador + y otra que use
// plantillas de cadena (template literals) en una operación repetitiva.
// Medir el tiempo de ejecución de ambas versiones. ¿Cuál es más rápida y cómo influye la cantidad de operaciones en el rendimiento?

const iterations = 1_000_000;

// Concatenación con +
console.time("Concatenation +");
let concatResult = "";
for (let i = 0; i < iterations; i++) {
  concatResult += "Texto " + i;
}
console.timeEnd("Concatenation +");

// Concatenación con Template Literals
console.time("Template Literals");
let templateResult = "";
for (let i = 0; i < iterations; i++) {
  templateResult += `Texto ${i}`;
}
console.timeEnd("Template Literals");

// Los Template Literals son más eficientes que + porque el motor de JavaScript optimiza las operaciones con plantillas pero tardan mas porque tiene que evaluar el contenido de ${}.
