// Imagina que estás desarrollando una plataforma de venta de entradas para un evento en línea. Tenes un sistema básico donde los usuarios pueden comprar entradas. Sin embargo, varias personas pueden intentar comprar la misma cantidad de entradas al mismo tiempo, lo que puede provocar inconsistencias en la cantidad de entradas disponibles debido a las “race conditions”.

// Requerimientos:

// Hay un total de 10 entradas disponibles.

// Varias solicitudes pueden llegar al servidor al mismo tiempo para comprar entradas.

// El sistema debe garantizar que no se vendan más de las 10 entradas disponibles.

// Tareas:

// Escribir una simulación en JavaScript (puede ser en un entorno Node.js) donde múltiples usuarios intenten comprar entradas al mismo tiempo.

// Usar la función setTimeout para simular las solicitudes concurrentes. Cada usuario intentará comprar entradas con un retraso aleatorio.

// Crear una función que se encargue de la compra, que reciba la cantidad de entradas solicitadas y actualice el número total de entradas disponibles.

// Detectar el problema: Ver qué sucede cuando varios usuarios intentan comprar al mismo tiempo y cómo las entradas pueden ser vendidas en exceso (race condition).

// Solucionar la race condition: Proponer y aplicar una solución para evitar que las entradas disponibles se vendan en exceso. Se puede utilizar una de las siguientes estrategias:

// Uso de bloqueos (locks) para asegurar que solo una solicitud pueda procesar la compra a la vez.

// Implementar algún tipo de sincronización entre las solicitudes.

// Alternativamente, puedes implementar promesas que aseguren que la actualización del stock sea atómica.
let contador = 0;
let lock = false;
function incrementarContador() {
  while (lock) {
    true;
  }
  setTimeout(() => {
    lock = true;
    const valorActual = contador;
    console.log(`Valor actual leído: ${valorActual}`);
    setTimeout(() => {
      const nuevoValor = valorActual + 1;
      contador = nuevoValor;
      console.log(`Nuevo valor almacenado: ${nuevoValor}`);
      lock = false;
    }, 200); 
  }, Math.random() * 200);
}

incrementarContador();
incrementarContador();
console.log(`Operación finalizada, valor final del contador: ${contador}`);