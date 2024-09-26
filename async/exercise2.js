function askForPartInfo(callback, part) {
  console.log(`Asking for ${part} info...`)
  setTimeout(() => {
    console.log(`Info recieved`)
    callback(part)
  }, 10000)
}

function assemblePart(part, callback) {
  console.log(`Assembling ${part}...`)
  setTimeout(() => {
    console.log(`${part} assembled`)
    callback()
  }, 3000)
}

function assembleAll() {
  askForPartInfo((chip) => {
    assemblePart(chip, () => {
      askForPartInfo((glass) => {
        assemblePart(glass, () => {
          askForPartInfo((camera) => {
            assemblePart(camera, () => {
              console.log("All parts assembled")
            })
          }, "camera")
        })
      }, "glass")
    })
  }, "chip")
}


assembleAll()