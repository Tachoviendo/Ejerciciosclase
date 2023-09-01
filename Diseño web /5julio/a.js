class producto {
    constructor (nombre, precio, detalle, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio)
        this.detalle = detalle;
        this.cantidad = cantidad;
        
        if (this.cantidad > 3){
            this.disponible = true;
        }
    }
    sumarIva(){
        return this.precio * 1.21;
    }
    Vender(cantVenta){
        if (this.disponible){
            this.cantidad -= cantVenta
        }
        
    }
    precioSugerido(){
        return this.precio * 1.21 * 1.25; 
    }

}

var btnAgregar = document.getElementById("agregarProducto")
var tbody = document.getElementById("cuerpo")

var nombre = document.getElementById("nombre")
var precio = document.getElementById("precio")
var detalle = document.getElementById("detalle")
var cantidad = document.getElementById("cantidad")

productos = []

function agregarProducto(){
    prod = producto.constructor(nombre.value, precio.value, detalle.value, cantidad.value)
    productos.push(prod)

    listarProductos()
}


function listarProductos() {
    tbody.innerHTML = "";

    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];

        var tr = document.createElement("tr");

        var atributos = Object.values(producto);
        for (var j = 0; j < atributos.length; j++) {
            var td = document.createElement("td");
            td.textContent = atributos[j];
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
}

btnAgregar = document.addEventListener("click", agregarProducto())


