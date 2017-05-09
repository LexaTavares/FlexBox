var cerrar=document.getElementsByClassName('posicion-div');
var nodo= document.getElementById("hijo-container");
var boton=document.getElementsByClassName('boton');

for(var i=0;i<cerrar.length;i++){
  cerrar[i].addEventListener('click',removerPicture);
}
// function removerHijo(){
//   if(nodo.parentNode){
//     nodo.parentNode.removeChild(nodo);
//   }
// }
// for(var i=0;i<boton.length;i++){
//   boton[i].addEventListener('click',recuperar);
// }
// function recuperar() {
//   nodo=document.getElementsByClassName('cerrar').innerHTML;
// }
function removerPicture() {
  this.style.display="none";
}
boton[2].addEventListener('click',resturarPicture);
function resturarPicture(){
  for(var j=0;j<cerrar.length;j++){
    cerrar[j].style.display="flex";
   }
}
var textoIzq=document.getElementById("parrafoIzq");
var textoDer=document.getElementById("parrafoDer");

boton[1].addEventListener('click', ocultarymostrarParrafoDerecho);
boton[0].addEventListener('click',ocultarymostrarParrafoIzquierdo);


function ocultarymostrarParrafoDerecho() {
    if(textoDer.style.visibility=="visible"){
      textoDer.style.visibility="hidden";
    }else{
      textoDer.style.visibility="visible";
    }
  }
  function ocultarymostrarParrafoIzquierdo() {
      if(textoIzq.style.visibility=="visible"){
        textoIzq.style.visibility="hidden";
      }else{
        textoIzq.style.visibility="visible";
      }
    }
