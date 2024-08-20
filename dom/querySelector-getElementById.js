// Bootcamp 2024
// Javascript
// DOM
// Consigna:
// Aplica todo lo aprendido hasta el momento. Podes investigar por tu cuenta y agregar lo que creas necesario
// Ejercicio 1: Seleccionar un Elemento y Agregar una Clase
// Consigna: Selecciona del DOM el elemento p que tiene la clase "intro" y agrégale una nueva clase llamada "highlight".
let intro = document.querySelector("p.intro");
console.log(intro);

intro.classList.add("highlight");
console.log(intro);

// Ejercicio 2: Seleccionar un Elemento por ID y Cambiar su Texto
// Consigna: Selecciona del DOM el elemento con el id "header-title" y cambia su texto a "Nuevo Título".
document.getElementById("home").innerText = "HOME";

// Ejercicio 3: Seleccionar Múltiples Elementos y Agregar una Clase
// Consigna: Selecciona todos los elementos li dentro de una lista y mostrarlos en consola
let listElements = document.getElementsByTagName("li");
console.log(listElements);

// Ejercicio 4: Eliminar una Clase de un Elemento
// Consigna: Selecciona del DOM el elemento con la clase "warning" y elimínale esa clase.


let warmingElement = document.querySelector(".warning");
warmingElement.classList.remove("warning");
console.log(warmingElement);

// Ejercicio 6: Seleccionar y Cambiar el Contenido de Texto
// Consigna: Selecciona del DOM el elemento h1 que tiene la clase "main-title" y cambia su texto a "¡Bienvenidos!".

let hMain = document.querySelector('.main-title').innerText = '!Bienvenidos!'


// Ejercicio 7: Seleccionar por ID y Cambiar el Color de Fondo
// Consigna: Selecciona del DOM el elemento con el id "footer" y cambia su color de fondo(El que quieras).
let footerBackground = document.getElementById('footer') 

footerBackground.style.backgroundColor = 'red'


// Ejercicio 8: Seleccionar y Agregar Contenido Adicional
// Consigna: Selecciona del DOM el elemento div con la clase "content" y agrega dentro de él un nuevo párrafo que diga "Contenido adicional" (O lo que quieras que diga).
let x = document.querySelector('.content').innerText += 'Contenido adicional'

// Ejercicio 10: Verificar y Mostrar si un Elemento Tiene una Clase
// Consigna: Selecciona del DOM el elemento con la clase "header" y muestra en la consola si tiene la clase "sticky".
// Con todo esto resuelto podría quedarte algo así:
let haveClass = document.querySelector('.header') 

console.log(haveClass.classList.contains('sticky'))