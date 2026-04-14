function atras(){
    window.location.href = "index.html";
}
function perfiles(){
    window.location.href = "formulario.html";
}
document.getElementById("principal").addEventListener("click",atras);
document.getElementById("perfil").addEventListener("click",perfiles)