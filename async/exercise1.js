function assemblePart(part, callback) {
  console.log(`Assembling ${part}...`)
  setTimeout(() => {
    console.log(`${part} assembled...`)
    callback(part)
  }, 3000)
}

function assembleAll() {
  assemblePart("chip", () => {
    assemblePart("camera", () => {
      assemblePart("glass", () => {
        console.log("All parts assembled")
      })
    })
  })
}

assembleAll()
