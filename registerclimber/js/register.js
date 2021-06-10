idpage = 1
console.log(idpage)
$(".button_av").click(function(){

    
    $("#page"+idpage).hide('slow');
    idpage+=1
    $("#page"+idpage).show('slow')
});


$(".button_finish").click(function(){

    $("#modalClimber").show('slow')
});



  $(".exit").click(function(){
      $('#modalClimber').hide('slow')
  })

  
  $(".okbut").click(function(){
    
    $('.modalClimber').hide('slow')

})

$(".tagtext").click(function(){
    console.log('teste')
    $(this).toggleClass('tagclick')
})