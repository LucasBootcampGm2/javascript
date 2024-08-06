// Tienes dos listas de productos en tu tienda online. Combina estas listas en una sola usando lo visto anteriormente y mostrarlo por consola.
let electronics = ['laptop', 'phone', 'tablet']; 
let accessories = ['headphones', 'charger', 'case'];
let electronisWithAccesories = [...electronics, ...accessories]

console.log(electronisWithAccesories)

// Tienes una lista de los productos más vendidos. Extrae el primero y el segundo producto usando destructuring.
let bestSellers = ['laptop', 'phone', 'tablet', 'monitor'];
let [firstProduct,secondProduct] = bestSellers
console.log(firstProduct,secondProduct)

// Verifica si el producto phone existe en la lista de productos, si existe, mostrar por consola un mensaje “Existe el producto [nombre del producto]”
let saleItems = ['laptop', 'phone', 'headphones'];
let existPhoneOrNot = saleItems.find(function(product){
    return product === "phone"
}) 
console.log(`The product '${existPhoneOrNot}' exist`)

// Verifica si un producto específico está en la lista de deseos. Si existe, mostrar por consola un mensaje “El producto existe, su nombre es [nombre del producto]”
let wishlist = ['laptop', 'phone', 'headphones'];
let product = 'play 4' 
let existProductOrNot = wishlist.includes(product)
if (existPhoneOrNot) {
    console.log(`The productos exist, its name is ${product}`)
} else {
    console.log(`The productos dont exist, its name is ${product}`)
}
// Filtra los productos que empiezan con la letra 'p' en la lista.
let products = [
   'laptop',
   'phone',
   'tablet',
   'printer', 
   'pen',
   'monitor',
   'keyboard',
   'mouse',
   'headphones',
   'camera',
   'notebook'
];

let startsWithP = products.filter(function(product){
    return product.startsWith('p')
})
console.log(startsWithP)

// Escribe una función combineProductLists que tome dos listas de productos y las combine en una sola usando la sintaxis spread.
let productList1 = ['laptop', 'phone', 'headphones'];
let productList2 = ['tv', 'charger', 'case']
let combineProductLists = [...productList1,...productList2]
console.log(combineProductLists)
// Crea una función getTopTwo que tome una lista de productos y devuelva los dos primeros usando destructuring.
function getTopTwo() {
    let [firstProduct,secondProduct] = productList1
    let firstAndSecondProduct = [firstProduct, secondProduct]
    return firstAndSecondProduct
} 
console.log(getTopTwo(productList1))

// Escribe una función isOnSale que verifique si algún producto de una lista de productos en oferta es un artículo específico.
// Ejemplo, si tengo una lista de productos electrónicos, y quiero que el producto en oferta sea celular, entonces ese es el que debería ser tomado en cuenta a la hora de validar dentro de nuestra función.
let onSaleProduct = "phone"
function isOnSale(onSale,productOnSale) {
    let existProductOnSale = onSale.some(function(product){
        return product === productOnSale
    })
    return existProductOnSale
} 

let condition = isOnSale(electronics,onSaleProduct)
if (condition) {
    console.log(`The product exist in the onsale list`)
} else {
    console.log(`The product dont exist in the onsale list`)
}

// Crea una función areAllWordsLong que verifique si todas las palabras en una lista tienen más de tres letras.
listOfLongOrNotElements = ['Hi', 'Lucas', 'Welcome', 'to', 'Gm2']
function areAllWordsLong(list) {
    let moreThanThreeLetters = list.every(function(element){
        return element.length > 3
    })
    return moreThanThreeLetters
}

console.log(areAllWordsLong(listOfLongOrNotElements))

// Crea una función areAllEven que verifique si todos los números en una lista son pares.
allEvenOrNotList = [2,22,24,4]
function areAllEven(list) {
    let allElementsEven = list.every(function(element){
        return element % 2 == 0 
    })
    return allElementsEven
}
console.log(areAllEven(allEvenOrNotList))

// Escribe una función findProductWithLetter que encuentre el primer producto en la lista que contiene una letra específica.
listWithSpecificLetter = ['phone', 'tv', 'headphones']
function findProductWithLetter(list, letter) {
    let findSpecificLeterInThelist = list.find(function(element){
        return element.includes(letter) 
    })
    return findSpecificLeterInThelist
}
console.log(findProductWithLetter(listWithSpecificLetter,'v'))

