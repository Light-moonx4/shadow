// ===== EVENTO CLICK =====
document.getElementById("btn").onclick = function () {
  alert(" boton de Proyecto funcionando correctamente");
};
//
function inicio (){
    window.location.href ="index.html";
};


function galeria(){
    window.location.href ="present.html";
};

document.getElementById("incio").addEventListener("click",inicio);
document.getElementById("galeria").addEventListener("click",galeria);