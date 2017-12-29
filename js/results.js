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

      // for(var i = 0; i < ubicacion.length; i++) {


      /* Condicionando si el valor del select es igual a los distritos */ 
      if (datos === district) {
        var section = $('.results');
        var container = $('.container');
        var row = $('#recomendaciones');

        // Creando los contenedores:
        var col = $('<div class = "col-xs-6"> </div>');
        var thumbnail = $('<div class = "thumbnail"> </div>');
        var containerRestaurant = $('<div class = "caption"></div>');

       
        // Añadiendo imagenes
        var $img = $('<img>', {
          'class': 'results-img',
          'src': imagenes
        });
        
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
          'html': 'Ver más'
        });

        // Insertando los contenedores con append
        row.append(col);
        col.append(thumbnail);
        thumbnail.append($img);
        thumbnail.append(containerRestaurant);
        containerRestaurant.append(restaurantName, paragraph, btn);
      }  
    });
  });
});