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

// Crear un objeto con las propiedades nombre, edad, y especie de burro, y luego extraer nombre y edad con alias nombrePersonaje y edadPersonaje respectivamente.
let donkeyObject = {
  donkeyName: "Donkey",
  donkeyAge: "23"
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
shrekObject2.shrekAge = 28;
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
let eventObject = {
    Name : 'Lucas',
    Date : '12/3',
    Guests : [{name: "jiji", species: "sdsd", confirm: true},{name: "jeje", species: "sdsd", confirm: true}]
}

let isGuestConfirm = eventObject.Guests.filter(function(guest){
    return guest.confirm === true
})

let nameConfirm = []

isGuestConfirm.map(function(name){
  nameConfirm.push(name.name)
})

let {Name} = eventObject

eventObject1 = {Name,nameConfirm}
console.log(eventObject)

// Crear un objeto banda con las propiedades nombre, genero, y miembros (que es un array de objetos con propiedades nombre, instrumento, y experiencia (en años)). Luego extraer el nombre del género y los instrumentos de los miembros con más de 5 años de experiencia.
let band = {
  Name: "Guns N' Roses",
  Gender: 'Rock',
  Members: [
    {name: 'Ole Beich', instrument: 'Piano', experience: 10},
    {name: 'Hollywood Rose',instrument: 'Guitar', experience: 4},
    {name: 'Tracil Guns', instrument: 'Electric guitar', experience: 10 }
  ]
}
console.log(band.Gender)

let moreThanFiveYearsExperience = band.Members.filter(function(member){
  return member.experience > 5
})

let experiencedMembersInstruments = []

moreThanFiveYearsExperience.map(function(member){
  experiencedMembersInstruments.push(member.instrument)
})
console.log(experiencedMembersInstruments)

// Parte 3
// Crear una función crearPareja que reciba dos objetos ogro y princesa y devuelva un nuevo objeto pareja combinando sus propiedades, renombrando nombre a nombreOgro y nombrePrincesa. Además, si la edad de cualquiera de ellos es mayor a 28, agregar un array misiones con una misión inicial.
let ogreObject = {
  Name: 'jorgito',
  Age: 29,
  Ability: 'Cook people'
}

let princessObject = {
  Name: 'juliana',
  Age: 22,
  Ability: 'Magic'
}

function createCouple(ogre, princess) {
  ogreName = ogre.Name
  princessName = princess.Name
  delete princess.Name
  delete ogre.Name
  let couple = {OgreName: ogreName,  ...ogre, PrincessName: princessName, ...princess}
  if (ogre.Age > 28 || princess.Age > 28 ){
    couple.Missions = ['Initial Mission']
  }
  return couple
}
console.log(createCouple(ogreObject, princessObject))

// Crear una función crearRealeza que reciba dos objetos rey y reina y devuelva un nuevo objeto realeza combinando sus propiedades, renombrando nombre a nombreRey y nombreReina, y poder a poderRey y poderReina. Además, si los reinos son iguales, agregar un array herederos con un heredero inicial.
let king = {
  Name: 'Jorge',
  Power: 'Less',
  Kingdom: 'Venezuela'
}

let queen = {
  Name: 'Catalina',
  Power: 'A lot',
  Kingdom: 'Venezuela'
}

function createRoyalty(kingObject,queenObject) {
  kingName = kingObject.Name
  queenName = queenObject.Name
  kingPower = kingObject.Power
  queenPower = queenObject.Power
  delete kingObject.Name
  delete queenObject.Name
  delete kingObject.Power
  delete queenObject.Power
  let royalty = {KingName: kingName, KingPower:kingPower,...kingObject,QueenName:queenName,QueenPower:queenPower, ...queenObject}
  if (kingObject.Kingdom === queenObject.Kingdom) {
    royalty.Heirs = ['Heir 1']
  }
  return royalty

}

console.log(createRoyalty(king,queen))

// Crear una función unirPersonajes que reciba un array de objetos personajes y devuelva un nuevo objeto alianza con propiedades nombres (un array de los nombres de los personajes) y reinos (un array de los reinos de los personajes). Además, si cualquier personaje pertenece al reino 'Pantano', agregar 'Pantano' a un array lugaresImportantes.

let charactersArray = [{Name: 'jose lui', Kingdom: 'Swamp'},{Name: 'Martita', Kingdom: 'Not a Swamp'}]

function matchCharacters(array){
  let [object1,object2] = array
  name1 = object1.Name 
  name2 = object2.Name 
  let names = [name1,name2]
  kingdom1 = object1.Kingdom
  kingdom2 = object2.Kingdom
  let kingdoms = [kingdom1,kingdom2]
  let newObject = {Names: names, Kingdoms: kingdoms}
  return newObject    
}

console.log(matchCharacters(charactersArray))
// Crear una función resumenPersonajes que reciba un array de objetos personajes donde cada objeto tiene una propiedad info que a su vez es un objeto con propiedades nombre, edad, y reino. Devuelve un nuevo objeto resumen con propiedades nombres (array de nombres) y edadesMayores (array de edades mayores a 30). Si algún personaje tiene edad mayor a 40, agregar 'mayoresDe40' a un array categorias.

let characterInfoArray = [
  {Info: {
    Name: 'Lucas',
    Age: 18,
    Kingdom: 'Gm2'
  }},
  {
    Info: {
      Name: 'Matias',
      Age: 23,
      Kingdom: 'Gm2'
    }
  },
  {
    Info: {
      Name: 'Jaz',
      Age: 23,
      Kingdom: 'Gm2'
    }
  }
]

function characterSummary(characterArray) {
  let names = [];
  let ages = [];
  let categories = [];

  characterArray.forEach(({ Info: { Name, Age } }) => {
    names.push(Name);
    if (Age > 30) ages.push(Age);
    if (Age > 40) categories.push('mayoresDe40');
  });

  return {
    nombres: names,
    edadesMayores: ages,
    categorias: categories
  };
}

console.log(characterSummary(characterInfoArray));

// Parte 4. Agregamos spread operator
// Crea una función agregarHobbies que reciba dos objetos persona y nuevosHobbies. El objeto persona tiene propiedades nombre, edad, y hobbies (un array de hobbies). El objeto nuevosHobbies tiene una propiedad hobbies que también es un array de nuevos hobbies. Usa el spread operator para combinar el array hobbies de persona con el array hobbies de nuevosHobbies en un nuevo objeto personaActualizada. Devuelve personaActualizada.

let person = {
  Name : 'Lucas',
  Age: 18,
  Hobbies: ['Gim', 'Play videogames']
}

let newHobbies = { 
  Hobbies : ['Read', 'Run']
}

function addHobbies(personObject, newHobbiesObject) {
  let updateHobbies = [...personObject.Hobbies, ...newHobbiesObject.Hobbies]
  delete personObject.Hobbies
  let updatePerson = {...personObject, ...updateHobbies} 
  return updatePerson
}
console.log(addHobbies(person,newHobbies))

// Crea una función actualizarDatos que reciba dos objetos datosPersonales y datosContacto. El objeto datosPersonales tiene propiedades nombre y edad, y el objeto datosContacto tiene propiedades direccion y telefono. Usa el spread operator para combinar ambos objetos en un nuevo objeto informacionCompleta. Devuelve informacionCompleta.

let personalData = {
  Name: 'Lucas',
  Age: 18
}

let contactData = {
  Adress: 'Buenos Aires, Caballito',
  Phone: '11 6586-5633'
}

function updateData(personalDataObject, contactDataObject){
  let completeData = {...personalDataObject, ...contactDataObject}
  return completeData
}

console.log(updateData(personalData,contactData))

// Crea una función agregarCaracteristicas que reciba dos objetos vehiculo y caracteristicas. El objeto vehiculo tiene propiedades marca y modelo, y el objeto caracteristicas tiene propiedades color y tipo. Usa el spread operator para combinar estos objetos en un nuevo objeto vehiculoCompleto. Devuelve vehiculoCompleto, agregando las propiedades de caracteristicas solo si el color es 'rojo'.

let vehicul = {
  Brand: 'Ford',
  Modelo: 'Ranger'
}

let characteristics = {
  Color: 'Red',
  Type: 'XLT' 
}

function addCharacteristics(vehiculObject,characteristicsObject){
  let completeVehicul
  if (characteristicsObject.Color === 'Red'){
    completeVehicul = {...vehiculObject,...characteristicsObject}
  } else  {
    completeVehicul = {...vehiculObject}
  }
  return completeVehicul
}

console.log(addCharacteristics(vehicul,characteristics))

// Crea una función eliminarTelefono que reciba un objeto persona y elimine explícitamente la propiedad telefono del objeto. Usa el spread operator para crear un nuevo objeto personaSinTelefono que contenga todas las propiedades del objeto original persona excepto telefono. Devuelve personaSinTelefono.

let person2 = updateData(personalData,contactData)
console.log(person2)
function deletePhone(personObject){
  delete personObject.Phone
  return personObject
}
console.log(deletePhone(person2))

// Parte 5
// Crea una función combinacionPersonajes que reciba dos objetos personajes1 y personajes2, donde personajes1 tiene propiedades nombre y habilidades (un array de habilidades), y personajes2 tiene propiedades nombre y atributos (un objeto con fuerza y destreza). Usa el spread operator para combinar habilidades y atributos en un solo objeto informacion, y devuelve un nuevo objeto con el nombre y el objeto informacion combinado.
let characters1 = {
  Name: 'Lucas',
  Skills:  ['Fast Learning', 'Disciplined']
} 
let characters2 = {
  Name: 'Lucas', 
  Attributes: {
    Strength: 'Commitment',
    Dexterity: 'Hear'
  }
}

function characterCombination(characterObject1,characterObject2) {
  let info = {...characterObject1.Skills, ...characterObject2.Attributes}
  let {Name} = characterObject1
  let infoCombination = {...info, Name}
  return infoCombination
}

console.log(characterCombination(characters1,characters2))

// Crea una función combinarClientes que reciba dos objetos cliente1 y cliente2, donde cliente1 tiene propiedades nombre y datos (un objeto con edad y direccion), y cliente2 tiene propiedades nombre y informacion (un objeto con telefono y email). Usa el spread operator para combinar datos y informacion en un solo objeto perfilCompleto, y devuelve un nuevo objeto con el nombre y el objeto perfilCompleto.
let cliente1 = {
  Name: 'Lucas',
  Data: {
    Age: 18, 
    Adress:'Buenos Aires, Caballito' 
  }
}

let cliente2 = {
  Name: 'Lucas',
  Info: {
    Phone: '11 3434-3434',
    Email: 'jose@gmail.com' 
  }
}

function combineClientes(clientObject1,clientObject2) {
  let completeProfile = {...clientObject1.Data,...clientObject2.Info}
  completeProfile = {...completeProfile,Name}
  return completeProfile
}

console.log(combineClientes(cliente1,cliente2))

// Crea una función actualizarPerfil que reciba dos objetos usuario y detalles. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion y telefono. Usa el spread operator para actualizar usuario con direccion y telefono de detalles, pero solo si la edad del usuario es mayor de 25. Si la edad es 25 o menor, establece valores predeterminados para direccion y telefono en el objeto resultante. Devuelve el objeto usuarioActualizado.

let user = {
  Name: 'Lucas',
  Age: 18,
  FavoriteColor: 'Black'
}

let details = {
  Adress: 'Buenos Aires, San Cristobal',
  Phone: '11 3434-3434'
}
function updateProfile(userObject, detailsObject){
  let updatedUser
  if(userObject.Age >  25) {
    updatedUser = {...userObject,...detailsObject}
  } else {
    updatedUser = {...userObject}
    updatedUser.Adress = 'Buenos Aires, Caballito'
    updatedUser.Phone = '11 4545-4545'
  }
  return updatedUser
}

console.log(updateProfile(user,details))

// Crea una función actualizarInfo que reciba dos objetos usuario y detalles, y un array de palabrasClave. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion, telefono, y ocupacion. El array palabrasClave contiene una lista de palabras que pueden estar presentes en el campo colorFavorito de usuario. Usa el spread operator para actualizar el objeto usuario con direccion, telefono, y ocupacion de detalles solo si el colorFavorito de usuario está presente en palabrasClave. Si el colorFavorito no está en palabrasClave, establece valores predeterminados para direccion, telefono, y ocupacion. Devuelve el objeto usuarioActualizado.

details.ocupation = 'Nothing'
let keywords = ['Green', 'Black', 'Yellow']
function updateInfo(userObject, detailsObject, keywordsArray){
  let colorIsInKeywords = keywords.includes(userObject.FavoriteColor)
  let updatedUser
  if (colorIsInKeywords){
    updatedUser = {...userObject,...detailsObject}
  } else {
    updatedUser = {...userObject}
    updatedUser.Adress = 'Buenos Aires, Lanus'
    updatedUser.Phone = '11 8888-4545'
    updatedUser.ocupacion = 'Nothing'
  }
  return updatedUser
}

console.log(updateInfo(user,details,keywords))