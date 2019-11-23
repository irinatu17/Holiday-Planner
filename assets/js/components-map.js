$(document).ready(function() {

    //Hides dropdown menus and popups when the page loads---------------------------------
    $('.readmore-info').hide();
    $('.img-carousel').hide();

        $(".img-packages").mouseout(function() {
            $(this).next().hide();
        });


        $(".img-packages").mouseover(function() {
            $(this).next().show();
        });

    //Showing carousel modals by clicking the image--------------------------------------

    $("#Morocco").click(function() {
        $("#MoroccoModal").modal("show");
    });
    $("#MoroccoMountain").click(function() {
        $("#MoroccoMountainsModal").modal("show");
    });
    $("#Sicily").click(function() {
        $("#SicilyModal").modal("show");
    });
    $("#russianNorth").click(function() {
        $("#RussiaNorthModal").modal("show");
    });
    $("#russiaTranssiberian").click(function() {
        $("#russiaTranssiberianNorthModal").modal("show");
    });
    $("#russiaUrals").click(function() {
        $("#russiaUralsModal").modal("show");
    });
    $("#IrelandDrinks").click(function() {
        $("#IrelandDrinksModal").modal("show");
    });
    $("#IrelandOcean").click(function() {
        $("#IrelandOceanModal").modal("show");
    });
    $("#Greece").click(function() {
        $("#GreeceModal").modal("show");
    });






    $(".card").mouseout(function() {
        $(this).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
    });
    $(".card").mouseover(function() {
        $(this).css("box-shadow", "10px 10px 5px grey");
    });

    $(".btn-readmore").click(function() {
        $(this).next("p.readmore-info").slideToggle();
    });



});
