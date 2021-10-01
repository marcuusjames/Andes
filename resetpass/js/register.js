$(document).ready(function(){
        let searchParams = new URLSearchParams(window.location.search)
        let param = searchParams.get('requestpass')
        console.log(param)
        $.ajax({
            type: "GET",
            url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/checkResetpass",
            data: {ID:param},
            dataType: "json",
            success:function (data){
                email=data['email']
                console.log(email)
            },
            error:function (data){
                $("#errorpage").show()
                $("#resetpage").hide()
              
            }
          });
        a=1
  });

idpage = 1
console.log(idpage)
$(".button_av").click(function(){
    $(".menu_page_"+idpage).addClass('menu_page_filled')
    $("#page"+idpage).hide();
    idpage+=1
    $("#page"+idpage).show()
    $(".menu_page_"+idpage).addClass('menu_page_active')
    $(window).scrollTop($("#page"+idpage).offset().top);
});


$(".button_finish").click(function(){
    c = checkFields()
    console.log(c)
    if (c){
    updateUser({'password':$("#password").val()});
    alert("Senha alterada com sucesso!")
    window.location.replace("https://andescreation.com/beclimber/#");
    }
    
});




  
  $(".homebut").click(function(){
    window.location.replace("https://andescreation.com/beclimber/#");

})

function checkFields(){
    x = true
    if (($('#password').val()==$("#password_conf").val())&($('#password').val()!="")){
        console.log('ok')
    } else {
        alert('Senhas não são iguais ou senha está nula!')
        return false
    }
    $('.requiredfield').each(function(){
        if (($(this).val()=='')&(x)){
            alert('Há campos não preenchidos!')
            x= false
        }
    })
    return x
}


$(".pass").change(function(){
    if (($('#password_conf').val()!="")&($('#password').val()!="")){
    if (($('#password').val()==$("#password_conf").val())&($('#password').val()!="")&($('#password').val()!="")){
        $("#confpass").hide()
    } else {
        $("#confpass").show()
    }
}
})

function updateUser(updates){
    $.ajax({
        type: "GET",
        url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/updateUser",
        data: {"data":JSON.stringify({'email':email,'updates':updates})},
        dataType: "json",
        success:function (data){
            console.log("Updated!")
        },
        fail:function (data){
          alert("error updating data!")
        }
      });
}