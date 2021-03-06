class Pizza {
    constructor(id, nombre, ingredientes, precio, imagen) {
        this.id = id,
            this.nombre = nombre,
            this.ingredientes = ingredientes
        this.precio = precio
        this.imagen = imagen
    }
}

const Fugazeta = new Pizza(1, "Fugazeta", ["Muzzarella", "Cebolla", "Oregano", "Aceitunas"], 650, "./imagenes/fugazzeta.jpg")
const Calabresa = new Pizza(2, "Calabresa", ["Muzzarella", "Longaniza", "Oregano", "Aceitunas"], 700, "./imagenes/calabresa.jpg")
const Napolitana = new Pizza(3, "Napolitana", ["Muzzarella", "Tomate", "Ajo", "Oregano", "Aceitunas"], 750, "./imagenes/napolitana.jpg")
const Roquefort = new Pizza(4, "Roquefort", ["Roquefort", "Muzzarella", "Oregano", "Aceitunas"], 670, "./imagenes/roquefort.jpg")
const Hawaiana = new Pizza(5, "Hawaiana", ["Jamón", "Anana", "Muzzarella", "Oregano", "Aceitunas"], 10000, "./imagenes/hawaiana.jpg")
const Papita = new Pizza(6, "Papita", ["Muzzarella", "Papita pay", "Aceitunas"], 600, "./imagenes/papita.jpg")

const Pizzas = [Fugazeta, Calabresa, Napolitana, Roquefort, Hawaiana, Papita]

miStorage = window.localStorage;
miStorage.pizzas = JSON.stringify(Pizzas)

console.log(Pizzas)

function evaluarPizzas() {

    let pizzasMenores = false

    console.log("Las pizzas con id impar son:")

    Pizzas.forEach(pizza => {

        if (pizza.id % 2 == 1) {
            console.log(pizza.nombre)
        }

        if (pizza.precio < 600) {
            pizzasMenores = true
        }

    })
    if (pizzasMenores == true) {
        console.log("Hay pizzas a menos de 600 pesos")
    } else {
        console.log("No hay pizzas a menos de 600 pesos")
    }

    console.log("Los nombres de las pizzas son:")

    Pizzas.forEach(pizza => {

        console.log(pizza.nombre)

    })

    console.log("Los precios de las pizzas son:")
    Pizzas.forEach(pizza => {
        console.log(pizza.precio)
    })

    Pizzas.forEach(pizza => {
        console.log(`El nombre de la pizza es ${pizza.nombre} y su precio es ${pizza.precio} pesos`)
    })





    // Pizzas.forEach( pizza => {

    //     pizza.ingredientes.forEach( ingrediente => {

    //         console.log(ingrediente)

    //     })

    //   })


}

evaluarPizzas();

//EJERCICIO 3
const nombrePizza = document.getElementById("nombrePizza")
const precioPizza = document.getElementById("precioPizza")
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
            }


        })
    }
});