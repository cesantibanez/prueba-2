

$(document).ready(function() {

    var url_apiGato = "https://api.thecatapi.com/v1";

    get_breeds(url_apiGato);

    $('#gatos').change(function() {
        if ($(this).val() !==  0) {
            get_breeds_by_name(url_apiGato, $(this).val())
        }
    });

});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
}