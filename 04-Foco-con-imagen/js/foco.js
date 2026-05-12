window.onload = function() {
    const foco = document.getElementById("foco");
    const texto = document.getElementById("estado");
    const cuerpo = document.body;

    document.getElementById("btn-on").onclick = function() {
        foco.src = "img/1.jpg";
        cuerpo.style.backgroundColor = "#fdf9d8"; 
        texto.innerHTML = "¡ENCENDIDO!";
        texto.style.color = "black";
    }

    document.getElementById("btn-off").onclick = function() {
        foco.src = "img/2.jpg";
        cuerpo.style.backgroundColor = "#2c3e50"; 
        texto.innerHTML = "APAGADO";
        texto.style.color = "white";
    }
}
