
//Adds the 'bg-nav-colored' class to the navbar on scroll, changing its background color
$(function () {
    $(document).scroll(function(){
      var nav = $("#navbar");
      nav.toggleClass("bg-nav-colored", $(this).scrollTop() > nav.height() );
    })
  });
  
bttbutton = document.getElementById("back-to-top-btn");
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        bttbutton.style.display = "block";
    } else {
        bttbutton.style.display = "none";
    }
};

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

    //Stiding down and up the paragraph, when the Read more button is clicked
    // Update the text on the button to "Read less", when the paragraph is toggled
    $(".btn-readmore").click(function() {
        $(this).next("div.readmore-info").slideToggle("slow");
        $(this).text(function(i, v){
            return v === 'Read more' ? 'Read less' : 'Read more'
         })
    });

    // Navbar becomes visible when scrolled, transparancy removed
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 1080);
     });

    //Back to Top button
    $('.btt-link').click(function(e) {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        })
    })

});