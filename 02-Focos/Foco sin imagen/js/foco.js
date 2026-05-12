window.onload = function() { // Espera a que cargue la web (Semana 03)

    // Creamos constantes para acceder rápido a los elementos (DOM)
    const imagen = document.getElementById("foco");
    const texto = document.getElementById("estado");

    // Evento onclick para el botón de encender (Semana 03)
    document.getElementById("btn-on").onclick = function() {
        imagen.src = "images/foco_on.png"; // Cambia el atributo src (Pág. 18)
        texto.innerHTML = "¡ENCENDIDO!";   // Cambia el contenido HTML (Pág. 18)
        texto.style.color = "yellow";      // Cambia estilo CSS desde JS
    }

    // Evento onclick para el botón de apagar
    document.getElementById("btn-off").onclick = function() {
        imagen.src = "images/foco_off.png"; // Vuelve a la imagen original
        texto.innerHTML = "APAGADO";       
        texto.style.color = "white";       
    }
}
