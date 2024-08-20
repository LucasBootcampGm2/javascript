
let title = document.getElementsByClassName('color')

console.log(title)

title[0].addEventListener("click", function(event){
        let r1 = Math.floor(Math.random()* 255) 
        let r2 = Math.floor(Math.random()* 255) 
        let r3 = Math.floor(Math.random()* 255) 
        title[0].style.color = `rgb(${r1},${r2},${r3})`
})

let welcome = document.getElementById('h1')

welcome.addEventListener('mouseover', function(){
        welcome.style.color = 'red'
})
welcome.addEventListener('mouseout', function(){
        welcome.style.color = 'black'
})