// Define una función createProduct que agregue a un array el producto, pero que antes verifique si el producto ya existe en ese array
// Ejemplo de uso:
// Si el producto existe Mostrar mensaje El producto [nombre] ya existe
// Si no existe, lo agrego al array y retorno los valores.

listExistProductOrNot = ['phone', 'tv', 'headphones']
function createProduct(list,product) {
    let existProductOrNot = list.includes(function(element){
        return element === product
    })
    if (existProductOrNot) {
        console.log(`The product ${product} already exist`)
    } {
        console.log(`We add the product ${product} to the list`)
        list.push(product)
    }
}
console.log(listExistProductOrNot)
createProduct(listExistProductOrNot, 'laptop')
console.log(listExistProductOrNot)

// Escribe una función arePricesInRange que compruebe si todos los precios de una lista están entre 50 y 150.
priceList = [55,150,54]
function arePricesInRange(list){
    let inPrice = list.every(function(element){
        return element >= 50 && element <= 150
    })
    return inPrice
}
console.log(arePricesInRange(priceList))

// Define una función formatExpensiveProducts que tome una lista de precios y agregue una etiqueta Caro a los precios superiores a 100.
// Ejemplo:
const prices = [80, 120, 200, 90]

function formatExpensiveProducts(list){
    let upperOneHundred = list.map(function(element){
        if (element > 100) {
            element = `Caro: ${element}`
        }
        return element
    })
    return upperOneHundred
}
console.log(formatExpensiveProducts(prices))



// Define una función addIfNotExists que añada un producto a una lista solo si no está ya presente.

listExistProductOrNot = ['phone', 'tv', 'headphones']
function addIfNotExists(list,product) {
    let existProductOrNot = list.includes(function(element){
        return element === product
    })
    if (existProductOrNot) {
        console.log(`The product ${product} already exist`)
    } {
        console.log(`We add the product ${product} to the list`)
        list.push(product)
    }
}
console.log(listExistProductOrNot)
createProduct(listExistProductOrNot, 'laptop')
console.log(listExistProductOrNot)

// Crea una función createDescriptions que tome una lista de nombres de productos y una lista de precios, y devuelva una lista de descripciones que combine ambos usando map.
// Se debe ver algo parecido a esto (La descripción puede cambiar según lo que estemos contemplando nosotros):
// ['laptop cuesta $1000', 'phone cuesta $500', 'tablet cuesta 300']
listOfProducts = ['laptop', 'phone', 'tablet']
listOfPrice = [1000, 500, 300]
function createDescriptions(productList,priceList) {
    let descriptionlist = productList.map(function(element,index){
        element = `${element} cuesta $${priceList[index]}`
        return element
    }) 
    return descriptionlist
}

console.log(createDescriptions(listOfProducts,listOfPrice))

// Crea una función addToWishlist que añada un producto a la lista de deseos solo si el producto no está ya presente y la lista de deseos tiene menos de 5 productos. Realizar validaciones correspondientes.
listOfWish = ['headphones', 'Mate', 'phone', 'Mac']
function addToWishlist(wishlist, product){
    let existProduct = wishlist.includes(product) 
    console.log(existProduct)
    if (!existProduct && wishlist.length < 5 ){
        wishlist.push(product)
        return wishlist
    } else {
        console.log('The product already exists or the list has reached its limit')
        return wishlist
    }
}

console.log(addToWishlist(listOfWish, 'laptop'))

// Define una función inventoryMessages que tome una lista de productos y una lista de cantidades en inventario, devolviendo una lista de mensajes que indiquen si cada producto está en stock o agotado.
// Ejemplo de salida:
// // ['laptop está en stock con 5 unidades', 'phone está agotado', 'tablet está en stock con 3 unidades']

let products1 = ['laptop', 'phone', 'tablet']
let stocks = [5, 0, 3]
function inventoryMessages(productList, countList){
    let haveStockOrNot = productList.map(function(element,index){
        if (countList[index] > 0) {
            return `${productList[index]} is on stock with ${countList[index]}`
        } else {
            return `${productList[index]} is sold out`
        }
    })
    return haveStockOrNot
}

console.log(inventoryMessages(products1,stocks))