
// ---------------------------------CLASE 1---------------------------------------

/*let nombre = prompt ("ingrese su nombre")
let apellido = prompt ("ingrese su apellido")

console.log ("bienvenido a nuestra app web" + "" + nombre + apellido);*/




// -----------------------------------CLASE 2-----------------------------------

// Pedir un número mediante prompt

/*let num1 = prompt ("Ingrese un numero");
 if( num1 > 1000){
     alert ("Tu numero ingresado es mayor a 1000, tu numero es: " + num1)
}else{
     alert ("el numero es menor a 1000, el numero es: " + num1)
}*/




// Pedir un texto mediante prompt, y si es igual a Hola mostrar un alert

/*let  textoIngresado = prompt("Ingrese un texto");
if (textoIngresado == "Hola"){
    alert ("el texto ingresado fue "+ textoIngresado)
}*/




//pedir un num por promop y ver si esta entre 10 y 50 

/*let numeroSolicitado = prompt ("ingrese un num")
if ( (numeroSolicitado >=10) && (numeroSolicitado<=50) ){
    alert ("el numero ingresado es: " + numeroSolicitado + "y esta entre 10 y 50")
}else{
    alert("el numero ingresado es: " + numeroSolicitado)
}*/


// ------------------------CLASE 3---------------------------

// ej: turnos

/*for(let t= 1; t<=15; t++){
    let nombre= prompt ("Ingresar nombre y apellido");
    alert ("Turno N° " + t + "Nombre: " + nombre)
}*/

// lo mismo con switch

// let turnos = prompt ("Turnos disponibles en el mes de febrero, elija una fecha.")

/*while(turnos != "ESC"){
   
    switch (turnos){
        case "1":
            alert("Tienes el turno 1");
            break;
        case "2":
            alert ("Tienes el turno 2");
            break;
        case "3":
            alert ("Tienes el turno 3");
            break;
        case "4":
            alert ("Tienes el turno 4");
            break;
        case "5":
            alert("Tienes el turno 5");
            break;
        default:
            alert("No hay más turnos, vuelva el mes siguiente");
            break;
    }
    turnos = prompt ("Turnos disponibles del 1 al 5 de febrero, elija una fecha.")
}*/


// ---------------------CLASE 4- FUNCIONES--------------------------

/*function saludar (){
    alert ("Bienvenidos/as")
}

saludar();
saludar();*/



//---------------------ENTREGABLE 1-----------------------------------


/*let nombreIngresado = prompt ("Ingrese su nombre")
function saludar (){
    alert ("Bienvenido/a a la tienda de Ossana " + nombreIngresado)    
}

saludar();

function producto(){
    let productoIngresado = prompt ("Ingresar producto") ;
    alert ("Producto: " + productoIngresado);
}

let total= 0
function precio(){
    let precioIngresado =  parseInt (prompt ("Ingresar precio"));
    alert ("Precio: " + precioIngresado)
    total += precioIngresado
}

producto();
precio();

let continuar = prompt ("¿Desea continuar comprando?")

if (continuar=="si"){
    producto();
    precio();
    alert("El total es: "+ total);
   
}else{
    alert("¡Gracias por visitarnos!");
}*/






//--------------------------------------------------------------------

/*class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}*/


/*let ingresarProductos = parseInt( prompt("Cantidad de productos a llevar") )
let total = 0
for (let p = 0; p < ingresarProductos ; p++) {
    const producto = new Producto ( prompt("Ingrese el nombre del producto"),prompt("Precio"))    
    total += producto.precio
}

alert("Precio total de los productos: " + total)*/


/*function producto(){
    let productoIngresado = prompt ("Ingresar nombre del producto") ;
    alert ("Producto: " + productoIngresado);
}

let total= 0
function precio(){
    let precioIngresado =  parseInt (prompt ("Ingresar precio"));
    alert ("Precio: " + precioIngresado)
    total += precioIngresado
}

producto();
precio();

let continuar = prompt ("¿Desea continuar comprando?")

if (continuar=="si"){
    producto();
    precio();
    alert("El total es: "+ total);
   
}else{
    alert("¡Gracias por visitarnos!");
}*/

// -----------------CLASE 6-COMPLEMENTARIO ARRAYS----------------------



/*let nombreIngresado = prompt ("Ingrese su nombre")
function saludar (){
    alert ("Bienvenido/a a la tienda de Ossana " + nombreIngresado)    
}

saludar();

alert("Nuestros productos disponibles:")

let productos =
    [
        {
            id: 1, 
            tipo: "facial", 
            producto: "Agua micelar", 
            precio: 350
        },
        {
            id: 2, 
            tipo: "facial", 
            producto: "Tónico facial", 
            precio: 350
        },
        {
            id: 3, 
            tipo: "facial", 
            producto: "Agua de rosas", 
            precio: 375
        },
        {
            id: 4, 
            tipo: "corporal", 
            producto: "Crema corporal", 
            precio: 450
        },
        {
            id: 5, 
            tipo: "corporal", 
            producto: "Bruma corporal", 
            precio: 400
        }
    ]
    
    
    let render = '';
    productos.forEach(element => {
        render += `
                    ID: ${element.id}
                    TIPO: " + ${element.tipo}
                    PRODUCTO: "+ ${element.producto} 
                    PRECIO: " + ${element.precio}`;
    
    })
    alert(render)
    



    let carro = []


    function agregarProducto() {
        let elijo = parseInt(prompt('ingrese el ID del producto'))
        let agregar = productos.find((el) => el.id == elijo)
        carro.push(agregar)
    }

    agregarProducto();
    alert(carro[0].producto);*/






    


