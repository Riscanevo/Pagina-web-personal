let menuVisible = false;
//FUNCIÓN  QUE OCULTA O MUESTRA EL MENU
function mostrarocultarmenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
     }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
     }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}