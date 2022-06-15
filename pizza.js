miStorage = window.localStorage;
var Pizzas= JSON.parse(miStorage.pizzas)

const nombrePizza = document.getElementById("nombrePizza")
const precioPizza = document.getElementById("precioPizza")
const ingredientesPizza = document.getElementById("ingredientesPizza")
const numeroPizza = document.getElementById("numeroPizza")
const buscarPizza = document.getElementById("buscarPizza")


buscarPizza.addEventListener("click", function (e) {
    if (numeroPizza.value > 6 || numeroPizza.value <=0) {
        window.alert("del 1 al 6 dijimos :(")
    } else {
        Pizzas.forEach(function (pizza) {

            if (pizza.id == numeroPizza.value) {
                nombrePizza.innerHTML = `Pizza ${pizza.nombre}`
                precioPizza.innerHTML = `$ ${pizza.precio}`
                imagenPizza.src = pizza.imagen
                ingredientesPizza.innerHTML = `${pizza.ingredientes}`
            }


        })
    }
});
console.log(Pizzas)