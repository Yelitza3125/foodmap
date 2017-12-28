$(document).ready(function() {
    var select = $('#select');
    var btn = $('#search');
    var searchResult = select.val();
    var name = $('.name');


var datos = localStorage.getItem('datos');



$.each(foodMap, function(key, value) {
    var restaurant = key;
    console.log(restaurant); //nombres de los resturantes.
    var contenido = value;
    console.log(contenido); //los valores de cada key(restaurant)

    var ubicacion = contenido.Ubicacion;
    console.log(ubicacion); //contenido de ubicacion. Son objetos.

    var infoRestaurant = contenido.Informacion;

    $.each(ubicacion, function(key, value) {
       var distrito = key;
       console.log(distrito); //nombre del distrito.
      // for(var i = 0; i < ubicacion.length; i++) {


        if(datos === distrito) {
            // name.html(restaurant); //solo se esta copiando el último.


            /*$.each($arrButton, function(i, val) {
    $buttonControl.eq(i).on('click', function() {
      $img.attr('src', rutaLocal + arrImagenes[i].url);
    });
  });	
  $.each(productos, function( index, value ) {
     $( ".Brand" ).append( "<img src='"+this+"' > class='imagen'" );
});
  
  */
          // var index = 0;
            /*
            for( var i = 0; i <arrImagenes.length; i++) {
                var $img = $('<img> class ="results-img"');
                $img.attr('src', rutaLocal + arrImagenes[i].url);
            } */
            // Inicializamos con la primera imagen
            
            
            var section = $('.results');
            var container = $('.container');
            var row = $('#recomendaciones');
           // var col = $('<div/> class = "col-xs-12"')
            var col = $('<div/> class = "col-xs-6"')
            //var title = $('<h2/>');
           // title.html('Nuestras recomendaciones');
            var thumbnail = $('<div/> class = "thumbnail"');
            var contenedor = $('<div class = "option"></div>');

            var rutaLocal = '../assets/images/';
            var arrImagenes = [{url: '1.jpg'},
              {url: '2.jpg'},
              {url: '3.jpg'},
              {url: '4.jpg'}
            ];

            var $img = $('<img> class ="results-img"');
           $.each(arrImagenes, function(index) {          
                $img.attr('src', rutaLocal + arrImagenes[index].url); 
                //for( var i = 0; i <arrImagenes.length; i++) {
                // var  direccion = rutaLocal + arrImagenes[i].url;
                 //$img.attr('src', direccion);   
           })



            var restaurantName = $('<h3/>', {
                'class': 'name',
            });

            restaurantName.html(restaurant);
            
            var parrafo = $('<p/>', {
                'class': 'texto',
                'html' : infoRestaurant
            });
            
            var btn = $('<button/>', {
                'class': 'btn',
                'html' : 'Ver más'
            });

          // section.append(container);
          //  container.append(row);
            row.append(col);
            col.append(thumbnail);
            thumbnail.append($img);
            thumbnail.append(contenedor);
            contenedor.append(restaurantName, parrafo, btn);
  
         }
   //   }
     
       

       
    })
})

//Creando divs






/* var capaDiasSemana = $('<div/>', {
    'class' : 'diassemana',
    'id'    : 'id_' + user.id
}); */

/*/ Creamos un elemento para mostrar las promociones
     var optionproms = document.createElement('option');
     // le asignamos el valor a mostrar
     optionproms.id = 'optionproms' + i + '' + j ;
     optionproms.label = promsforSede[j];
     optionproms.value = dataNameSedes[i] + '_' + promsforSede[j];
     // le asignamos donde lo va a mostrar
     optgroupsedes.appendChild(optionproms);


    /*
    var datos = localStorage.getItem('Datos');
    name.html(datos);
    //alert(datos); */
/*
        $.each(foodMap, function(index, item){
            var datosFoodmap = item;
            var restaurant = index;
            console.log(datosFoodmap);

        
        $.each(datosFoodmap, function(key, value){
           var contenidoRestaurant = value;
           console.log(contenidoRestaurant);
            var ubicacion = contenidoRestaurant.Ubicacion;
            console.log(ubicacion);

        $.each(ubicacion, function(key, value){
            var distrito = ubicacion.value;
            console.log(distrito);
            if(distrito === datos) {
             console.log(restaurant); //Miraflores
            }
        })    
        }) 
         
     
   }) */
    
     // document.write("<br>"+i+" - "+miJSON[i].valor+" - "+miJSON[i].color+" - "+miJSON[i].caracteristica.tipo+" - "+miJSON[i].caracteristica.ref);
});