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

    var webPage = content['pagina web'];
    // console.log(webPage);

    var plates = content.platos;    
    // console.log(plates);

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
        var col = $('<div class = "col-xs-8 col-xs-offset-2 col-lg-4"> </div>');
        var thumbnail = $('<div class = "thumbnail"> </div>');
        var containerRestaurant = $('<div class = "caption"></div>');
        

        // Añadiendo imagenes al azar de cada carpeta
        var $img = $('<img>', {
          'class': 'results-img img-responsive',
          'src': '../assets/images/' + restaurant + '/' + imagenes[Math.floor(Math.random() * imagenes.length)]
        });


        // Creando el texto de los platos de los resturantes
        var $dishes = $('<h4/>', {
          'html': 'Especial del día: ' + plates[Math.floor(Math.random() * plates.length)],
          'class': 'color-text'
        });
        
        // Variable para establecer el nombre del restaurante
        var restaurantName = $('<h3/>', {
          'class': 'name',
        });

        restaurantName.html(restaurant);

        /* LLamando a la función del contenido del modal */
        modalContent();

        var paragraph = $('<h4/>', {
          'class': 'text',
          'html': infoRestaurant
        });

        var web = $('<p/>', {
          'html': webPage,
          'class': 'color-text'
        });
        

        // Insertando los elementos
        row.append(col);
        col.append(thumbnail);
        thumbnail.append($img);
        thumbnail.append(containerRestaurant);
        containerRestaurant.append(restaurantName, paragraph, $dishes);

        // Función para los efectosde la imagen
        efectosImg();        
      } 

      function efectosImg() {
        $img.on('click', function() {
          $img
            .animate({width: 10}, 'slow')
            .animate({width: innerWidth}, 'slow');
        });
      }

      /* Contenido del modal */
      function modalContent() {
        var adress = $('<h4/>');
        adress.html('Dirección: ' + local);
        var places = $('<h3/>');
        places.html(restaurant);
        $('.modal-body').append(adress);
        places.prependTo(adress);
        var webPlace = $('<a/>', {
          'html': restaurant,
          'href': webPage,
          'target': '_blank'
        });

        var webText = $('<h4/>', {
          'html': 'Página web: ',
          'class': 'text-web'
        });

        webText.append(webPlace);
        adress.append(webText);      
      }
    });
  });
  
  /* Función para que al cerrar el modal se redireccione a la págima principal */
  $('#close').click(function() {
    window.location.href = '../views/principal.html';
  }); 
});

