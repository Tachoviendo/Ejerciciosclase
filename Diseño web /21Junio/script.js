var input = document.getElementById("input");
var btnAgregar = document.getElementById("btnAgregar");
var lista = document.getElementById("lista");

var tareas = [];

function agregarTarea() {
    var texto = input.value;

    if (texto.trim() !== "") {
        tareas.push(texto);

        input.value = "";

        mostrarLista();
    }
}

function mostrarLista() {
    lista.innerHTML = "";

    for (var i = 0; i < tareas.length; i++) {
        var tarea = tareas[i];

        var li = document.createElement("li");
        li.textContent = tarea;

        var btnEliminar = document.createElement("span");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "delete-button";

        btnEliminar.addEventListener("click", function (event) {
            var indice = Array.prototype.indexOf.call(
                lista.children,
                this.parentNode
            );
            tareas.splice(indice, 1);
            mostrarLista();
        });

        li.appendChild(btnEliminar);

        lista.appendChild(li);
    }
}

btnAgregar.addEventListener("click", agregarTarea);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarTarea();
    }
});
