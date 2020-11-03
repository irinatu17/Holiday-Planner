$(document).ready(function() {

    //Hiding readmore-info cards and carousel pictures when the page loads
   $('.readmore-info').hide();
    $('.img-carousel').hide();


    //Showing carousel modals by clicking the image

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

    //Adding shadow to the cards when they are hovered
    $(".card-img").mouseout(function() {
        $(this).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
    });

    $(".card-img").mouseover(function() {
        $(this).css("box-shadow", "10px 10px 5px grey");
    });

    //Stiding down and up the paragraph, when the Read more button is clicked
    $(".btn-readmore").click(function() {
        $(this).next("div.readmore-info").slideToggle("slow");
    });

    //Showes and hides the additional information about packages, when the image is hovered
    $(".img-packages").mouseout(function() {
        $(this).next().hide();
    });
    
    $(".img-packages").mouseover(function() {
        $(this).next().show();
    });
});
