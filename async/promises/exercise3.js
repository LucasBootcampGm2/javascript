function downloadAndReadManuals(part) {
  console.log(`Downloading ${part} assemble manuals`)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${part} assemble manuals downloaded`)

      console.log(`Reading ${part} assemble manuals`)

      setTimeout(() => {
        console.log(`${part} assemble manuals read`)
        resolve(part)
      }, 2000)
    }, 3000)
  })
}

function assembler(part) {
  console.log(`Assembling ${part}...`)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${part} assembled`)
      resolve(part)
    }, 3000)
  })
}

downloadAndReadManuals("chip")
  .then((part) => assembler(part))
  .then(() => downloadAndReadManuals("glass"))
  .then((part) => assembler(part))
  .then(() => downloadAndReadManuals("camera"))
