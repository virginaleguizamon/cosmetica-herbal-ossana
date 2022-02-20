

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
    productos.innerHTML +=  
    
    // desestructurar 
        `
                <div class="card">
                   
                    <img class="imagenCard" src="${producto.img}" alt="${producto.nombre}">
                    
                    <div class="cardTexto">
                        <p class="categoria">${producto.categoria}</p>
                        <h2 class="nombre">${producto.nombre}</h2>
                        <p class="desc">${producto.desc}</p>
                        <p class="precio">$${producto.precio}</p>
                        <button class= "botonAdd" id="botonAgregar${producto.id}">Agregar</button>
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
            
            let id =  iterator.id.slice(12)
            let productoAgregar = stockProductos.find( el => el.id  ===  parseInt(id) )
            carritoDeCompras.push(productoAgregar)
            actualizarCarrito();
            //console.log(carritoDeCompras);            
            
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
                    
        })
        
       
    }

}
createCard(stockProductos);





// ----------- Eliminar productos ---------------

const eliminar = ()=>{
    let botonEliminar = document.getElementsByClassName("boton-eliminar")
    // console.log(botonEiminar)
    
    for (const iterator of botonEliminar) {
    // console.log(iterator.id);
        
        
        iterator.addEventListener("click", () => {
            
            let id =  iterator.id.slice(13)
            console.log(id)
            botonEliminar.parentElement.remove()   
            carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != id)
         
        })    
         
    }

}


// ------- Precio total carrito -------------
function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)

}



// -------  LS -----------


