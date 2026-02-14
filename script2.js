const texto = "Esto es para la personita que elijo, elegí y elegiría en todas mis vidas, a la que prometo amar y besar apenas tenga oportunidad, te amo mi prei";

let i = 0;
const velocidad = 45;

function escribir() {
    if (i < texto.length) {
        document.getElementById("typewriter").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, velocidad);
    }
}

window.onload = escribir;   