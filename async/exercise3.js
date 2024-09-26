// Ejercicio 3: Obtener manuales de ensamblaje
// Descripción: Antes de ensamblar ciertas partes más complejas del dispositivo, necesitas leer
// los manuales de ensamblaje. Estos manuales tardan en descargarse y leerse, y debes
// obtenerlos en un orden específico para poder continuar.
// Instrucciones:
// 1. Simula la descarga y lectura de tres manuales de ensamblaje, cada uno en un orden
// específico.
// 2. Usa setTimeout para simular el tiempo que tarda en descargarse y leerse cada
// manual.
// 3. Cada manual debe leerse antes de continuar con la lectura del siguiente, utilizando
// callbacks para controlar el flujo.

function downloadAndReadManuals(callback, part) {
  console.log(`Downloading ${part} assemble manuals`)

  setTimeout(() => {
    console.log(`${part} assemble manuals downloaded`)

    console.log(`Reading ${part} assemble manuals`)

    setTimeout(() => {
      console.log(`${part} assemble manuals read`)
      callback(part)
    })
  }, 5000)
}

function assemblePart(part, callback) {
  console.log(`Assembling ${part}...`)
  setTimeout(() => {
    console.log(`${part} assembled`)
    callback()
  }, 3000)
}

downloadAndReadManuals((part) => {
  assemblePart(part, () => {
    downloadAndReadManuals((part) => {
      assemblePart(part, (part) => {
        downloadAndReadManuals((part) => {
          assemblePart(part, (part) => {
            console.log("All parts assembled by reading manuals")
          })
        }, "camera")
      })
    }, "glass")
  })
}, "chip")
