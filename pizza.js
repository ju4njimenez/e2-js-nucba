miStorage = window.localStorage;
var Pizzas = JSON.parse(miStorage.pizzas)


//const nombrePizza = document.getElementById("nombrePizza")
//const precioPizza = document.getElementById("precioPizza")
//const ingredientesPizza = document.getElementById("ingredientesPizza")
//const numeroPizza = document.getElementById("numeroPizza")
//const buscarPizza = document.getElementById("buscarPizza")

const containerPizzas = document.getElementById("containerPizzas")
const listaPizzas = document.getElementById("listaPizzas")
const pizzasBuscadas = document.getElementById("pizzasBuscadas")
const barraBusqueda = document.getElementById("barraBusqueda")
const input = document.getElementById("input")
const buscar = document.getElementById("buscar")
const textbuscar = document.createTextNode("Buscar pizza")
buscar.appendChild(textbuscar)
const pintarPizzas = Pizzas.forEach((pizza) => {


  const item = document.createElement("li");

  const image = document.createElement("img")
  image.setAttribute("src", pizza.imagen)

  const name = document.createElement("h5")
  const textname = document.createTextNode(pizza.nombre)
  name.appendChild(textname);

  const ingredientes = document.createElement("p")
  const textingredientes = document.createTextNode(pizza.ingredientes)
  ingredientes.appendChild(textingredientes)

  const price = document.createElement("span")
  const textprice = document.createTextNode(`$ ${pizza.precio}`)
  price.appendChild(textprice)

  item.appendChild(image)
  item.appendChild(name)
  item.appendChild(ingredientes)
  item.appendChild(price)

  listaPizzas.appendChild(item)


})




document.addEventListener("DOMContentLoaded", (e) => {

  pintarPizzas


})


buscar.addEventListener("click", function (e) {
  e.preventDefault();
  Pizzas.find(function (pizza) {

    if (input.value == pizza.nombre) {
      containerPizzas.removeChild(containerPizzas.firstElementChild);
      barraBusqueda.removeChild(buscar)
      barraBusqueda.removeChild(input)

      const volver = document.createElement("button")
      const textvolver = document.createTextNode("Ver todas las pizzas")
      volver.appendChild(textvolver)
      barraBusqueda.appendChild(volver)
      volver.addEventListener("click", function(e){
        e.preventDefault();
        location.reload();
      })


      const item = document.createElement("li");

      const image = document.createElement("img")
      image.setAttribute("src", pizza.imagen)

      const name = document.createElement("h5")
      const textname = document.createTextNode(pizza.nombre)
      name.appendChild(textname);

      const ingredientes = document.createElement("p")
      const textingredientes = document.createTextNode(pizza.ingredientes)
      ingredientes.appendChild(textingredientes)

      const price = document.createElement("span")
      const textprice = document.createTextNode(`$ ${pizza.precio}`)
      price.appendChild(textprice)

      item.appendChild(image)
      item.appendChild(name)
      item.appendChild(ingredientes)
      item.appendChild(price)


      pizzasBuscadas.appendChild(item)

    }


  })

})

//   e.preventDefault();
//   //const textvolver= document.createTextNode("volver");
//   //buscar.repl
//   containerPizzas.removeChild(listaPizzas);

// Pizzas.forEach(function (pizza) {

// if (input.value == pizza.nombre) {

//       const item = document.createElement("li");

//       const image = document.createElement("img")
//         image.setAttribute("src", pizza.imagen)

//         const name = document.createElement("h5")
//        const textname = document.createTextNode(pizza.nombre)
//        name.appendChild(textname);

//        const ingredientes = document.createElement("p")
//        const textingredientes = document.createTextNode(pizza.ingredientes)
//        ingredientes.appendChild(textingredientes)

//        const price = document.createElement("span")
//        const textprice = document.createTextNode(`$ ${pizza.precio}`)
//        price.appendChild(textprice)

//        item.appendChild(image)
//        item.appendChild(name)
//        item.appendChild(ingredientes)
//        item.appendChild(price)


//        pizzasBuscadas.appendChild(item)

//     } else {
//       console.log(`${pizza.nombre} no fue seleccionada`);
//     }

//   })





//buscar.addEventListener("click", function (e) {
//  e.preventDefault();
//  Pizzas.forEach(function (pizza) {
//
//    if (input.value == pizza.nombre) {
//      const item = document.createElement("li");
//
//      const image = document.createElement("img")
//      image.setAttribute("src", pizza.imagen)
//
//      const name = document.createElement("h5")
//      const textname = document.createTextNode(pizza.nombre)
//      name.appendChild(textname);
//
//      const ingredientes = document.createElement("p")
//      const textingredientes = document.createTextNode(pizza.ingredientes)
//      ingredientes.appendChild(textingredientes)
//
//      const price = document.createElement("span")
//      const textprice = document.createTextNode(`$ ${pizza.precio}`)
//      price.appendChild(textprice)
//
//      item.appendChild(image)
//      item.appendChild(name)
//      item.appendChild(ingredientes)
//      item.appendChild(price)
//
//      listaPizzas.appendChild(item)
//    } else {
//      console.log(`${pizza.nombre} no fue seleccionada`);
//      listaPizzas.removeChild()
//    }
//
//  })
//
//})


//
//
//document.addEventListener("DOMContentLoaded", (e) => {
//    const buscador = document.createElement("form");
//
//    const input = document.createElement("input")
//
//    const buscar = document.createElement("button")
//    const textbuscar = document.createTextNode("Buscar pizza")
//    buscar.appendChild(textbuscar)
//
//    buscador.appendChild(input)
//    buscador.appendChild(buscar)
//
//    barraBusqueda.appendChild(buscador)
//  buscar.addEventListener("click", function (e) {//      if (input.value !== pizza.nombre) {//         window.alert("Esa pizza, o no existe, o no la tenemos :(")//     } else {//        Pizzas.forEach(function (pizza) {//  //            if (pizza.nombre === input.value) {//               name.innerHTML = `Pizza ${pizza.nombre}`//              precioPizza.innerHTML = `$ ${pizza.precio}`//             imagenPizza.src = pizza.imagen//           ingredientesPizza.innerHTML = `${pizza.ingredientes}`//        }
///   
//   
//          })
//    }
//   });
//   
//})
//
//
//
//
//

//buscarPizza.addEventListener("click", function (e) {
//    if (numeroPizza.value > 6 || numeroPizza.value <=0) {
//       window.alert("del 1 al 6 dijimos :(")
//   } else {
//    Pizzas.forEach(function (pizza) {
//
//        if (pizza.id == numeroPizza.value) {
//           nombrePizza.innerHTML = `Pizza ${pizza.nombre}`
//          precioPizza.innerHTML = `$ ${pizza.precio}`
//         imagenPizza.src = pizza.imagen
//       ingredientesPizza.innerHTML = `${pizza.ingredientes}`
//    }
//
//
//     })
// }
//});