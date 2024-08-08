// Destructuring con Shrek
// Parte 1
// Crear un objeto con las propiedades nombre y especie de Shrek, y luego extraer esas propiedades con destructuring.
let shrekObject = {
  shrekName: "Shrek",
  shrekSpecies: "Ogre",
};

let { shrekName, shrekSpecies } = shrekObject;
console.log(shrekName);
console.log(shrekSpecies);

// Crear un objeto con las propiedades nombre, edad, y especie de donkey, y luego extraer nombre y edad con alias nombrePersonaje y edadPersonaje respectivamente.
let donkeyObject = {
  donkeyName: "Donkey",
  donkeyAge: "23",
};

let { donkeyName: characterName, donkeyAge: characterAge } = donkeyObject;

console.log(characterName);
console.log(characterAge);

// Crear un objeto con las propiedades nombre y especie de Fiona, y luego extraer nombre y asignar un valor predeterminado de 'desconocida' a ocupacion.
let fionaObject = {
  fionaName: "Fiona",
  fionaSpecies: "Half ogre half human",
};

let { fionaName, ocupacion = "unknown" } = fionaObject;

console.log(fionaName);
console.log(ocupacion);

// Crear un objeto con las propiedades nombre, especie, y edad de Shrek, y luego usar destructuring en los parámetros de una función para extraer nombre y especie.
let shrekObject2 = { ...shrekObject };
shrekObject2.shrekAge = 23;
function extractNameAndSpecie({ shrekName, shrekSpecies }) {
  return `${shrekName} is an ${shrekSpecies}`;
}
console.log(extractNameAndSpecie(shrekObject2));

// Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre, especie, y amigos, asignando un valor predeterminado de [] a enemigos si no existe.
let shrekObject3 = { ...shrekObject2 };
shrekObject3.shrekFriends = ["donkey", "Fiona"];
let {
  shrekName: shrekName3,
  shrekAge,
  shrekFriends,
  shrekEnemies = [],
} = shrekObject3;
console.log(shrekName3);
console.log(shrekAge);
console.log(shrekFriends);
console.log(shrekEnemies);

// Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre y amigos, y luego extraer el primer amigo.
let shrekObject4 = { ...shrekObject3 };
let { shrekName: shrekName4, shrekFriends: shrekFriends4 } = shrekObject4;

console.log(shrekName4);
console.log(shrekFriends4);
console.log(shrekFriends4[0]);

// Crear un array de objetos con las propiedades nombre y edad de Shrek, donkey, y Fiona, y luego extraer nombre y edad de cada objeto en el array. Ponerle un alias adecuado a cada uno.
fionaObject.fionaAge = 23;
let objectArray = [{ shrekObject4 }, { donkeyObject }, { fionaObject }];
let [
  {
    shrekObject4: { shrekName: shrekNameArray, shrekAge: shrekAgeArray },
  },
  {
    donkeyObject: { donkeyName: donkeyNameArray, donkeyAge: donkeyAgeArray },
  },
  {
    fionaObject: { fionaName: fionaNameArray, fionaAge: fionaAgeArray },
  },
] = objectArray;
console.log(shrekNameArray);
console.log(shrekAgeArray);
console.log(donkeyNameArray);
console.log(donkeyAgeArray);
console.log(fionaNameArray);
console.log(fionaAgeArray);

// Parte 2
// Crear un objeto shrek con las propiedades nombre, especie, edad, y amigos (que es un array de objetos con propiedades nombre y especie). Luego extraer nombre, especie, y los nombres de los amigos.
donkeyObject.donkeySpecies = "Donkey";
donkeyObject.donkeyFriends = ['Fiona', 'Shrek']
fionaObject.fionaFriends = ['Donkey', 'Shrek']
console.log("donkeyObject",donkeyObject)
let objectArray2 = [{ shrekObject4 }, {donkeyObject}, {fionaObject}];
let [
  {
    shrekObject4: {
      shrekName: shrekNameArray2,
      shrekSpecies: shrekSpeciesArray2,
      shrekFriends: shrekFriendsArray2
    },
  },
  {
    donkeyObject: {
      donkeyName: donkeyNameArray2,
      donkeySpecies: donkeySpeciesArray2,
      donkeyFriends: donkeyFriendsArray2,
    },
  },
  {
    fionaObject: {
      fionaName: fionaNameArray2,
      fionaSpecies: fionaSpeciesArray2,
      fionaFriends: fionaFriendsArray2,
    },
  },
] = objectArray2;

