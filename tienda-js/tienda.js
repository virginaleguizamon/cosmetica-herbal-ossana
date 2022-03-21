
// carro vacio
let carritoDeCompras = JSON.parse( localStorage.getItem("carrito") ) || []

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


        createCard(stockProductos);
        actualizarCarrito();
    })  





// ------------------- Filtro -----------------------------
let itemsNav = document.getElementsByClassName("navItem");

for (let i = 0; i < itemsNav.length; i++){
        
    itemsNav[i].addEventListener("click", () => {
  
        
        if (itemsNav[i].id == "all") {
            createCard(stockProductos);
        }
        else{
            const filtro = stockProductos.filter( elemento => elemento.categoria == itemsNav[i].id)
            console.log( "filtro", filtro );
            createCard (filtro)
            console.log(stockProductos.filter( elemento => elemento.categoria == itemsNav[i].id))
        }
    
    })
}



//------------------- Cards ----------------------
function createCard(p){
    productos.innerHTML= "";
    p.forEach( el =>{
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
    
    for (const iterator of botonAgregar) {
        
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
            


            // verificar cantidad-agregar
            const verificar = carritoDeCompras.findIndex( el => el.id == id)
            
            let productoAgregar = stockProductos.find( el => el.id  ===  parseInt(id) )
            if (verificar != -1) {

                carritoDeCompras[verificar].cantidad += 1
            
            }else{

                carritoDeCompras.push(productoAgregar)
            }


            actualizarCarrito();
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
                    
        })
        
       
    }

}


// ----------------- Eliminar productos ------------------

const eliminar = () =>{
    let botonEliminar = document.getElementsByClassName("boton-eliminar")
    
    for (const iterator of botonEliminar) {        
        
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
            
            carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != id)
            

            //-----reutilizo la interfaz del modal-------
            iterator.parentElement.remove()
            
            actualizarCarrito();
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))

            

        })    
         
    }

}


// --------------- Precio total carrito (actualizo)-------------

function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)

}
    



