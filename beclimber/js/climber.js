
$( "#button_invite" ).click(function() {
    if ($('.invite').val()=='TESTE'){
      $('#modalFirst').show('slow')
    } else {
      alert ("Convite incorreto! Favor tentar novamente")
    }
  });

  $(".exit").click(function(){
      $('.modalAndes').hide('slow')
  })

  
  $(".okbut").click(function(){
    $('.firstSession').hide('slow')
    
    $('.secondSession').show('slow')
})

$( "#loginref" ).click(function() {
    $('#modalLogin').show('slow')
  }
);

$("#login_button").click(function(){
  dict = {"email":$("#email_login").val(),
"pass":$("#pass_login").val()
}
filled = true
$.each( dict, function( key, value ) {
  if (value==""){
  alert("Preecha todos os campos!");
  filled=false
  return false;
  };
});
if (filled){
$.ajax({
  type: "GET",
  url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/login",
  data: dict,
  dataType: "json",
  success:function (data){
    localStorage['user']=JSON.stringify(data)
    window.location.href = "file:///C:/Andes/climber/index.html#";

  },
  fail:function (data){
    if (data['error']=='email'){
      alert('E-mail não encontrado')
    } else {
      alert('Senha incorreta')
    }
  }
});

}
});

function loginSuccess(data){
  setWithExpiry('user',data['user'],60)
}
function loginError(data){
  if (data['error']=='email'){
    alert('E-mail não encontrado')
  } else {
    alert('Senha incorreta')
  }
}