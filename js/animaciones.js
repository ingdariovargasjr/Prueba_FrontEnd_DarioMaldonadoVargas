var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel);

//document.getElementById("gray").style.hover.fill = "cyan"; 

function abrir() {
  document.getElementById("menu").style.width = "250px";
  document.getElementById("gray").style.width = "100%";
  document.getElementById("gray").style.opacity = "0.8";
  
  
}

function cerrar() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("gray").style.width = "0%";
  document.getElementById("gray").style.opacity = "0";   
}

function esc(){
    if (event.keyCode == 27) {
        document.getElementById("menu").style.width = "0";
        document.getElementById("gray").style.width = "0%";
        document.getElementById("gray").style.opacity = "0";
  }
}