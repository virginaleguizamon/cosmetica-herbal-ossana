

// carro vacio
let carritoDeCompras = []

// cards
const productos = document.querySelector(".contenedorProductos");

//contador carrito
const contadorCarrito = document.getElementById('contadorCarrito');

//precio total
const precioTotal = document.getElementById('precioTotal');



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
            console.log(stockProductos.filter( elemento => elemento.categoria == itemsNav[i].id));
        }
    
    })
}




//------------------- Cards ----------------------
function createCard(stockProductos){
    productos.innerHTML= "";
    stockProductos.forEach(producto=>{
    const {img, nombre, categoria, desc, precio, id} = producto
    productos.innerHTML +=  

        `
                <div class="card">
                   
                    <img class="imagenCard" src="${img}" alt="${nombre}">
                    
                    <div class="cardTexto">
                        <p class="categoria">${categoria}</p>
                        <h2 class="nombre">${nombre}</h2>
                        <p class="desc">${desc}</p>
                        <p class="precio">$${precio}</p>
                        <button class= "botonAdd" id="botonAgregar${id}">Agregar</button>
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
                text: "💖Agregado al carrito",  /* Las notificaciones me encantaron, la usé acá porque creo que al usuario le da seguridad de que se agregó y no tener que entrar al carrito a fijarse.*/
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
createCard(stockProductos);





// ----------- Eliminar productos ---------------

const eliminar = () =>{
    let botonEliminar = document.getElementsByClassName("boton-eliminar")
    // console.log(botonEiminar)
    
    for (const iterator of botonEliminar) {
    // console.log(iterator.id);
        
        
        iterator.addEventListener("click", () => {
            Toastify({
                text: " 💔 Eliminado",  /* Bueno, este lo mismo que el anterior pero para eliminar y asegurarse de que se eliminó correctamente.*/
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

/*let cantidad  = carritoDeCompras.find(elemento => elemento.id == id)
    if(cantidad){
        console.log(cantidad);
      
    }else{
     pintarModal()
    }
*/


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

