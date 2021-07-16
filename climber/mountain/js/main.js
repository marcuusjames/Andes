$('.login').click(function(){
    $('.noinvite').toggle()
    $('.invite').toggle()
})

$('.flag_off').click(function(){
    console.log('teste')
    $('.flag_off').toggle()
    $('.flag_on').toggle()
})

$('.flag_on').click(function(){
    $('.flag_off').toggle()
    $('.flag_on').toggle()
})
$(document).ready(function(){
    fillParameters()
      
}
)

$("#inviteClimber").click(function(){
    console.log('teste')
    inviteClimber()
})

function inviteClimber(){
    showmodal('modalInvite')
}