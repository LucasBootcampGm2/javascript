function askForPartInfo(part) {
  console.log(`Asking for ${part} info...`)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(part)
      console.log(`Info recieved`)
    }, 2000)
  })
}

function assembler(part) {
  console.log(`Assembling ${part}...`)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(part)
      console.log(`${part} assembled`)
    }, 3000)
  })
}

askForPartInfo("chip")
  .then((part) => assembler(part))
  .then(() => askForPartInfo("glass"))
  .then((part) => assembler(part))
  .then(() => askForPartInfo("camera"))
  .then((part) => assembler(part))
