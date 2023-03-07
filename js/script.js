
/*funcion modificada de internet para menu hamburguesa*/

function myFunction() {
 if (window.matchMedia("(max-width: 800px)").matches){

  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none"
  } else {
    x.style.display = "block"
  }
}    }  
   
setTimeout(myFunction, 50000)

function closeNav() {
    
if (window.matchMedia("(max-width: 800px)").matches){
document.getElementById("myLinks").style.display="none"

}
}
/*fin menu hamburguesa*/


/*funcion agregar texto a productos*/

function agregarText() {
  document.getElementById("text-prod").style.display="flex"}

function sacarText() {
  document.getElementById("text-prod").style.display="none"}

function agregarText2() {
  document.getElementById("text-prod-2").style.display="flex"}

function sacarText2() {
  document.getElementById("text-prod-2").style.display="none"}

function agregarText3() {
  document.getElementById("text-prod-3").style.display="flex"}

function sacarText3() {
  document.getElementById("text-prod-3").style.display="none"}

