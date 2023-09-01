document.addEventListener("DOMContentLoaded", () => {
    const pedidoForm = document.getElementById("pedido-form");
    const clienteInput = document.getElementById("cliente");
    const direccionInput = document.getElementById("direccion");
    const pedidoTextarea = document.getElementById("pedido");
    const entregadoCheckbox = document.getElementById("entregado");
    const limpiarRegistroButton = document.getElementById("limpiar-registro");
    const registroTable = document.getElementById("registro-table").getElementsByTagName('tbody')[0];

    class Hamburgesa {
        constructor (nombre, precio, ingredientes) {
            this.nombre = nombre;
            this.precio = parseFloat (precio);
            this.ingredientes = ingredientes;
        }
        }
        
        const hamburgesas = [];
    
        
        hamburgesas.push(new Hamburgesa ("Bella Burger", 150, ['Carne', 'Queso'])); 
        hamburgesas.push(new Hamburgesa ("Bella Doble", 250, ['Carne', 'Queso', 'Panceta'])); 
        hamburgesas.push(new Hamburgesa ("Bella Pollo", 150, ['Pollo', 'Queso'])); 
        hamburgesas.push(new Hamburgesa ("Super Bella ", 150, ['Carne', 'Queso', 'huevo'])); 
        hamburgesas.push(new Hamburgesa ("Bella Vegan", 150, ['Espinaca', 'Soja']));

    pedidoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const pedido = {
            cliente: clienteInput.value,
            direccion: direccionInput.value,
            pedido: pedidoTextarea.value,
            entregado: entregadoCheckbox.checked
        };
        guardarPedido(pedido);
        actualizarTabla();
        pedidoForm.reset();
    });

    limpiarRegistroButton.addEventListener("click", () => {
        limpiarRegistro();
        actualizarTabla();
    });

    function guardarPedido(pedido) {
        let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
        pedidos.push(pedido);
        localStorage.setItem("pedidos", JSON.stringify(pedidos));
    }

    function limpiarRegistro() {
        localStorage.removeItem("pedidos");
        alert("Registro limpiado");
    }


    function actualizarTabla() {
        registroTable.innerHTML = "";
        const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
        pedidos.forEach((pedido) => {
            const row = registroTable.insertRow();
            row.innerHTML = `
                <td>${pedido.cliente}</td>
                <td>${pedido.direccion}</td>
                <td>${pedido.pedido}</td>
                <td>${pedido.entregado ? 'Sí' : 'No'}</td>
            `;
        });
    }

    
    actualizarTabla();
});
