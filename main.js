$(document).ready(function() {
    $("#img1").click(function() {
      $("#img1").toggle();
        $(".design").toggle();
      });
      $(".design").click(function() {
        $("git add.design").toggle();
          $("#img1").toggle();
        });

        $("#img2").click(function() {
          $("#img2").toggle();
            $("#develop").toggle();
          });

          $("#develop").click(function() {
            $("#img2").toggle();
              $("#develop").toggle();
            });

            $("#img3").click(function() {
              $("#img3").toggle();
                $("#product").toggle();
              });
              $("#product").click(function() {
                $("#img3").toggle();
                  $("#product").toggle();
                });
})