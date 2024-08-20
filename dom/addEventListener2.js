// Bootcamp 2024
// Javascript
// EVENTOS
// Consigna:
// Aplica todo lo aprendido hasta el momento. Podes investigar por tu cuenta y agregar lo que creas necesario

// Ejercicio 1: Manejar Evento para Mostrar un Mensaje: Selecciona un botón con el id "show-message" y agrega un evento click que muestre un mensaje de alerta diciendo "¡Hola, mundo!".
let btn = document.getElementById("show-message");
btn.addEventListener("click", function () {
  alert("!Hola Mundo!");
});

// Ejercicio 2: Cambiar el Color de Fondo al Hacer Clic: Selecciona el body y agrega un evento que cambie su color de fondo al color que prefieras.
let body = document.getElementById("body");

body.addEventListener("click", function () {
  body.style.backgroundColor = "lightBlue";
});

// Ejercicio 3: Cambiar Texto al Hacer Clic: Selecciona un párrafo con la clase "click-text" y agrega un evento que cambie su texto a "Has hecho clic aquí".
let paragraph = document.getElementsByClassName("click-text");
paragraph[0].addEventListener("click", function () {
  paragraph[0].style.color = "green";
});

// Ejercicio 4: Cambiar el Valor de un Input al Cambiarlo: Selecciona un input de texto y crea un elemento párrafo el cual agreguemos lo que vamos escribiendo en el input.
let changeInput = document.getElementById("input-changes-p");
let pChanged = document.getElementById("input-p-changed");

changeInput.addEventListener("change", function (event) {
  console.log(event);
  pChanged.textContent = event.target.value;
});

// Ejercicio 5: Validar Formulario al Enviarlo: Selecciona un formulario con el id "signup-form" que tenga 2 inputs y agrega un evento que al enviar el formulario valide si los campos están completos. Si no lo están, muestra un mensaje de error.
let form1 = document.getElementById('signup-form')
let inputName1 = document.getElementById('input-name1')
let inputEmail1 = document.getElementById('input-email1')
console.log(inputName1.value)
form1.addEventListener('submit', function(event){
    event.preventDefault()
    if (inputEmail1.value && inputName1.value){
        alert('completado')
    } else {
        alert('no completaste el formulario')
    }
})

// Ejercicio 6: Evento para Mostrar un Mensaje al Cargar la Página: Agrega un evento al body que muestre un mensaje en consola diciendo "La página se ha cargado".
body.addEventListener('load', function(){
    console.log('La pagina se ha cargado')
})


// Ejercicio 7: Agregar Elemento a la Lista al Hacer Clic: Selecciona un botón con el id "add-item" y agrega un evento que añada un nuevo elemento li a una lista con la clase "item-list".

let list = document.querySelector('.item-list')
let addItem = document.getElementById('add-item')
addItem.addEventListener('click',function(){
    let newContent = document.createElement('p')
    newContent.textContent = `Hi Jona, my name is lucas`
    list.append(newContent)
})

// Ejercicio 8: Prevenir el Comportamiento por Defecto al Enviar Formulario: Selecciona un formulario con el id "contact-form" y agrega unos eventos para evitar que el formulario se envíe, y luego muestra un mensaje diciendo "El envío del formulario ha sido detenido".

let form2 = document.getElementById('contact-form')
let inputName2 = document.getElementById('input-name2')
let inputEmail2 = document.getElementById('input-email2')
form2.addEventListener('submit', function(event){
    event.preventDefault()
    if (inputEmail2.value && inputName2.value ){
        alert('SE COMPLETO el form contactos')
    } else {
        alert('no completaste el formulario')
    }

})

// Ejercicio 9: Contar y Mostrar Clics en un Botón: Selecciona un botón con la clase "count-button" y agrega un evento que cuente cuántas veces se ha hecho clic en él, mostrando el total en un span con el id "click-count".

let countButton = document.getElementsByClassName('count-button')
let count = 0
let header = document.querySelector('.header')

countButton[0].addEventListener('click',function(){
    count++
    newSpan = document.createElement('span')
    newSpan.textContent = count
    header.append(newSpan)
})

// Ejercicio 10: Validar Email en un Formulario: Selecciona un formulario con el id "email-form" y agrega un evento que valide que el campo de email contiene un formato válido antes de enviarlo.