console.log(shrekNameArray2);
console.log(shrekSpeciesArray2);
console.log(shrekFriendsArray2);
console.log(donkeyNameArray2);
console.log(donkeySpeciesArray2);
console.log(donkeyFriendsArray2);
console.log(fionaNameArray2);
console.log(fionaSpeciesArray2);
console.log(fionaFriendsArray2);

// Crear un objeto pelicula con las propiedades titulo, año, y personajes (que es un array de objetos con propiedades nombre, especie, y rol). Luego extraer el título de la película y los nombres de los personajes principales (aquellos cuyo rol sea 'principal').
let movie = {
    Title: 'Deadpool 3',
    Age: 2000,
    Characters:  [{name: 'Deadpool', species: 'Mutant', rol: ''},{name: 'Wolverine', species: 'Mutant', rol: 'Main'}]
}
console.log(movie)
let {Title} = movie
let isMain = movie.Characters.filter(function(rolmain){
    return rolmain.rol === 'Main'
})
let nameMain = []
isMain.map(function(x) {
    nameMain.push(x.name)
})
console.log(Title)
console.log(nameMain)


// Crear un objeto misiones con las propiedades titulo, año, y detalles (que es un objeto con propiedades misionPrincipal y misionSecundaria, ambos con propiedades descripcion y personajes (que es un array de nombres)). Luego extraer la descripción de la misión principal y los nombres de los personajes de la misión secundaria.
let missions = {
    Title : 'Msission 1',
    Age : 2000,
    Details : {
        PrincipalMission: {
            Description: 'bbbb',
            Characters: ['Lucas', 'Iturria']
        }, 
        SecundaryMission: {
            Description: 'aaaaa',
            Characters: ['Jaci', 'Seba']
        }
    }
}

let {Details: {PrincipalMission: {Description}}} = missions

console.log(Description)

// Crear un objeto evento con las propiedades nombre, fecha, y invitados (que es un array de objetos con propiedades nombre, especie, y confirmado (booleano)). Luego extraer el nombre del evento y los nombres de los invitados confirmados.
let event = { 
    Name : 'Lucas',
    Date : '12/3',
    Guests : [{name: "jaasas", species: "sdsd", confirm: false},{name: "jaasas", species: "sdsd", confirm: true}]
}

let isGuestConfirm = Guests.filter(function(guest){
    return guest.confirm === true
})
let nameConfirm = [] 

isGuestConfirm.map(function(name){
    nameConfirm.push(name)
})

let {Name, Guests: []}


// Crear un objeto banda con las propiedades nombre, genero, y miembros (que es un array de objetos con propiedades nombre, instrumento, y experiencia (en años)). Luego extraer el nombre del género y los instrumentos de los miembros con más de 5 años de experiencia.

// Parte 3
// Crear una función crearPareja que reciba dos objetos ogro y princesa y devuelva un nuevo objeto pareja combinando sus propiedades, renombrando nombre a nombreOgro y nombrePrincesa. Además, si la edad de cualquiera de ellos es mayor a 28, agregar un array misiones con una misión inicial.
// Crear una función crearRealeza que reciba dos objetos rey y reina y devuelva un nuevo objeto realeza combinando sus propiedades, renombrando nombre a nombreRey y nombreReina, y poder a poderRey y poderReina. Además, si los reinos son iguales, agregar un array herederos con un heredero inicial.
// Crear una función unirPersonajes que reciba un array de objetos personajes y devuelva un nuevo objeto alianza con propiedades nombres (un array de los nombres de los personajes) y reinos (un array de los reinos de los personajes). Además, si cualquier personaje pertenece al reino 'Pantano', agregar 'Pantano' a un array lugaresImportantes.
// Crear una función resumenPersonajes que reciba un array de objetos personajes donde cada objeto tiene una propiedad info que a su vez es un objeto con propiedades nombre, edad, y reino. Devuelve un nuevo objeto resumen con propiedades nombres (array de nombres) y edadesMayores (array de edades mayores a 30). Si algún personaje tiene edad mayor a 40, agregar 'mayoresDe40' a un array categorias.

