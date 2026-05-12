window.onload = function() {
    const foco = document.getElementById("foco");
    const texto = document.getElementById("estado");
    const cuerpo = document.body;

    document.getElementById("btn-on").onclick = function() {
        cuerpo.style.backgroundColor = "yellow"; 
        foco.style.backgroundColor = "white";   
        foco.style.boxShadow = "0 0 50px white"; 
        texto.innerHTML = "¡ENCENDIDO!";
        texto.style.color = "black";            
    }

    document.getElementById("btn-off").onclick = function() {
        cuerpo.style.backgroundColor = "#1a1a1a";
        foco.style.backgroundColor = "#444";     
        foco.style.boxShadow = "none";
        texto.innerHTML = "APAGADO";
        texto.style.color = "white";              
    }
}