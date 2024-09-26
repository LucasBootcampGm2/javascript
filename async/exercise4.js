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
      callback(null)
    }
  }, 3000)
}

function handleError(err) {
  if (err) {
    console.error(err)
    return
  }
}

downloadAndReadManuals("chip", (err, part) => {
  handleError(err)

  assemblePart(part, (err) => {
    handleError(err)

    console.log(`Process for ${part} completed.`)

    downloadAndReadManuals("glass", (err, part) => {
      handleError(err)

      assemblePart(part, (err) => {
        handleError(err)

        console.log(`Process for ${part} completed.`)

        downloadAndReadManuals("camera", (err, part) => {
          handleError(err)

          assemblePart(part, (err) => {
            handleError(err)

            console.log(`All parts assembled successfully.`)
          })
        })
      })
    })
  })
})
