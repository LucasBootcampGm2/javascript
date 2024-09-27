function downloadAndReadManuals(part) {
  console.log(`Downloading ${part} assembly manuals...`)

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${part} assembly manuals downloaded`)

      console.log(`Reading ${part} assembly manuals...`)

      setTimeout(() => {
        console.log(`${part} assembly manuals read`)
        resolve(part)
      }, 3000)
    }, 5000)
  })
}

function verificateAssemble() {
  let num = Math.random
  return num <= 0.3
}

function assembler(part, time) {
  console.log(`Assembling ${part}...`)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (verificateAssemble()) {
        reject(`Error: failed to assemble ${part}`)
      } else {
        console.log(`${part} assembled`)
        resolve(part)
      }
    }, time)
  })
}

function handleError(err) {
  console.error(err)
}

downloadAndReadManuals("chip")
  .then((part) => assembler(part, 2000))
  .then(() => downloadAndReadManuals("glass"))
  .then((part) => assembler(part, 3000))
  .then(() => downloadAndReadManuals("camera"))
  .then((part) => assembler(part, 4000))
  .then(() => console.log("All parts Assembled"))
  .catch(handleError)
