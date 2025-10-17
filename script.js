document.getElementById("formularioContacto").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Gracias por contactarnos. ¡Te responderemos pronto!");
    this.reset();
});
