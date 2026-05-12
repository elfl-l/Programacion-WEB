window.onload = function() {
    document.getElementById("op-sum").onclick = function() { ejecutarOperacion("+"); }
    document.getElementById("op-res").onclick = function() { ejecutarOperacion("-"); }
    document.getElementById("op-mult").onclick = function() { ejecutarOperacion("*"); }
    document.getElementById("op-div").onclick = function() { ejecutarOperacion("/"); }
    document.getElementById("op-mod").onclick = function() { ejecutarOperacion("%"); }
    
    document.getElementById("op-clear").onclick = function() {
        document.getElementById("num1").value = 0;
        document.getElementById("num2").value = 0;
        document.getElementById("resultado").innerHTML = 0;
        document.getElementById("resultado").style.color = "black";
        alert("Esto se ha reseteado");
    }

    function ejecutarOperacion(operacion) {
  
        const n1 = parseFloat(document.getElementById("num1").value);
        const n2 = parseFloat(document.getElementById("num2").value);
        let res;

        switch (operacion) {
            case '+': res = n1 + n2; break;
            case '-': res = n1 - n2; break;
            case '*': res = n1 * n2; break;
            case '/': if (n2 !== 0) res = n1 / n2; else res = "Error: Div / 0"; break;
            case '%': res = n1 % n2;break;
        }

        const spanRes = document.getElementById("resultado");
        spanRes.innerHTML = res;

        spanRes.style.color = (typeof res === "string") ? "red" : "blue";
    }
}
