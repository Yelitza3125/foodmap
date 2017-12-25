$(document).ready(function() {

/*Funcion para desaparecer el gif y aparecer el titulo. */
setInterval(function title(){
    $('.logo').replaceWith('<h1 class=title><strong>Itadakimasu </strong></h1>')
    $('.title').animate({fontSize: '4em'}, 'swing');
}, 3000);

/*
  setTimeout(function () {
    
	 }, 5000); */
});
