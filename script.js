//creación de funcionalidad para boton scroll-Top//

const scrollTop = document.getElementById('scroll-Top');

//funcion para esconder el scrolltop cuando la pagina se esta inicializando//

window.onload =()=>{
  scrollTop.style.visibility = "hidden";

  scrollTop.style.opacity = 0;
};

//funcion para controlar si la pagina hace scroll mas de 200px, 
//Se mostrara el boton de scroll

window.onscroll =()=>{
  if (window.scrollY > 480) {

    scrollTop.style.visibility = "visible";

    scrollTop.style.opacity = 1;
     
  }else{
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
  };
  
};
