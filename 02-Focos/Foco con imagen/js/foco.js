window.onload = function() {
    const foco = document.getElementById("foco");
    const texto = document.getElementById("estado");

    // Evento para Encender
    document.getElementById("btn-encender").onclick = function() {
        foco.src = "images/foco_on.png"; // Cambia imagen
        texto.innerHTML = "El foco está ENCENDIDO"; // Cambia texto
        texto.style.color = "#f1c40f"; // Cambia color de fuente
        document.body.style.backgroundColor = "#555"; // Aclara el fondo
    }

    // Evento para Apagar
    document.getElementById("btn-apagar").onclick = function() {
        foco.src = "images/foco_off.png";
        texto.innerHTML = "El foco está APAGADO";
        texto.style.color = "white";
        document.body.style.backgroundColor = "#2c3e50"; // Oscurece el fondo
    }
}
