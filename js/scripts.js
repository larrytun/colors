$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("#paragraph01").click(function() {
    $(this).addClass("purple-background");
  });

  $("#paragraph02").click(function() {
    $(this).addClass("blue-background");
  });

  $("button#invert").click(function() {

    if($("body").css("background-color") === "rgb(0, 0, 0)"){
      $("body").removeClass();
    } else{
      $("body").addClass("dark-background");
      }
  });

});
