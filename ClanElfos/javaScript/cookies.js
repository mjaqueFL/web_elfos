window.onload = iniciar;

function iniciar(){
    const nombre= getCookie("web");
    if (nombre=="")
        document.getElementById("overbox3").style.display = "block";
    if(nombre!=""){
        const mensaje = document.getElementById("overbox3");
        mensaje.parentElement.removeChild(mensaje);
    }
}

function crearCookie() {

    const d = new Date();
    d.setTime(d.getTime()+30*24*60*60*1000);
    const expiracion = "expires="+d.toUTCString();
    document.cookie = "web ="+"CookiesElfos" +";"+ expiracion +";path=/";
}
function getCookie(nombre){
    const nom = nombre+"=";
    const array = document.cookie.split(";");
    for (let i=0; i<array.length; i++){
        let c = array[i];
        while (c.charAt(0)==" "){
            c = c.substring(1);
        }
        if (c.indexOf(nombre)==0){
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}

function comprobarCookie() {
    const nombre= getCookie("web");
    if (nombre=="" || nombre==null){
        crearCookie();
        const mensaje = document.getElementById("overbox3");
        mensaje.parentElement.removeChild(mensaje);
    }
}