


$(document).ready(function() {

    var url_apiGato = "https://api.thecatapi.com/v1";

    get_breeds(url_apiGato);

    $('#gatos').change(function() {
        if ($(this).val() !==  0) {
            get_breeds_by_name(url_apiGato, $(this).val())
        }
    });


$(document).ready(function() {

    var nroTotalImagenes = 9;
    var nroColumnasPorFila = 3;
    var selectorTablaHTML = "#lista-gatos"
    var url = "https://api.thecatapi.com/v1/images/search?limit="+nroTotalImagenes

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");

});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
}