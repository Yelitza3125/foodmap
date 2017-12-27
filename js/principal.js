$(document).ready(function() {
  
  
    
    $('.info-title').animate({
        padding: '0.5em 1em' }, 'slow'); 

        var target = 0;
        
        function loadPage() {
            
          var $buttons = $('.control');
          var $previous = $('.previous');
          var $next = $('.next');
        
          $buttons.click(changeImage);
          $previous.click(previousImage);
          $next.click(nextImage);
        };
        
        function changeImage() {
          target = parseInt($(this).data('target'));
          showImage(target);
        };
        
        function previousImage(e) {
          e.preventDefault();
          target = target - 1;
          target = (target < 0) ? 4 : target;
          showImage(target);
          $buttons.css('background', 'blue');
        };
        
        function nextImage(e) {
          e.preventDefault();
          target = target + 1;
          target = (target > 4) ? 0 : target;
          showImage(target);
        };
        
        function showImage(target) {
          var $lastSlide = $('div.active');
          var $slide = $("div[data-slide='" + target + "']");
          $lastSlide.removeClass('active');
          $slide.addClass('active');
        };
        
        var select = $('#select');
        var btn = $('#search');
        var option = $('option');

        function select() {
          if(select.val()) {
            sentData();
          }
        }

        $(btn).click(function sentData(event) {
          var data = $(select).val();
          localStorage.setItem('Datos' , data);
         
         window.location.href = '../views/results.html';
          
          
          
        });

       
        /*Funcion de Capturar, Almacenar datos y Limpiar campos*/ 
});


/*Tenemos un input, tipo texto, el cual pensamos escribir un nombre, le asignamos un identificador al input llamado nombretxt, entonces procedemos a capturar lo escrito en el campo de texto y guardarlo en una variable para luego guardarlo en el localstorage.

var nom = document.getElementById(“nombretxt”).value;
 localStorage.setItem(“Nombre”,nom);*/

