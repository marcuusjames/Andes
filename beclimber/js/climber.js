
$( "#button_invite" ).click(function() {
    if ($('.invite').val()=='TESTE'){
      $('#modalFirst').show('slow')
    } else {
      alert ("Convite incorreto! Favor tentar novamente")
    }
  });

  $(".exit").click(function(){
      $('#modalFirst').hide('slow')
  })

  
  $(".okbut").click(function(){
    $('.firstSession').hide('slow')
    
    $('.secondSession').show('slow')
})