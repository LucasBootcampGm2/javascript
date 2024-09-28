function assembler(part, time) {
  return new Promise((resolve) => {
    console.log(`Assembling ${part}...`)
    setTimeout(() => {
      console.log(`${part} assembled`)
      resolve(part)
    }, time)
  })
}
assembler("chip", 3000)
  .then(() => assembler("glass", 1000))
  .then(() => assembler("camera", 5000))
