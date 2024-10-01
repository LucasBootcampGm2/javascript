function filterByRol(rol) {
  const allUsers = document.querySelectorAll(".tr")
  allUsers.forEach((user) => {
    const userRols = user.getAttribute("rol").split(", ")
    if (rol === "" || userRols.includes(rol)) {
      user.style.display = "table-row"
    } else {
      user.style.display = "none"
    }
  })
}

function getRols(data, differentRol, selectRol) {
  data.forEach((user) => {
    user.roles.forEach((rol) => {
      if (!differentRol.has(rol)) {
        differentRol.add(rol)
        let newOption = document.createElement("option")
        newOption.textContent = rol
        newOption.value = rol
        selectRol.append(newOption)
      }
    })
  })
}

function createTable(data, tbody) {
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

window.addEventListener("load", () => {
  const main = document.getElementById("main")
  const table = document.getElementById("users-table")
  main.append(table)

  const tbody = document.getElementById("tbody")

  const loading = document.getElementById("loading")
  loading.classList.remove("hidden")

  const selectRol = document.getElementById("select-rol")
  const differentRol = new Set()

  fetch("https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users")
    .then((response) => response.json())
    .then((data) => {
      getRols(data, differentRol, selectRol)
      createTable(data, tbody)
      loading.classList.add("hidden")
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      )
      loading.classList.add("hidden")
    })

  selectRol.addEventListener("change", (event) => {
    filterByRol(event.target.value)
  })
})
