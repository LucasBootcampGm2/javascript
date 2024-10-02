function assembler(part) {
  return new Promise((resolve) => {
    console.log(`Assembling ${part}...`)
    setTimeout(() => {
      console.log(`${part} assembled`)
      resolve(part)
    }, 3000)
  })
}

async function assemblerAll() {
  try {
    await assembler("chip")
    await assembler("camera")
    await assembler("glass")
    console.log("All assembled")
  } catch (error) {
    console.error("Error: ", error)
  }
}

assemblerAll()
