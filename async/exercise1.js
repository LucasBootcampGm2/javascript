function assembleChip(callback) {
  setTimeout(() => {
    console.log("Assembling chip...")
    callback()
  }, 3000)
}
function assembleCamera(callback) {
  setTimeout(() => {
    console.log("Assembling camera...")
    callback()
  }, 3000)
}
function assembleGlass(callback) {
  setTimeout(() => {
    console.log("Assembling glass...")
    callback()
  }, 3000)
}

function assembleParts(callback1, callback2, callback3) {
  callback1(() => {
    callback2(() => {
      callback3(() => {
        console.log("All parts assembled")
      })
    })
  })
}

assembleParts(assembleChip, assembleGlass, assembleCamera)
