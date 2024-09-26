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
    return true
  }
  return false
}

function assemblePart(part, time, callback) {
  console.log(`Assembling ${part}...`)

  setTimeout(() => {
    if (assembleVerification()) {
      callback(`Error: failed to assemble ${part}`, null)
    } else {
      console.log(`${part} assembled`)
      callback(null, part)
    }
  }, time)
}

downloadAndReadManuals("Glass", (err, part) => {
  if (handleError(err)) return

  assemblePart(part, 3000, (err) => {
    if (handleError(err)) return

    downloadAndReadManuals("Camera", (err, part) => {
      if (handleError(err)) return

      assemblePart(part, 5000, (err) => {
        if (handleError(err)) return

        downloadAndReadManuals("Chip", (err, part) => {
          if (handleError(err)) return

          assemblePart(part, 6000, (err) => {
            if (handleError(err)) return

            downloadAndReadManuals("Microphone", (err, part) => {
              if (handleError(err)) return

              assemblePart(part, 9000, (err) => {
                if (handleError(err)) return
              })
            })
          })
        })
      })
    })
  })
})
