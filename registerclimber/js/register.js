$(document).ready(function(){
    $('#telefone').mask('(00)000000000');
  });

idpage = 1
console.log(idpage)
$(".button_av").click(function(){
    $("#page"+idpage).hide('slow');
    idpage+=1
    $("#page"+idpage).show('slow')
});


$(".button_finish").click(function(){
    checkFields();
    registerClimber();
    
});



  $(".exit").click(function(){
      $('#modalClimber').hide('slow')
  })

  
  $(".homebut").click(function(){
    
    window.location.replace("file:///C:/Andes/climber/index.html#");

})

$(".tagtext").click(function(){
    console.log('teste')
    $(this).toggleClass('tagclick')
})

function checkFields(){
    if (($('#password').val()==$("#password_conf").val())&($('#password').val()!="")){
        console.log('ok')
    } else {
        alert('Senhas não são iguais ou senha está nula!')
    }
}

function registerClimber(){
    data = {'typeclimber':{}}
    $(".textfield").each(function() {
        data[$(this).attr('id')]=$(this).val()
    })
    $(".datefield").each(function(){
        var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
        var dt = new Date($(this).val().replace(pattern,'$3-$2-$1'));
        data[$(this).attr('id')]=dt;
    })
    $("#typeclimber").children('div').each(function(){
    $(this).children('input').each(function(){
        data['typeclimber'][$(this).attr('id')]=$(this).prop("checked")
    })})
    $(".tagsfield").each(function(){
        data[$(this).attr('id')]={}
        f = $(this).attr('id')
        $(this).children('.tagtext').each(function(){
            if($(this).hasClass('tagclick')){
                data[f][$(this).text()]=true
            } else {
                data[f][$(this).text()]=false
            }
        })
    })

    $('.inputfield').each(function(){
        data[$(this).attr('id')]=$(this).prop('checked')
    })

    $('.radiofield').each(function(){
        data[$(this).attr('id')]=$('input[name='+$(this).attr('id').slice(0, -1)+']:checked').val();
    })
    data['status']='register'
    data['create']=true
    $.ajax({
        type: "GET",
        url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/insertUser",
        data: data,
        dataType: "json",
        success:function (data){
            $("#modalClimber").show('slow')
        },
        fail:function (data){
          alert('Erro!')
        }
      });

    console.log(data)
}

function RadionButtonSelectedValueSet(name, SelectdValue) {
    $('input[name="' + name+ '"][value="' + SelectdValue + '"]').prop('checked', true);
}



$('.number_line').click(function(){
    num = $(this).text()
    if (num=='0'){
        perc = '0%'
    } else if (num=='1'){
        perc = '20%'
    }  else if (num=='2'){
        perc = '32%'
    }  else if (num=='3'){
        perc = '44%'
    }  else if (num=='4'){
        perc = '57%'
    }  else if (num=='5'){
        perc = '69%'
    }  else if (num=='6'){
        perc = '82%'
    }  else if (num=='7'){
        perc = '100%'
    } 
    $(this).parent().next('.progress_backline').children('.progress_line').each(function(){
            $(this).css({'width':perc})
        })

        $(this).parent().children('.number_line').each(function(){
            if (parseInt($(this).text())<=parseInt(num)){
                $(this).css({'color':'black'})
            } else {
                $(this).css({'color':'#C5C5C5'})
            }
            
        })
    
    console.log(num)
    console.log('teste')
})