let toDoList1 = ["Buy eggs", "Do laundry", "Buy facturas for Seba"];
let toDoList2 = ["Sleep", "Eat", "Code", "Repeat"];
let arrayOfLists = [toDoList1, toDoList2, [], []];

function loadItems(list, items) {
  console.log({ list, items });
  for (let i = 0; i < items.length; i++) {
    let newItem = document.createElement("li");
    newItem.setAttribute("class", "list-item");
    list.append(newItem);

    let newP = document.createElement("p");
    if (items[i].length>0){
      newP.textContent = items[i];
      newItem.append(newP);
      let newDeleteButton = document.createElement("button");
      newDeleteButton.textContent = "Delete";
      newDeleteButton.setAttribute("class", "deleteButton");
      newDeleteButton.addEventListener("click", function () {
        let sure = confirm("Are you sure?");
        if (sure) {
          newDeleteButton.parentNode.remove();
        }
      });
      newItem.append(newDeleteButton);
    } else {
      alert('Enter something before add')
    }
  }
}

function createContainerLists() {
  let newContainerLists = document.createElement("div");
  newContainerLists.setAttribute("class", "container-list");
  main.append(newContainerLists);
  return newContainerLists;
}

function createH2(idx, containerList) {
  let newH2 = document.createElement("h2");
  newH2.textContent = `List ${idx + 1}`;
  containerList.append(newH2);
  return newH2;
}

function createList(containerList) {
  let newList = document.createElement("ul");
  newList.setAttribute("class", "list");
  containerList.append(newList);
  return newList;
}

function createContainerInputs(containerList) {
  let newContainerInputs = document.createElement("div");
  newContainerInputs.setAttribute("class", "container-inputs");
  containerList.append(newContainerInputs);
  return newContainerInputs;
}

function createInputText(idx, containerInputs) {
  let newInputText = document.createElement("input");
  newInputText.setAttribute("type", "text");
  newInputText.setAttribute("class", "inputs-options");
  newInputText.setAttribute("id", `inputOption${idx}`);
  newInputText.setAttribute("place-holder", "Add a new item");
  containerInputs.append(newInputText);
  return newInputText;
}

function createAddButton(containerInputs) {
  let newAddButton = document.createElement("button");
  newAddButton.setAttribute("class", "addButtons");
  newAddButton.innerText = "Add";
  containerInputs.append(newAddButton);
  return newAddButton;
}

function addEventToAddButtons(idx, newList) {
  let addButtons = document.querySelectorAll(".addButtons");
  let inputsOption = document.querySelectorAll(".inputs-options");

  addButtons[idx].addEventListener("click", function () {
    loadItems(newList, [inputsOption[idx].value]);
    inputsOption[idx].value = ''
  });
  return addButtons;
}

function onAddLists(arrayOfArrays) {
  arrayOfArrays.forEach(function (items, idx) {
    let containerList = createContainerLists();
    createH2(idx, containerList);
    let newList = createList(containerList);
    loadItems(newList, items);
    let containerInputs = createContainerInputs(containerList);
    createInputText(idx, containerInputs);
    createAddButton(containerInputs);
    addEventToAddButtons(idx, newList);
  });
}

function darkMode() {
  let body = document.getElementById("body");
  let lightDarkButton = document.getElementById("light-dark-button");
  let lists = document.getElementsByTagName("ul");
  lightDarkButton.addEventListener("click", function () {
    lightDarkButton.classList.toggle("blackChange");
    body.classList.toggle("darkBody");
    lists.classList.toggle("darkUl");
  });
}

window.addEventListener("load", function () {
  onAddLists(arrayOfLists);
  darkMode();
});
