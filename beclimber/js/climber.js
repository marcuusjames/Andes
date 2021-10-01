
$( "#button_invite" ).click(function() {
  dict = {"inviteID":$("#inviteID").val()
  }
  filled = true
  $.each( dict, function( key, value ) {
    if (value==""){
    alert("Preecha o número do convite!");
    filled=false
    return false;
    };
  });
  if (filled){
  $.ajax({
    type: "GET",
    url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/checkInvite",
    data: dict,
    dataType: "json",
    success:function (data){
      localStorage['email_to']=data['email']
      localStorage['inviteID']=$("#inviteID").val()
      window.location.href = "https://andescreation.com/registerclimber/#";
      console.log(data)
    },
    error:function (xhr, textStatus, errorThrown){
      console.log(xhr.status)
      if (xhr.status==401){
        alert('Convite não encontrado')
      } else {
        alert('Convite já usado!')
      }
    }
  });
  
  }
  });

  $(".exit").click(function(){
    $('.premodal').hide()
      $('.modalAndes').hide()
  })

  
  $(".okbut").click(function(){
    $('.firstSession').hide()
    
    $('.secondSession').show()
})

$( ".loginref" ).click(function() {
  
  showmodal("modalLogin")
  $("#email_login").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#login_button").click();
    }
});
$("#pass_login").keyup(function(event) {
  if (event.keyCode === 13) {
      $("#login_button").click();
  }
});

  }
);

$("#forgotPass").click(function(){
  console.log('oi')
  $("#loginSession").hide()
  $("#passSession").show()
})
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
  showloader()
$.ajax({
  type: "GET",
  url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/login",
  data: dict,
  dataType: "json",
  success:function (data){
    console.log(data)
    sessionStorage['user']=JSON.stringify(data)
    window.location.href = "https://andescreation.com/climber/";

  },
  error:function (data){
    closeloader()
    if (data['responseJSON']['error']=='email'){
      alert('E-mail não encontrado')
    } else {
      alert('Senha incorreta')
    }
  }
});

}
});

$("#reset_button").click(function(){
  dict = {"email":$("#email_reset").val()
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
  url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/requestPass",
  data: {'email':$("#email_pass").val()},
  dataType: "json",
  success:function (data){
    alert("Enviamos um e-mail para você para recuperarmos sua senha!")
    $("#loginSession").show()
    $("#passSession").hide()

  },
  error:function (data){
    closeloader()
    if (data['responseJSON']['error']=='email'){
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