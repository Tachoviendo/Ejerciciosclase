var btnMostrar = document.getElementById("btnMostrar");
var btnSubmit = document.getElementById("btnSubmit");

var lista = document.getElementById("list");

var nombre = document.getElementById("iNombre");
var email = document.getElementById("iEmail");
var pass = document.getElementById("iPassword");
var datos = [["Nombre | ", "Email | ","Password"]];
var alumno = [];

function agregarAlumno() {
    alumno.push(nombre.value, email.value, pass.value);
    
    
    datos.push(alumno);
    
    alumno = [];


}

function mostrarLista() {
    lista.innerHTML = "";

    for (var i = 0; i < datos.length; i++) {
        var estudiante = datos[i];

        var li = document.createElement("li");
        var contenido = "";

        for (var k = 0; k < estudiante.length; k++) {
            contenido += estudiante[k] + " ";
        }

        li.textContent = contenido;
        lista.appendChild(li);
    }
}

btnSubmit.addEventListener("click", agregarAlumno);
btnMostrar.addEventListener("click", mostrarLista)
