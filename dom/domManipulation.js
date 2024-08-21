// Based on Notion ToDo list style, create a web app that contains two lists side by side.
// Each list name must be at the end of the amount of items.
// Load an initial list of ToDos for each list when the page is loaded
// First list
// Buy eggs
// Do laundry
// Buy facturas for Seba

// Second list
// Sleep
// Eat
// Code
// Repeat

// The last list item must be an empty item allowing users to add a new item to that list. It must have a button on the right side with the text “Add”

let list1 = document.getElementById('toDoList1')
let list2 = document.getElementById('toDoList2')
let inputOption1 = document.getElementById('inputOption1')
let inputOption2 = document.getElementById('inputOption2')
let addButton1 = document.getElementById('addButton1')
let addButton2 = document.getElementById('addButton2')
 
function addItem(button,list,option){
    button.addEventListener('click', function(){
        let newItem = document.createElement('li')
        let newDeleteButton = document.createElement('button')
        newDeleteButton.textContent = 'Delete' 
        newDeleteButton.setAttribute('class', 'deleteButton') 
        newItem.textContent = option.value
        newItem.append(newDeleteButton)
        list.append(newItem)
    })
    return
}
addItem(addButton1, list1, inputOption1)
addItem(addButton2,list2,inputOption2)
// Allow users to delete items, with a button to the right with the text “Delete”
// Extra: alert users to see if they are sure

let deleteButton = document.querySelectorAll('.deleteButton')
console.log(deleteButton)

deleteButton.forEach(function(button){
    button.addEventListener('click', function(){
        button.parentNode.remove()
    })
})


// Add a button to toggle light/dark mode.
// Do not duplicate html code.
// Manage variable amount of lists.
// (Do not copy from Notion, use provided snapshot as reference).
// Tips
// Hardcode first. Then generalize and abstract variables.
// Start small. Then build bigger and adapt along the way
// Ask for help! But after first trying to do it yourself, and then, understanding what is blocking you (“What is it that I don’t understand?“)