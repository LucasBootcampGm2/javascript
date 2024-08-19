let theHeader = document.querySelector('header')
theHeader.style.display = "flex" 

function addElements(element, qty, content){
    let list = document.getElementById(element)
    for (let i = 0; i < qty ;i++) {
        let newContent = document.createElement(content)
        let newLink = document.createElement(`a`)
        newLink.textContent = `Hi Jona, my name is lucas ${i + 1}`
        newContent.append(newLink)
        list.append(newContent)
    }
    return list
}
addElements('ul-1', 8, 'li')
addElements('ul-2', 3, 'li')