// Parte 4. Agregamos spread operator
// Crea una función agregarHobbies que reciba dos objetos persona y nuevosHobbies. El objeto persona tiene propiedades nombre, edad, y hobbies (un array de hobbies). El objeto nuevosHobbies tiene una propiedad hobbies que también es un array de nuevos hobbies. Usa el spread operator para combinar el array hobbies de persona con el array hobbies de nuevosHobbies en un nuevo objeto personaActualizada. Devuelve personaActualizada.
// Crea una función actualizarDatos que reciba dos objetos datosPersonales y datosContacto. El objeto datosPersonales tiene propiedades nombre y edad, y el objeto datosContacto tiene propiedades direccion y telefono. Usa el spread operator para combinar ambos objetos en un nuevo objeto informacionCompleta. Devuelve informacionCompleta.
// Crea una función agregarCaracteristicas que reciba dos objetos vehiculo y caracteristicas. El objeto vehiculo tiene propiedades marca y modelo, y el objeto caracteristicas tiene propiedades color y tipo. Usa el spread operator para combinar estos objetos en un nuevo objeto vehiculoCompleto. Devuelve vehiculoCompleto, agregando las propiedades de caracteristicas solo si el color es 'rojo'.
// Crea una función eliminarTelefono que reciba un objeto persona y elimine explícitamente la propiedad telefono del objeto. Usa el spread operator para crear un nuevo objeto personaSinTelefono que contenga todas las propiedades del objeto original persona excepto telefono. Devuelve personaSinTelefono.

// Parte 5
// Crea una función combinacionPersonajes que reciba dos objetos personajes1 y personajes2, donde personajes1 tiene propiedades nombre y habilidades (un array de habilidades), y personajes2 tiene propiedades nombre y atributos (un objeto con fuerza y destreza). Usa el spread operator para combinar habilidades y atributos en un solo objeto informacion, y devuelve un nuevo objeto con el nombre y el objeto informacion combinado.
// Crea una función combinarClientes que reciba dos objetos cliente1 y cliente2, donde cliente1 tiene propiedades nombre y datos (un objeto con edad y direccion), y cliente2 tiene propiedades nombre y informacion (un objeto con telefono y email). Usa el spread operator para combinar datos y informacion en un solo objeto perfilCompleto, y devuelve un nuevo objeto con el nombre y el objeto perfilCompleto.
// Crea una función actualizarPerfil que reciba dos objetos usuario y detalles. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion y telefono. Usa el spread operator para actualizar usuario con direccion y telefono de detalles, pero solo si la edad del usuario es mayor de 25. Si la edad es 25 o menor, establece valores predeterminados para direccion y telefono en el objeto resultante. Devuelve el objeto usuarioActualizado.
// Crea una función actualizarInfo que reciba dos objetos usuario y detalles, y un array de palabrasClave. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion, telefono, y ocupacion. El array palabrasClave contiene una lista de palabras que pueden estar presentes en el campo colorFavorito de usuario. Usa el spread operator para actualizar el objeto usuario con direccion, telefono, y ocupacion de detalles solo si el colorFavorito de usuario está presente en palabrasClave. Si el colorFavorito no está en palabrasClave, establece valores predeterminados para direccion, telefono, y ocupacion. Devuelve el objeto usuarioActualizado.
