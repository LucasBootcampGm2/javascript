function assembler(part, callback) {
  console.log(`Assembling ${part}...`)
  setTimeout(() => {
    console.log(`${part} assembled...`)
    callback(part)
  }, 3000)
}

assembler("chip", () => {
  assembler("camera", () => {
    assembler("glass", () => {
      console.log("All parts assembled")
    })
  })
})
