$(document).ready(function() {
  // Animando el padding del título
  $('.info-title').animate({
    padding: '0.5em 1em' }, 'slow'); 


  /* Código del carrusel */
  var rutaLocal = '../assets/images/';
  var arrImagenes = [ '1.jpg', '2.jpg', '3.jpg', '4.jpg'];

  var index = 0;
  
  /* Instancializando las variables de jQuery para identificar las variables que guardan
   elementos del DOM que obtenemos con jQuery */
  var $img = $('#img');
  var $slider = $('.slider');
  var $divControl = $('.controles');
  
  // Inicializamos con la primera imagen
  $img.attr('src', rutaLocal + arrImagenes[0]);
    
  // Tiempo de cambio
  var time = 3000;
  
  // Funcion  random de las imágenes
  function randomImg() {
    var randVal = Math.random() * 4;
    return typeof 0 === 'undefined' ? Math.round(randVal) : randVal.toFixed(0);
  }
  // Función timer
  var timer = setInterval(function() {
    // Seleciona una imagen de la lista
    var ram = arrImagenes[parseFloat(randomImg(arrImagenes.length)) ];
    // Cambia la imagen
    $img.attr('src', rutaLocal + ram);  
  }, time);
 

  /* Funcion de Capturar, Almacenar datos y Limpiar el campo del select*/ 
  $('.btn').click(function sentData(event) {
    var data = $(select).val();
    localStorage.setItem('datos', data);
         
    window.location.href = '../views/results.html';
    $('#select').val('');
  });
});


