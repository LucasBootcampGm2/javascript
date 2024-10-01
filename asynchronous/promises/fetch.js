const main = document.getElementById("main")
const table = document.getElementById("users-table")
main.append(table)

const tbody = document.getElementById("tbody")

const loading = document.getElementById("loading")
loading.classList.remove("hidden")

const selectRol = document.getElementById("select-rol")
const inputName = document.getElementById("input-name")

function filterByRol(rol) {
  const allUsers = document.querySelectorAll(".tr")
  allUsers.forEach((user) => {
    const userRols = user.getAttribute("rol").split(", ")
    if (rol === "All" || userRols.includes(rol)) {
      user.style.display = "table-row"
    } else {
      user.style.display = "none"
    }
  })
}

function getRols(data) {
  return new Promise((resolve) => {
    const differentRol = new Set()
    data.forEach((user) => {
      user.roles.forEach((rol) => {
        if (!differentRol.has(rol)) {
          differentRol.add(rol)
        }
      })
    })
    resolve(differentRol)
  })
}

async function addSelectRolOptions(data) {
  try {
    const rols = await getRols(data)
    const selectRol = document.getElementById("select-rol")

    rols.forEach((rol) => {
      let newOption = document.createElement("option")
      newOption.textContent = rol
      newOption.value = rol
      selectRol.append(newOption)
    })
  } catch {}
}

function filterByName(name) {
  const allUsers = document.querySelectorAll(".tr")
  allUsers.forEach((user) => {
    const userName = user.children[1]
    if (
      name === "" ||
      userName.textContent.toLowerCase().includes(name.toLowerCase())
    ) {
      user.style.display = "table-row"
    } else {
      user.style.display = "none"
    }
  })
}

function createTable(data) {
  data.forEach((user) => {
    let newTr = document.createElement("tr")
    newTr.setAttribute("rol", user.roles.join(", "))

    let newIdTd = document.createElement("td")
    newIdTd.textContent = user.id

    let newUserTd = document.createElement("td")
    newUserTd.textContent = user.name

    let newEmailTd = document.createElement("td")
    newEmailTd.textContent = user.email

    newTr.append(newIdTd)
    newTr.append(newUserTd)
    newTr.append(newEmailTd)
    newTr.classList.add("tr")

    tbody.append(newTr)
  })
}

function makeAFetch(url) {
  loading.classList.remove("hidden")

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      addSelectRolOptions(data)
      createTable(data)
      loading.classList.add("hidden")
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      )
      loading.classList.add("hidden")
    })
}

window.addEventListener("load", () => {
  makeAFetch("https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users")

  selectRol.addEventListener("change", (event) => {
    filterByRol(event.target.value)
  })

  inputName.addEventListener("input", (event) => {
    filterByName(event.target.value)
  })
})
