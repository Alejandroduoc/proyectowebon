// JavaScript Document
function validaciones() {
    var rut = document.getElementById('rut').value.trim();
    var apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
    var apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
    var nombre = document.getElementById('nombre').value.trim();
  //  var fechaNacimiento = document.getElementById('fechaNacimiento').value.trim(); 
    var edad = parseInt(document.getElementById('edad').value.trim());
    var genero = document.getElementById('genero').value.trim();
    var celular = document.getElementById('celular').value.trim();

    //validaciones
    if (rut.length < 9 || rut.length > 10) {
        alert('el rut debe contener entre 9 y 10 caracteres');
        return false;
    }
    if (apellidoPaterno.length < 3 || apellidoPaterno.length > 20) {
        alert('El Apellido Paterno debe tener entre 3 y 20 caracteres.');
        return false;
    }
    if (apellidoMaterno.length < 3 || apellidoMaterno.length > 20) {
        alert('El Apellido Materno debe tener entre 3 y 20 caracteres.');
        return false;
    }
    if (nombre.length < 3 || nombre.length > 20) {
        alert('El Nombre debe tener entre 3 y 20 caracteres.');
        return false;
    }
    if (edad < 18 || edad > 35) {
        alert('La Edad debe estar entre 18 y 35 años.');
        return false;
    }
    if (genero === "") {
        alert('Por favor, seleccione su género.');
        return false;
    }
    if (celular.length < 9 || celular.length > 12) {
        alert('El Número de Celular debe tener entre 9 y 12 caracteres.');
        return false;
    }
    return true;
}

function crearCarta() {
	if (validaciones()) {
    var rut = document.getElementById('rut').value.trim();
    var apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
    var apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
    var nombre = document.getElementById('nombre').value.trim();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value.trim(); // Corregido el nombre del campo
    var edad = document.getElementById('edad').value.trim();
    var genero = document.getElementById('genero').value.trim();
    var email = document.getElementById('email').value.trim();
    var celular = document.getElementById('celular').value.trim();
    var profesion = document.getElementById('profesion').value.trim();
    var motivacion = document.getElementById('motivacion').value.trim();

    var carta = "Carta de Presentación:\n\n";
    carta += "Estimado Comité de Selección,\n\n";
    carta += "Me dirijo a ustedes con el fin de expresar mi interés en postular al trabajo de apoyo ambiental en Chiloé.\n\n";
    carta += "A continuación, detallo mis datos personales:\n";
    carta += "- Rut: " + rut + "\n";
    carta += "- Nombre: " + nombre + "\n";
    carta += "- Apellido Paterno: " + apellidoPaterno + "\n";
    carta += "- Apellido Materno: " + apellidoMaterno + "\n";
    carta += "- Fecha de Nacimiento: " + fechaNacimiento + "\n";
    carta += "- Edad: " + edad + "\n";
    carta += "- Género: " + genero + "\n";
    carta += "- Correo Electrónico: " + email + "\n";
    carta += "- Número de Celular: " + celular + "\n";
    carta += "- Profesión: " + profesion + "\n\n";
    carta += "Motivación para Postular al Trabajo:\n";
    carta += motivacion;

    // Mostrar la carta en el textarea correspondiente
    document.getElementById('carta').value = carta;
	} else {
        // Si la validación falla, no se realiza ninguna acción adicional
        alert('Las validaciones no pasaron. No se puede crear la carta.');
    }
}
