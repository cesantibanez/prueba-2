

$(document).ready(function() {


    var url_apiPerro = "https://api.thedogapi.com/v1";

    get_breeds(url_apiPerro);

    $('#perros').change(function() {
        if ($(this).val() !==  0) {
            get_breeds_by_name(url_apiPerro, $(this).val())
        }
    });


    var nroTotalImagenes = 10;
    var nroColumnasPorFila = 5;
    var selectorTablaHTML = "#lista-perros"
    var url = "https://api.thedogapi.com/v1/images/search?limit="+nroTotalImagenes

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");

});

function getBtnActionURL() {
    return "https://api.thedogapi.com/v1/images/search?limit=1";
}