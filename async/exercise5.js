function downloadAndReadManuals(part, callback) {
  console.log(`Downloading ${part} assembly manuals...`)

  setTimeout(() => {
    console.log(`${part} assembly manuals downloaded`)
    console.log(`Reading ${part} assembly manuals`)

    setTimeout(() => {
      console.log(`${part} assembly manuals read`)
      callback(null, part)
    }, 3000)
  }, 5000)
}

function assembleVerification() {
  return Math.random() <= 0.3
}

function handleError(err) {
  if (err) {
    console.error(err)
    return
  }
}

function assemblePart(part, time, callback) {
  console.log(`Assembling ${part}...`)

  setTimeout(() => {
    if (assembleVerification()) {
      callback(`Error: failed to assemble ${part}`, part)
    } else {
      console.log(`${part} assembled`)
      callback(null, part)
    }
  }, time)
}

downloadAndReadManuals("Glass", (err, part) => {
  handleError(err)

  assemblePart(part, 3000, (err) => {
    handleError(err)

    downloadAndReadManuals("Camera", (err, part) => {
      handleError(err)

      assemblePart(part, 5000, (err) => {
        handleError(err)

        downloadAndReadManuals("Chip", (err, part) => {
          handleError(err)

          assemblePart(part, 6000, (err) => {
            handleError(err)

            downloadAndReadManuals("Microphone", (err, part) => {
              handleError(err)

              assemblePart(part, 9000, (err) => {
                handleError(err)
              })
            })
          })
        })
      })
    })
  })
})
