function assembler(part, time) {
  return new Promise((resolve, reject) => {
    console.log(`Assembling ${part}...`)
    setTimeout(() => {
      console.log(`${part} assembled`)
      resolve(part)
    }, time)
  })
}
assembler()
  .then("chip", 3000, () => {})
  .then("camera", 5000, () => {})
  .then("glass", 2000, () => {})
