window.onload = function() {
    let posX = 0;
    let posY = 0;
    const avatar = document.getElementById("avatar");

    const limiteX = 800 - 50;  
    const limiteY = 500 - 110; 

    document.getElementById("btn-der").onclick = moverDerecha;
    document.getElementById("btn-izq").onclick = moverIzquierda;
    document.getElementById("btn-arr").onclick = moverArriba;
    document.getElementById("btn-aba").onclick = moverAbajo;


    window.onkeydown = function(event) {
        
        switch (event.key) {
            case "ArrowRight":
            case "d":
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

    function moverDerecha() {
        if (posX < limiteX) { 
            posX += 20;
            avatar.style.left = posX + "px";
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
            avatar.style.top = posY + "px";
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
