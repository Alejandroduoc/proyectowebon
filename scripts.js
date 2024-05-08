function validarFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Enviado');
        
    }
}

document.getElementById('registroForm').addEventListener('submit', validarFormulario);

function abrirPagina() {
    window.open('vista1.html', '_blank');
}
function openModal() {
    document.getElementById("myModal").classList.add("open");
}

function closeModal() {
    document.getElementById("myModal").classList.remove("open");
}
// Obtener el modal y el overlay
var modal = document.getElementById('myModal');


// Evento de clic fuera del modal para cerrarlo
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }