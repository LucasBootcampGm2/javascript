// Eres un joven Padawan en el universo de Star Wars, y tu tarea es crear un sistema para gestionar los Jedi en la Orden Jedi. Necesitas construir un array de objetos que represente a los Jedi, donde cada objeto debe contener la información básica de un Jedi. Cada Jedi debe tener una clave única (id) para identificarlo de forma exclusiva.
// Cada objeto Jedi debe tener las siguientes propiedades:
// id: un identificador único para el Jedi (número o string)
// nombre: el nombre del Jedi (string)
// nivel: el nivel de habilidad del Jedi (string), puede ser "Padawan", "Caballero" o "Maestro"
// especialidad: la especialidad del Jedi (string), por ejemplo, "Uso de la Fuerza", "Combate con sable de luz", etc.
// habilidades: un array de strings con todas las habilidades del Jedi ("Telequinesis", "Sable de Luz")

let jedis = [
  {
    id: 0,
    name: "Anakin Skywalker",
    level: "Sith",
    speciality: "Use of force",
    skills: ["Telekinesis"],
  },
  {
    id: 1,
    name: "Luke Skywalker",
    level: "Jedi Master",
    speciality: "Use of force",
    skills: ["Lightsaber"],
  },
];
console.log(jedis.length);

// Luego, implementa las siguientes funciones (Debes nombrar las funciones adecuadamente):
// Se quieren agregar nuevos Jedi al array si aún no existen, basándose en la clave única id.

function addNewJedi(existingJedis, id, newJ) {
  let v = existingJedis.find(function (jedi) {
    if (jedi.id === id) {
      return jedi;
    }
  });
  if (!v) {
    existingJedis.push({ id, ...newJ });
  }
  return existingJedis;
}

console.log(
  addNewJedi(jedis, 4, {
    name: "Lucas",
    level: "Jedi master",
    speciality: "Use of force",
    skills: "Lightsaber",
  })
);

// Se quiere actualizar la información de un Jedi ya existente usando filtrado por la clave id.
function filterById(jedi, id, property, newValue) {
  jedi.some(function (idValue) {
    return idValue["id"] === id;
  });
  console.log(jedis[property]);
  if (jedis[id][property]) {
    jedis[id][property] = newValue;
  } else {
    return `Property does not exist`;
  }
  return jedis;
}
console.log(filterById(jedis, 1, "name", "Jose luis"));

// Se quiere obtener un array con todos los Jedi de tipo “Maestros”
function findJedisMasters(jedis){
    let isMaster = jedis.filter(function(jedi){
        return jedi.level === 'Jedi Master'
    })
    return isMaster
}
console.log(findJedisMasters(jedis))


// Se quiere obtener un array con todos los Jedi que cumplan con el nivel pasado por parámetro. Se debe verificar que el nivel sea “Padawan”, “Caballero” o “Maestro”
function findJedisByLevel(jedis,level){
    let isMaster = jedis.filter(function(jedi){
        return jedi.level === level
    })
    return isMaster
}
console.log(findJedisByLevel(jedis,'Sith'))

// Se quieren agregar habilidades nuevas a un Jedi existente. Verificar que el jedi exista y que las habilidades nuevas no existan dentro del Jedi.
function addSkillsToAnExistingJedi(jedis,id,newSkill){
    let existJedi = jedis.some(function(jedi){
        return jedi.id === id
    })
    let existSkill = jedis[id].skills.includes(newSkill)
    if (existJedi && !existSkill) {
        jedis[id].skills.push(newSkill)
    }
    return jedis[id]
}
console.log(addSkillsToAnExistingJedi(jedis,1,"asas"))
console.log(addSkillsToAnExistingJedi(jedis,1,"hola"))
console.log(addSkillsToAnExistingJedi(jedis,1,"hola"))

// Se quiere eliminar un jedi por id
function deleteJediById(jedis,id){
    newJediList = jedis.filter(function(jedi){
        return jedi.id !== id
    })
    return newJediList
}

console.log(deleteJediById(jedis, 0))
// Se quieren comparar los niveles entre dos Jedi, devuelva un objeto con los nombres y los niveles de los Jedi, y cual de los dos es el más fuerte
function comparedJedisByLevel(jedis,jedi1,jedi2){
    let strongest = {}
    if ((jedis[jedi1] === 'Jedi Master' && jedis[jedi2] === 'Sith') || ((jedis[jedi1] === 'Jedi Master' && jedis[jedi2] === 'Padawan'))){
        strongest = {name: jedis[jedi1].name, level: jedis[jedi1].level}
        return strongest
    } else {
      strongest = {name: jedis[jedi2].name, level: jedis[jedi2].level}
        return strongest
    }
}

console.log(comparedJedisByLevel(jedis,0,1))