function askForPartInfo(part) {
  return new Promise((resolve) => {
    console.log(`Asking for ${part} info...`)
    setTimeout(() => {
      console.log(`Info recieved`)
      resolve(part)
    }, 3000)
  })
}

function assemblePart(part, time) {
  return new Promise((resolve) => {
    console.log(`Assembling ${part}...`)
    setTimeout(() => {
      console.log(`${part} assembled`)
      resolve()
    }, time)
  })
}

async function assembleAll() {
  try {
    await askForPartInfo("chip")
    await assemblePart("chip", 1000)
    await askForPartInfo("camera")
    await assemblePart("camera", 3000)
    await askForPartInfo("glass")
    await assemblePart("glass", 2000)
    console.log("All parts assembled")
  } catch (error) {
    console.error("Error: ", error)
  }
}
assembleAll()
