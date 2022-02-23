
// productos en el modal

 let botonAbrir = document.getElementById("abrir-modal")
    
  botonAbrir.addEventListener("click", () => {
    pintarModal();
  })


    
  const pintarModal = () =>{
    let modalBody = document.getElementById("modal-body")

    // llamo el array de la seleccion del usuario (carritoDeCompras)  
    modalBody.innerHTML=""  
      carritoDeCompras.map(el => {
      const {nombre, precio, id, cantidad} = el
      modalBody.innerHTML +=
                      
                      `
                          <div class="modal-carrito">
                            <p class="modal-text">${nombre}</p>
                            <p class="modal-text">$${precio}</p>
                            <p class="modal-text" id=cantidad ${id}>Cantidad:${cantidad}</p>
                            <button id="botonEliminar${id}"class="boton-eliminar"><img class="basura" src="../media/eliminar.png" alt="eliminar"></button>  
                          </div>
                     
                       `
                    
            
    })    
    eliminar();
  }   
  

  let botonComprar = document.getElementById ("botonComprar")
  botonComprar.addEventListener("click", () =>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Su compra ha sido éxitosa!',
      showConfirmButton: false,
      timer: 1500
    })

  })














/*let modalBody = document.getElementById("modal-body")
    
    modalBody.addEventListener("click" , () => {
      carritoDeCompras.map(el => {
      modalBody.innerHTML += 
                        `
                          <p>${el.nombre}</p>
                          <p>$${el.precio}</p>
                          <p id=cantidad ${el.id}>Cantidad:${el.cantidad}</p>
                          <button id="botonEliminar${el.id}"class="boton-eliminar"><img class="basura" src="../media/eliminar.png" alt="eliminar"></button>  
                    
                        `


    })


})*/
    
    


 







/*let modalBody = document.getElementById("modal-body")
    
    modalBody.addEventListener("click" , () => {
      carritoDeCompras.map(el => {
      modalBody.innerHTML += 
                        `
                          <p>${el.nombre}</p>
                          <p>$${el.precio}</p>
                          <p id=cantidad ${el.id}>Cantidad:${el.cantidad}</p>
                          <button id="botonEliminar${el.id}"class="boton-eliminar"><img class="basura" src="../media/eliminar.png" alt="eliminar"></button>  
                    
                        `


    })


})*/
    