// Ejercicio 11: Evento para Mostrar/Ocultar Contenido: Selecciona un botón con el id "toggle-content" y un div con la clase "content-box", y agrega un evento que muestre o oculte el contenido del div al hacer clic.
let toggleButton = document.getElementById('toggle-content')
let contentbox = document.querySelector('.content-box')

toggleButton.addEventListener('click', function(){
    contentbox.classList.toggle('mostrar') 
})

// Ejercicio 12: Prevenir el Comportamiento por Defecto en un Enlace: Selecciona un enlace con la clase "no-default" y agrega un evento para evitar que el enlace navegue a otra página, mostrando en su lugar un mensaje en consola.
let link = document.querySelector('.no-default')
link.addEventListener('click',function(event){
    event.preventDefault()
})

// Ejercicio 13: Cambiar el Estilo de un Elemento: Selecciona un botón con el id "add-class" y un párrafo con la clase "text". Agrega un evento que añada una clase "highlight" al párrafo y que cambie su estilo (A lo que gustes).
let addClassButton = document.getElementById('add-class')
let textParagraph = document.getElementsByClassName('text')

addClassButton.addEventListener('click',function(){
    if(!textParagraph[0].classList.contains('highlight')){
        textParagraph[0].classList.add('highlight') 
    }
    textParagraph[0].style.color = 'blue'
    console.log(textParagraph[0].classList)
})

// Ejercicio 14: Alternar Contenido de Texto: Selecciona un botón con el id "toggle-text" y un párrafo con la clase "text-toggle". Agrega un evento que cambie el texto del párrafo entre "Texto 1" y "Texto 2".
let toggleTextbutton = document.getElementById('toggle-text')
let textToggleParagraph = document.getElementsByClassName('text-toggle')
toggleTextbutton.addEventListener('click', function(){
    if(textToggleParagraph[0].includes('Texto 1')){
        textToggleParagraph[0].textContent = 'Texto 2'
    } else {
        textToggleParagraph[0].textContent = 'Texto 1'
    }
})

// Ejercicio 15: Agregar Contenido HTML Dinámicamente: Selecciona un botón con el id "add-html" y un div con la clase "container". Agrega un evento click que inserte un bloque de HTML dentro del div.
let addHtmlContent = document.getElementById('add-html')
let divContainer = document.querySelector('.container')

addHtmlContent.addEventListener('click',function(){
    let newContent = document.createElement('div')
    newContent.style.width = '100px'
    newContent.style.height = '100px'
    newContent.style.backgroundColor = 'red'
    divContainer.append(newContent)
})

// Ejercicio 16: Crear y Agregar un Nuevo Elemento al DOM: Selecciona un botón con el id "create-element". Agrega un evento que cree un nuevo párrafo p con el texto "Elemento creado" y lo añada al final de un div con la clase "content".
let createElementButton = document.getElementById('create-element')
let divContent = document.querySelector('.content')

createElementButton.addEventListener('click', function(){
    let newElment = document.createElement('p')
    newElment.textContent = 'Elemento creado'
    divContent.append(newElment)
})


// Ejercicio 17: Cambiar el Color de Fondo de Múltiples Elementos: Selecciona todos los elementos li dentro de una lista con la clase "color-list" y un botón con el id "change-color". Agrega un evento que cambie el color de fondo de cada li

let lista = document.querySelectorAll('.color-list')
let changeColor = document.getElementById('change-color')

changeColor.addEventListener('click', function(){
    lista.forEach((color)=> {
        color.style.color= 'red'
    })
})

// Ejercicio 18: Crear una Lista de Ítems Dinámicamente: Selecciona un botón con el id "create-list". Agrega un evento que cree una nueva lista ul y añada cinco elementos li dentro de ella, agregando la lista al final de un div con la clase "list-container".
let createListbutton = document.getElementById('create-list')
let array = [1, 2, 3 ,4]
createListbutton.addEventListener('click', function(){
    let newList = document.createElement('ul')
    body.append(newList)
    for (let i = 0; i < array.length; i++) {
        newList.append(`elemento ${array[i]}agregado`)
    }
})

// Ejercicio 20: Cambiar el Tamaño de un elemento HTML: Selecciona un elemento con el id "resize-image" y agrega un evento que cambie su estilo.

// let resizeImage = document.getElementById('resize-image')

// resizeImage.addEventListener('mouseover', function(){
//     resizeImage.style.width = '10px'
//     resizeImage.style.width = '10px'
//     resizeImage.style.color = 'green'

// })
