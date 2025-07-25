let nome = document.getElementById("nome")
let cont = document.getElementById("conteiner")
let xix = document.getElementById("v")

var array = []

function cadastro() {
    array.push(nome.value)
    console.log(array)
    cont.innerHTML = ""
     for(var i = 0; i < array.length; i++){ 
    cont.innerHTML += `<span> ${array[i]} </span>`
    nome.value = ""
}
}

function sorteio() {
    let sort = Math.round(Math.random() * array.length)
    console.log(sort)
    for(var j in array){
        if(sort == j){
            xix.innerHTML = `<h1> ${array[j]} </h1>`
        }
    }
}

