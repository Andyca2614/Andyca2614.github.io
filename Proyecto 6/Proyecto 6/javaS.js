//NavBar

var menu = document.getElementById("abrirMenu");
console.log(menu.id);
menu.addEventListener("click", AbrilCerral);
var menu_desplegable = document.querySelector(".links");
function AbrilCerral(){
  if(menu.classList.contains("burguer_close")){
    menu.classList.remove("burguer_close");
    menu_desplegable.classList.add("ocultito");
  }
  else{
    menu.classList.add("burguer_close");
    menu_desplegable.classList.remove("ocultito");
  }

}