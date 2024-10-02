function downloadManuals(part) {
  return new Promise((resolve) => {
    console.log(`Downloading ${part} assemble manuals`)

    setTimeout(() => {
      console.log(`${part} assemble manuals downloaded`)
      resolve()
    }, 3000)
  })
}

function readManuals(part) {
  return new Promise((resolve) => {
    console.log(`Reading ${part} assemble manuals`)

    setTimeout(() => {
      console.log(`${part} assemble manuals read`)
      resolve()
    }, 2000)
  })
}

function verificateAssemble(part) {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10 + 1)
    if (num <= 5) {
      reject(`Error assembling ${part}`)
    } else {
      resolve()
    }
  })
}

async function assemblePart(part, time) {
  await downloadManuals(part)
  await readManuals(part)
  await verificateAssemble(part)
  console.log(`Assembling ${part}...`)
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${part} assembled`)
      resolve()
    }, time)
  })
}

async function assembleAll() {
  try {
    await assemblePart("chip", 1000)
    await assemblePart("camera", 3000)
    await assemblePart("glass", 4000)
  } catch (error) {
    console.log("Error: ", error)
  }
}

assembleAll()
