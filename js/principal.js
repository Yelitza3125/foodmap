$(document).ready(function() {
    /*
    $('.info-title').animate({
        padding: '0.5em 1em' }, 'slow'); */

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
     

});    

