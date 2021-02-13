
//Adds the 'bg-nav-colored' class to the navbar on scroll, changing its background color
$(function () {
    $(document).scroll(function(){
      var nav = $("#navbar");
      nav.toggleClass("bg-nav-colored", $(this).scrollTop() > nav.height() );
    })
  });

$(document).ready(function() {

    // Globe-spinner loading 
    $(window).on("load", function () {
        $("#spinner-overlay-wrapper").fadeOut();
    });

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

    // Navbar becomes visible when scrolled, transparancy removed
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 1080);
     });

});