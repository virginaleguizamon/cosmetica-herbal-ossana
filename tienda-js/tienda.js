
// carro vacio
let carritoDeCompras = []

// base de datos
let stockProductos= []

// cards
const productos = document.querySelector(".contenedorProductos");

//contador carrito
const contadorCarrito = document.getElementById('contadorCarrito');

//precio total
const precioTotal = document.getElementById('precioTotal');


// ----------------fetch-----------------

  window.addEventListener("load", async() =>{
        const peticion = await fetch ("../stock.json")
        const data = await peticion.json()

        for (let i = 0; i < data.length; i++) {
        stockProductos.push(data[i])
            
        }


        createCard();
        // console.log(stockProductos)
    })  



// ------------------- Filtro -----------------------------
let itemsNav = document.getElementsByClassName("navItem");

for (let i = 0; i < itemsNav.length; i++){
        
    itemsNav[i].addEventListener("click", (e) => {
    e.preventDefault()
        
        if (itemsNav[i].id == "all") {
            createCard(stockProductos);
        }
        else{
            createCard (stockProductos.filter( elemento => elemento.categoria == itemsNav[i].id))
            console.log(stockProductos.filter( elemento => elemento.categoria == itemsNav[i].id))
        }
    
    })
}



//------------------- Cards ----------------------
function createCard(parametro){
    parametro.innerHTML= "";
    stockProductos.forEach( el =>{
    productos.innerHTML +=
                                    `
                                        <div class="card">
                                        
                                            <img class="imagenCard" src="${el.img}" alt="${el.nombre}">
                                            
                                            <div class="cardTexto">
                                                <p class="categoria">${el.categoria}</p>
                                                <h2 class="nombre">${el.nombre}</h2>
                                                <p class="desc">${el.desc}</p>
                                                <p class="precio">$${el.precio}</p>
                                                <button class= "botonAdd" id="botonAgregar${el.id}">Agregar</button>
                                            </div>
                                        </div> 
                                    `
    })


    addCarrito()
  
}


// ------------- Agregar productos al carrito --------------

const addCarrito = () => {
    let botonAgregar = document.getElementsByClassName("botonAdd")
    // console.log(botonAgregar)
    
    for (const iterator of botonAgregar) {
        // console.log(iterator.id);
        
        
        iterator.addEventListener("click", () => {
            Toastify({
                text: "💖Agregado al carrito",  
                className: "info",
                gravity: "bottom",
                style: {
                  background: "#38A3A5", 
                }
            }).showToast();

            let id =  iterator.id.slice(12)
            
            let productoAgregar = stockProductos.find( el => el.id  ===  parseInt(id) )
            carritoDeCompras = [...carritoDeCompras, productoAgregar]
            
            actualizarCarrito();
            //console.log(carritoDeCompras);            
            
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
                    
        })
        
       
    }

}


// ----------- Eliminar productos ---------------

const eliminar = () =>{
    let botonEliminar = document.getElementsByClassName("boton-eliminar")
    // console.log(botonEiminar)
    
    for (const iterator of botonEliminar) {
    // console.log(iterator.id);
        
        
        iterator.addEventListener("click", () => {
            Toastify({
                text: " 💔 Eliminado",  
                className: "info",
                gravity: "bottom",
                style: {
                  background: "#38A3A5", 
                }
            }).showToast();
           

            let id =  iterator.id.slice(13)
            //console.log(iterator.parentElement)
            
            carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != id)
            console.log(carritoDeCompras);
            
            //reutilizo la interfaz del modal
            iterator.parentElement.remove()
            
            actualizarCarrito();
            
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))

            

        })    
         
    }

}


//------------- Cantidad -----------------
/*function cantidad (){
    let repetido  = carritoDeCompras.findIndex(elemento => elemento.id == id)
    if(repetido){
        carritoDeCompras[repetido].cantidad + 1
        
    }else{
        addCarrito()
    }

}*/



// ------- Precio total carrito -------------
function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)

}
    

// -------  LS -----------
/*function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito')) || []
    console.log(recuperarLS);
    recuperarLS &&
        recuperarLS.forEach(element => {
            agregarAlCarrito(element.id)
        });
    
}

recuperar()*/

