$(document).ready(function() {
    $("#submitButton").click(function() {
        $("#myModal").modal("show");
    });
    $(".img-packages").mouseout(function() {
      $(this).next().hide();
    });
    $(".img-packages").mouseover(function() {
        $(this).next().show();
    });
    
    
     $(".card").mouseout(function() {
      $(this).css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
    });
    $(".card").mouseover(function() {
        $(this).css("box-shadow", "10px 10px 5px grey");
    });


});

