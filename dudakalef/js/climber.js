
$( "#button_invite" ).click(function() {
    $('#modalFirst').show('slow')
  });

  $(".exit").click(function(){
      $('#modalFirst').hide('slow')
  })

  
  $(".okbut").click(function(){
    $('.firstSession').hide('slow')
    
    $('.secondSession').show('slow')
})