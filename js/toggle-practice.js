$(document).ready(function(){

  $(".content-box2").click(function() {
    $(".content-box2").animate({
      width: '500px',
      height: '400px'
    }, 3000).animate({
      fontSize: '30px'
    }, 3000);
  })

  $("button").click(function() {
    $(".content-box2").stop();
  })

  $("#menu-toggle").click(function() {
    $("#side-nav").slideToggle(1000);
  });

  $(".info-title").click(function(){
    $(".info-content").slideToggle("slow")
  });

  $(".content-box").click(function() {
    $(".content-box").animate({
      width: '500px',
      height: '300px'
      // add pixels to height of selected element
      // height: '+=200px'

    }, 1000);
    $(".content-after").show().animate({opacity: "1"}, 3000);



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

// show, hide, fade, and slide are all subfunctions of animate

// stop() // actually stop(false, false)
  // stop(false, false) // stop first animation, chained animation will still run, can keep using stop button to stop sequential animations   
// stop(true) //  stop all animations inside elemtn from happening
// stop(true, true) // when the button is clicked animations are finished off and stopped