
/*Jose Alberto Solis Godoy*/

window.onload = document.getElementById("enviar").disabled = true;

function requerido(elemento) {

    if(elemento.value == ""){

        elemento.style.border = "red 2px solid";

    }
    else {
        elemento.style.border = "green 2px solid";
    }

}

function comprobar(){

    if(document.getElementById("aceptar").checked && document.getElementById("lopd").checked && document.getElementById("nombre").value != "" && document.getElementById("nombreelf").value != "" && document.getElementById("cuenta").value != ""){

        document.getElementById("enviar").disabled = false;

    }
    else{
        document.getElementById("enviar").disabled = true;
    }

}