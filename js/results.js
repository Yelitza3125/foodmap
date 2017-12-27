$(document).ready(function() {
    var select = $('#select');
    var btn = $('#search');
    var searchResult = select.val();
    var name = $('.name');


var datos = localStorage.getItem('Datos');
    name.html(datos);
/*
function showData() {
    if(datos === )
} */


    /*
    var datos = localStorage.getItem('Datos');
    name.html(datos);
    //alert(datos); */
    
});