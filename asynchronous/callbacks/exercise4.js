function downloadAndReadManuals(part, callback) {
  console.log(`Downloading ${part} assembly manuals...`)

  setTimeout(() => {
    console.log(`${part} assembly manuals downloaded`)

    console.log(`Reading ${part} assembly manuals...`)

    setTimeout(() => {
      console.log(`${part} assembly manuals read`)
      callback(null, part)
    }, 3000)
  }, 5000)
}

function verificateAssemble() {
  let num = Math.floor(Math.random() * 10 + 1)
  return num <= 5
}

function assemblePart(part, callback) {
  console.log(`Assembling ${part}...`)

  setTimeout(() => {
    if (verificateAssemble()) {
      callback(`Error: failed to assemble ${part}`, null)
    } else {
      console.log(`${part} assembled`)
      callback(null, part)
    }
  }, 3000)
}

function handleError(err) {
  if (err) {
    console.error(err)
    return true 
  }
  return false 
}

downloadAndReadManuals("chip", (err, part) => {
  if (handleError(err)) return 

  assemblePart(part, (err) => {
    if (handleError(err)) return 

    downloadAndReadManuals("glass", (err, part) => {
      if (handleError(err)) return 

      assemblePart(part, (err) => {
        if (handleError(err)) return 

        downloadAndReadManuals("camera", (err, part) => {
          if (handleError(err)) return 

          assemblePart(part, (err) => {
            if (handleError(err)) return 

            console.log(`All parts assembled successfully.`)
          })
        })
      })
    })
  })
})
