function newCalculation(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola numero: ${num}`)
      reject(num)
    }, 3000)
  })
}

async function okey(num) {
  try {
    const numMessage = (await newCalculation(num)) * 10
    console.log(numMessage)
  } catch (error) {
    console.log("Hubo un error: ", error)
  }
}

okey(10)
