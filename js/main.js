$(document).ready(function () {

  $('#p1').hover(function () {
    $(this).fadeOut()
  })

  $('#p2').click(function(){
    $(this).fadeOut()
  })
  
  $('#p3').dblclick(function(){
    $(this).fadeOut()
  })
  
  $('#p4').mouseout(function(){
    $(this).fadeOut()
  })
  
  $(document).keypress(function(e){
    if(e.which == 13){
      $('#p5').fadeOut()
    }  
  })

})




