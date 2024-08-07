// 1. Crea un objeto Personaje con las siguientes propiedades:
// ○ Nombre
// ○ Raza
// ○ Edad
// ○ Clase (por ejemplo: Guerrero, Mago, etc.)
// ○ Arma

let character = {    
    Name: 'Gandalf',
    Race : 'Human',
    Age : 2000,
    Class : 'Wizard',
    Weapon : 'Cane'
}
 
// 2. Añade una nueva propiedad Aliado al objeto Personaje. Este debe ser de tipo string.
character.Ally = 'Frodo'

// 3. Actualiza la propiedad Edad del objeto Personaje para incrementar su valor en 1 usando tanto la notación de punto como la de corchetes.
character.Age = 2023
character['Age'] = 2024

// 4. Crea una función que reciba a Personaje, verifique si la propiedad Edad existe, y si existe, aumente su edad en 1.
function haveAgeKey(characterObject) {
    if(characterObject.Age){
        return characterObject.Age + 1
    } else {
        return false
    }
}
console.log(haveAgeKey(character))

// 5. Crea una función que reciba a Personaje, verifique que tenga la propiedad Aliado, y si la tiene, devuelva true o false si el nombre del aliado tiene 10 caracteres.
function haveAlly(characterObject){
    if (characterObject.Ally) {
        if ((characterObject.Ally).length === 10) {
            return false
        } else {
            return true
        }
    }
}
console.log(haveAlly(character))

// 6. Crea una función que reciba el objeto Personaje y retorne true o false si Nombre es igual al Nombre del aliado.
function equalName(characterObject) {
    if (characterObject.Ally === characterObject.Name) {
        return true
    } else {
        return false
    }
}
console.log(equalName(character))

// 7. Crea una función que reciba el objeto Personaje y retorne una cadena que describa al personaje de la siguiente manera: "Nombre: [nombre], Edad: [edad], Arma: [arma], Raza: [raza]".
function characterDescription(characterObject){
    return {
        Name : characterObject.Name,
        Age : characterObject.Age,
        Weapon : characterObject.Weapon,
        Race : characterObject.Race
    }
}

console.log(characterDescription(character))

// 8. Crea una función que reciba a Personaje y verifique si es mayor de 100 años (considerando que en el universo de El Señor de los Anillos algunas razas pueden vivir mucho más tiempo).
function isUpperHundred(characterObject) {
    if (characterObject.Age > 100) {
        return true
    } else {
        return false
    }
}
console.log(isUpperHundred(character))

// 9. Crea una función que reciba a Personaje y devuelva un objeto con Nombre y Edad.
function characterNameAndAge(characterObject) {
    return {
        Name : characterObject.Name,
        Age : characterObject.Age
    }
}

// 10. Añade una propiedad Habilidades que sea un array de habilidades del personaje y accede a ese array por medio de notación de punto o corchetes.
character.Skills = ['Creation', 'Destruction']
console.log(character.Skills[1])
console.log(character['Skills'][0])

// 11. Crea una función que reciba una habilidad y la agregue al array Habilidades.
function addSkill(characterObject, skill) {
    characterObject.Skills.push(skill)
    return characterObject.Skills
}
console.log(addSkill(character,'Fire Ball'))

// 12. Crea una función que reciba una habilidad y la devuelva si existe en el array Habilidades.
function verificationSkill(characterObject, skill) {
    let isInSkills = characterObject.Skills.includes(skill)
    if (isInSkills) {
        return "The skill exists"
    } else {
        return "The skill does not exist"
    }
}
console.log(verificationSkill(character,'Fire'))

// 13. Crea una función que retorne cuántas habilidades tiene el personaje.
function countSkills(characterObject){
    return `The character has ${characterObject.Skills.length} skills`
}
console.log(countSkills(character))

// 14. Añade una propiedad Aliados que sea un array de nombres de aliados y accede a ese array por medio de notación de punto o corchetes.
character.Allies = ['Frodo', 'Pippin', 'Bilbo']
console.log(character.Allies[1])
console.log(character['Allies'][2])

// 15. Crea una función que reciba un aliado y lo agregue al array Aliados.
function addAlly(characterObject,ally) {
    let isInAllies = characterObject.Allies.includes(ally)
    if (isInAllies) {
        return `${ally} is already in allies list`
    } else {
        character.Allies.push(ally)
        return `${ally} was added to the list`
    }
}
console.log(addAlly(character, 'tete'))
console.log(character.Allies)

// 16. Crea una función que reciba un aliado y lo elimine del array Aliados.
function deleteAlly(characterObject, ally) {
    let isInAllies = characterObject.Allies.includes(ally)
    if (!isInAllies) {
        return `${ally} does not exist in allies list`
    } else {
        let newAllies = character.Allies.filter(function(allyVerification){
            return allyVerification !== ally 
        })
        character.Allies = newAllies
        return `${ally} was removed to the list`
    }
}
console.log(deleteAlly(character, 'Frodo'))
console.log(character.Allies)

// 17. Crea una función que devuelva una lista de los nombres de los aliados.
function returnAllies(characterObject) {
    return characterObject.Allies
}

// 18. Crea una función que reciba un nuevo nombre de arma y actualice la propiedad Arma del objeto Personaje.
function updateWeapon(characterObject,newWeapon) {
    return characterObject.Weapon = newWeapon
}
console.log(updateWeapon(character, 'Fire cane'))

// 19. Crea una función que reciba una clase y devuelva true o false si el personaje tiene esa clase.
function haveClass(characterObject, classVerification){
    if (characterObject.Class === classVerification) {
        return `The character have the class ${classVerification}`
    } else {
        return `The character does not have the class ${classVerification}, it has ${characterObject.Class}`
    }
}

console.log(haveClass(character, 'Dwarf'))

// 20. Crea una función que reciba a Personaje, el nombre de una propiedad (como "Edad", "Clase", etc.), y un nuevo valor para esa propiedad. La función debe actualizar la propiedad del objeto Personaje con el nuevo valor proporcionado sin usar métodos avanzados.
function newValueForAProperty(characterObject, property, newValue) {
    switch (property) {
        case 'Class':
            if (typeof newValue == 'string'){
                return characterObject.Class = newValue
            } else {
                return `The type of the value that you are trying to change is not equal as the property value`;    
            }
        case 'Name':
            if (typeof newValue == 'string'){
                return characterObject.Name = newValue
            } else {
                return `The type of the value that you are trying to change is not equal as the property value`;    
            }
        case 'Age':
            if (typeof newValue == 'number'){
                return characterObject.Age = newValue
            } else {
                return `The type of the value that you are trying to change is not equal as the property value`;    
            }
        case 'Race':
            if (typeof newValue == 'string'){
                return characterObject.Race = newValue
            } else {
                return `The type of the value that you are trying to change is not equal as the property value`;    
            }
        case 'Weapon':
            if (typeof newValue == 'string'){
                return characterObject.Weapon = newValue
            } else {
                return `The type of the value that you are trying to change is not equal as the property value`;    
            }
        case 'Allies':
            if (typeof newValue == 'string'){
                return characterObject.Allies = newValue
            } else {
                return `The type of the value that you are trying to change is not equal as the property value`;    
            }
        case 'Ally':
            if (typeof newValue == 'string'){
                return characterObject.Ally = newValue
            } else {
                return `The type of the value that you are trying to change is not equal as the property value`;    
            }
        case 'Skills':
            if (typeof newValue == 'string'){
                return characterObject.Skills = newValue
            } else {
                return `The type of the value that you are trying to change is not equal as the property value`;    
            }
    }
}

console.log(newValueForAProperty(character, 'Class', 'Dwarf'))