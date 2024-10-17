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


// Hice varias pruebas y los ciclos for y while tardan casi el mismo tiempo en ejecutarse pero el forEach tardo un poco mas, por lo que investigue es debido a la sobrecarga que genera invocar una función de callback en cada iteración. Ademas el ciclo que se ejecuta primero habia veces que tardaba unos milisegundos más porque el motor de JavaScript puede estar "frío" al inicio. Segun decia el señor google es porque JS interpreta el codigo al ejecutarlo.


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

// Las variables locales son las mas rápidas porque están limitadas al ámbito de la función, lo que facilita al motor de JavaScript optimizarlas. Las variables globales se tienen que verificar en un ámbito más amplio y hay más procesamiento.

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
