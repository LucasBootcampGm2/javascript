function hireSomeone() {
  return new Promise((resolve) => {
    const userObject = {}
    resolve(userObject)
  })
}

async function askName(name) {
  try {
    const userObject = await hireSomeone()
    console.log("What's your name?")

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`My name is ${name}`)
        userObject.name = name
        resolve(userObject)
      }, 2000)
    })
  } catch (error) {
    console.log("What's your name?")
    console.error("Ai no spiken ingles")
  }
}

async function askGoals(name, goal) {
  try {
    const userObject = await askName(name)

    console.log("What is your short term goal?")

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`My short term goal is ${goal}`)
        console.log(`Welcome, new GM2 brother, ${userObject.name}`)
        userObject.goal = goal
        resolve(userObject)
      }, 2000)
    })
  } catch (error) {
    console.error("No entender ingles")
  }
}

askGoals(
  "Lucas",
  "work at GM2 while I study so I can be the best version of myself and take off as a professional."
).then((result) => {
  console.log("Final user object:", result)
})
