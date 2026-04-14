function siguiente(){
    window.location.href = "present.html";
}


function formulario(){
    window.location.href = "formulario.html";
}


document.getElementById("pagina2").addEventListener("click",siguiente);
document.getElementById("pagina3").addEventListener("click",formulario);