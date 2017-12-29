$(document).ready(function() {

  // Animando el padding del título
  $('.info-title').animate({
    padding: '0.5em 1em' }, 'slow'); 

  var rutaLocal = '../assets/images/';
  var arrImagenes = [
    {url: '1.jpg'},
    {url: '2.jpg'},
    {url: '3.jpg'},
    {url: '4.jpg'}
  ];

  var index = 0;
  
  // Instanciamos las variables de jQuery utilizamos el simbolo de $ solo para identificar las variables que guardan
  // elementos del DOM que obtenemos con jQuery
  var $img = $('#img');
  var $slider = $('.slider');
  var $divControl = $('.controles');
  
  // Inicializamos con la primera imagen
  $img.attr('src', rutaLocal + arrImagenes[0].url);
    
  // Botones para cada imagen del array
  for (var i in arrImagenes) {
    $divControl.append('<button class="control"/>');
  }
  
  // Variable jquery con los botones de la clase control creado en la línea 22
  var $buttonControl = $('button.control');
  console.log($buttonControl);

  // Se utiliza el método jQuery.makeArray, para recorrerlo

  var $arrButton = $.makeArray($buttonControl);

  // Se comprueba si es un array con el método jQuery.isArray que es lo mismo que $.isArray    
  console.log($.isArray($arrButton));  
  // Se recorre el array de los botones para que al momento de dar click en el boton de control cambie la imagen
  // correspondiente según el indice, para ello, se utiliza el método jQuery.each que es lo mismo que $.each
  $.each($arrButton, function(i, val) {
    $buttonControl.eq(i).on('click', function() {
      $img.attr('src', rutaLocal + arrImagenes[i].url);
    });
  });	
  
  // Cuando se escuche el click en los botones de back y next
  $slider.on('click', '#next', function(event) {
    event.preventDefault();
    index++;
    index = (index >= arrImagenes.length) ? 0 : index;
    $img.attr('src', rutaLocal + arrImagenes[index].url);
  });
  
  $slider.on('click', '#back', function(event) {
    event.preventDefault();
    index--;
    index = (index < 0) ? arrImagenes.length - 1 : index;
    $img.attr('src', rutaLocal + arrImagenes[index].url);
  });


  /* Funcion de Capturar, Almacenar datos y Limpiar campos*/ 
  $('.btn').click(function sentData(event) {
    var data = $(select).val();
    localStorage.setItem('datos', data);
         
    window.location.href = '../views/results.html';
    $('#select').val('');
  });
});


