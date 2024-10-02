function downloadManuals(part) {
  return new Promise((resolve) => {
    console.log(`Downloading ${part} assemble manuals`)

    setTimeout(() => {
      console.log(`${part} assemble manuals downloaded`)
      resolve(part)
    }, 3000)
  })
}

function readManuals(part) {
  return new Promise((resolve) => {
    console.log(`Reading ${part} assemble manuals`)

    setTimeout(() => {
      console.log(`${part} assemble manuals read`)
      resolve(part)
    }, 2000)
  })
}

function assemblePart(part) {
  return new Promise((resolve) => {
    console.log(`Assembling ${part}...`)
    setTimeout(() => {
      console.log(`${part} assembled`)
      resolve()
    }, 3000)
  })
}

async function assembleAll() {
  try {
    await downloadManuals("chip")
    await readManuals("chip")
    await assemblePart("chip")
    await downloadManuals("glass")
    await readManuals("glass")
    await assemblePart("glass")
    await downloadManuals("camera")
    await readManuals("camera")
    await assemblePart("camera")
    console.log("All assembled")
  } catch (error) {
    console.log("Error: ", error)
  }
}

assembleAll()
