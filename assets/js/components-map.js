$(document).ready(function() {
    //Toggles the selected class for each place type------------------------------------------

    $('#accommodation').click(function() {
        $('#restaurant').removeClass('active');
        $('#attraction').removeClass('active');
        $('#store').removeClass('active');
        $('#accommodation').addClass('active');
    });
    $('#restaurant').click(function() {
        $('#accommodation').removeClass('active');
        $('#attraction').removeClass('active');
        $('#store').removeClass('active');
        $('#restaurant').addClass('active');
    });
    $('#attraction').click(function() {
        $('#restaurant').removeClass('active');
        $('#accommodation').removeClass('active');
        $('#store').removeClass('active');
        $('#attraction').addClass('active');
    });
    $('#store').click(function() {
        $('#restaurant').removeClass('active');
        $('#attraction').removeClass('active');
        $('#accommodation').removeClass('active');
        $('#store').addClass('active');
    });

});
