$(document).ready(function() {
  var select = $('#select');
  var btn = $('#search');
  var searchResult = select.val();
  var name = $('.name');

  // Obteniendo el valor de la selección del select de la vista principal.  
  var datos = localStorage.getItem('datos');


  // Recorriendo el objeto foodMap
  $.each(foodMap, function(key, value) {
    /*  nombres de los resturantes. */
    var restaurant = key;
    // console.log(restaurant); 

    //  los valores de cada key(restaurant) 
    var content = value;
    // console.log(content);

    // contenido de ubicacion. Son objetos.
    var location = content.ubicacion;
    // console.log(location);

    var infoRestaurant = content.informacion;

    var imagenes = content.imagen;

    $.each(location, function(key, value) {
      // nombre del distrito.  
      var district = key;
      // console.log(district); 

      var local = value;
      // console.log(local);

      /* Condicionando si el valor del select es igual a los distritos */ 
      if (datos === district) {
        var section = $('.results');
        var container = $('.container');
        var row = $('#recomendaciones');
        

        // Creando los contenedores:
        var col = $('<div class = "col-xs-6"> </div>');
        var thumbnail = $('<div class = "thumbnail"> </div>');
        var containerRestaurant = $('<div class = "caption"></div>');
        

        // Añadiendo imagenes al azar de cada carpeta
        var $img = $('<img>', {
          'class': 'results-img',
          'src': '../assets/images/' + restaurant + '/' + imagenes[Math.floor(Math.random() * imagenes.length)]
        });

        // Función para los efectosde la imagen
        efectosImg();
        
        // Variable para establecer el nombre del restaurante
        var restaurantName = $('<h3/>', {
          'class': 'name',
        });

        restaurantName.html(restaurant);

        var paragraph = $('<p/>', {
          'class': 'text',
          'html': infoRestaurant
        });

        var btn = $('<button/>', {
          'class': 'btn',
          'html': 'Ver más',
          'data-toggle': 'modal',
          'data-target': '#myModal'
        });


        // Insertando los elementos
        row.append(col);
        col.append(thumbnail);
        thumbnail.append($img);
        thumbnail.append(containerRestaurant);
        containerRestaurant.append(restaurantName, paragraph, btn);
      } 

     function efectosImg() {
         $img.on('click', function() {
           $img
           .animate({width: 10}, 'slow')
           .animate({width: innerWidth}, 'slow');
         })
           
     }
    });
    
   
  });

});

/*$('#animar-1').on('click', function() {
    $('#animable')
       
      .animate({width: 200}, 'fast')
      .animate({height: 50, width: 50}, 'swing');
  })

  $('#animar-2').on('click', function() {
    $('#animable')
      .animate({left: '50%'}, 'slow')
      .animate({left: '40%'}, 'slow')
      .animate({width: 200}, 'fast')
      .animate({'font-size': '3rem'}, 1000);
  })*/