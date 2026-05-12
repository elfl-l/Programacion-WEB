window.onload = function() {
    let posX = 0;
    let posY = 0;
    const avatar = document.getElementById("avatar");

    const limiteX = 800 - 50;  
    const limiteY = 500 - 110; 

    // --- FUNCIONES DE LOS BOTONES (Tus funciones originales) ---
    document.getElementById("btn-der").onclick = moverDerecha;
    document.getElementById("btn-izq").onclick = moverIzquierda;
    document.getElementById("btn-arr").onclick = moverArriba;
    document.getElementById("btn-aba").onclick = moverAbajo;

    // --- LÓGICA DEL TECLADO (Nueva funcionalidad) ---
    // Usamos onkeydown para detectar la tecla (Semana 03)
    window.onkeydown = function(event) {
        // event.key nos dice qué tecla se presionó
        switch (event.key) {
            case "ArrowRight":
            case "d": // También opcional para letra D
                moverDerecha();
                break;
            case "ArrowLeft":
            case "a":
                moverIzquierda();
                break;
            case "ArrowUp":
            case "w":
                moverArriba();
                break;
            case "ArrowDown":
            case "s":
                moverAbajo();
                break;
        }
    };

    // Encapsulamos el movimiento en funciones para no repetir código
    function moverDerecha() {
        if (posX < limiteX) { // Condicional if (Semana 03)
            posX += 20;
            avatar.style.left = posX + "px"; // Usamos left en vez de marginLeft
        }
        avatar.src = "images/der.png";
    }

    function moverIzquierda() {
        if (posX > 0) {
            posX -= 20;
            avatar.style.left = posX + "px";
        }
        avatar.src = "images/izq.png";
    }

    function moverArriba() {
        if (posY > 0) {
            posY -= 20;
            avatar.style.top = posY + "px"; // Usamos top en vez de marginTop
        }
        avatar.src = "images/atr.png";
    }

    function moverAbajo() {
        if (posY < limiteY) {
            posY += 20;
            avatar.style.top = posY + "px";
        }
        avatar.src = "images/ade.png";
    }
};