//--------------------PRE ENTREGA 1-------------------


/*let nombreIngresado = prompt ("Ingrese su nombre")
function saludar (){
    alert ("Bienvenido/a a la tienda de Ossana " + nombreIngresado)    
}

saludar();

alert("Nuestros productos disponibles:")


class Producto {

    constructor(id, nombre, precio){

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto(1, 'Agua Micelar', 450);
const producto2 = new Producto(2, 'Tónico Facial', 350);
const producto3 = new Producto(3, 'Bálsamo Labial', 200);
const producto4 = new Producto(4, 'Agua de Rosas', 450);
const producto5 = new Producto(5, 'Crema Corporal', 500);
const producto6 = new Producto(6, 'Crema Facial', 350);
const producto7 = new Producto(7, 'Bruma Corporal', 400);


const datos = [
    producto1, 
    producto2, 
    producto3, 
    producto4,
    producto5,
    producto6,
    producto7
]

let CARRITO = []



let renderizar= "" ;
datos.forEach((element) => {
    renderizar += ` 
                ID: ${element.id}
                NOMBRE: "+ ${element.nombre} 
                PRECIO: " + ${element.precio}`;

})
alert(renderizar);


function comprar() {
    let elijo = parseInt(prompt('ingrese el ID del producto'))
    let agregar = datos.find((prod) => prod.id == elijo)
    CARRITO.push(agregar)
    console.log(CARRITO)
    
}
comprar();


function actualizarCarrito() {
    console.log('cantidad de productos agregados ' + CARRITO.length)
    let suma = CARRITO.reduce((acc, el) => acc + el.precio, 0)

    console.log('la suma total de su carrito es $' + suma)
}


actualizarCarrito();*/


//-------------------CLASE 8 DOM----------------------

/*EJEMPLO 2
const productos = [{ id: 1, nombre: "Arroz", precio: 125 },
                  { id: 2, nombre: "Fideo", precio: 70 },
                  { id: 3, nombre: "Pan", precio: 50},
                  { id: 4, nombre: "Flan", precio: 100}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p> Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}*/


// ----------------------COMPLEMENTARIO DOM---------------------

/*const productos = document.querySelector(".contenedorProductos");


createCard(stockProductos);


function createCard(stockProductos){
    stockProductos.forEach(producto=>{
    productos.innerHTML +=      
        `
                <div class="card">
                    <img class="imagenCard" src="${producto.img}" alt="${producto.nombre}">
                    <div class="cardTexto">
                        <p class="categoria">${producto.categoria}</p>
                        <h2 class="nombre">${producto.nombre}</h2>
                        <p class="desc">${producto.desc}</p>
                        <p class="precio">$${producto.precio}</p>
                    </div>
                    <button type="button" class="btn btn-outline-success">${producto.boton}</button>
                </div>
         `
      
   })
  
}*/



//-------------------CLASE 9 EVENTOS------------------
 
// --------------Entregable---------------


/*const productos = document.querySelector(".contenedorProductos");
const categoria = document.getElementById ("categoria");


//-----------------EVENTO---------------------
categoria.addEventListener('change',()=>{
    console.log(categoria.id)
   
    if(categoria.id == 'all'){
        createCard(stockProductos)
    
    }else{
       createCard(stockProductos.filter(el => el.categoria ==  categoria.id))
        console.log(stockProductos.filter(el => el.categoria ==  categoria.id))
    }
})


//---------------OTRA FORMA---------------------
itemsNav[i].addEventListener("click", (e) => {
    e.preventDefault()
   
let valor = createCard (stockProductos.filter( elemento => elemento.categoria == itemsNav[i].id))
console.log(valor);



//--------------CARDS----------------
createCard(stockProductos);
   
function createCard(stockProductos){
    productos.innerHTML= "";
    stockProductos.forEach(producto=>{
    productos.innerHTML +=      
        `
                <div class="card">
                    <img class="imagenCard" src="${producto.img}" alt="${producto.nombre}">
                    <div class="cardTexto">
                        <p class="categoria">${producto.categoria}</p>
                        <h2 class="nombre">${producto.nombre}</h2>
                        <p class="desc">${producto.desc}</p>
                        <p class="precio">$${producto.precio}</p>
                    </div>
                    <button id="botonAgregar${producto.nombre}" class="btn-floating halfway-fab waves-effect waves-light red">Agregar</button>
                </div>
         `
   })
  
}*/












