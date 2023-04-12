$(document).ready(function(){
  $("#menu-toggle").click(function() {
    $("#side-nav").slideToggle(1000);
  });

  $(".info-title").click(function(){
    $(".info-content").slideToggle("slow")
  });
})

//! effects covered 
// toggle //  $("#side-nav").toggle(1000);
// fadeIn
// fadeOut
// fadeTo // for moving to a certain opacity
  // $("#side-nav").fadeTo(1000, 0.5, function(){
    // alert("hi there")
  // });
// slideUp
// slideDown
// slideToggle("slow")
// slideToggle("fast")
// slideToggle("fast", function(){
// alert("hi there")
  // })