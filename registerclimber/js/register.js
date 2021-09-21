$(document).ready(function(){
    showloader()
    $("#nav_about").addClass('actual')
    $('.select2tags').select2({
    placeholder: this.ph,
    tags: true,
    language: {
            noResults: function (params) {
            return "Sem resultados";
            }
        }
        });
        https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/getCities
            
            // Append it to the select
            $.ajax({
                type: "GET",
                url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/getCities",
                data: {},
                dataType: "json",
                success:function (data){
                    console.log(data)
                    $.each(data['cities'],function(i,j){
                        var newOption = new Option(j, j, true, true);
                        $('.places').append(newOption);
                    })
                    $('.places').val(null).trigger('change');
                    closeloader()
                },
                error:function (data){
                    alert("Erro!")
                
                }
            });
            
    $('#telefone').mask('(00)000000000');
    $('#mwi').mask('00.000.000/0000-00');
    try {
        inviteID = localStorage['inviteID']
        email_to = localStorage['email_to']
        if (typeof localStorage['inviteID'] === 'undefined'){
            window.location.replace("http://andescreation.com/");
        }
        $("#email").val(email_to)
    } catch (e){
        window.location.replace("http://andescreation.com/");
    }
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
    registerClimber();
    }
    
});

$(".nofield").change(function(){
    $("."+$(this).attr('id').slice(2,)).val('')
    $("."+$(this).attr('id').slice(2,)).prop('disabled', $(this).prop('checked'));
    if ($(this).attr('id').slice(2,)=='formation'){
        document.querySelector('#curso_nivel').setValue('')
    }
}
)



  
  $(".homebut").click(function(){
    sessionStorage['user']=JSON.stringify(data)
    window.location.replace("http://andescreation.com/climber/#");

})

$(".tagtext").click(function(){
    that=this
    if ($(this).hasClass('tagexclusive')){
        $.each($(this).parent().find('.tagtext'),function(){
            $(this).removeClass('tagclick')
        })
    } else {
        $.each($(this).parent().find('.tagexclusive'),function(){
            $(this).removeClass('tagclick')
        })
    }
    $(that).toggleClass('tagclick')
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

    $(".select2tags").each(function(){
        data[$(this).attr('id')]=$(this).val()
    })


    $('.inputfield').each(function(){
        data[$(this).attr('id')]=$(this).prop('checked')
    })

    $('.radiofield').each(function(){
        data[$(this).attr('id')]=$('input[name='+$(this).attr('id').slice(0, -1)+']:checked').val();
    })

    $.each($(".numbers_line"),function(){
        f = $(this).attr('id')
        $.each($(this).find(".number_line"),function(){
            if ($(this).hasClass('select_line')){
                n = $(this).text()
            }
        })
        data[f]=n
    })

    data['status']='active'
    data['create']=true
    data['inviteID']=localStorage['inviteID']
    showloader()
    $.ajax({
        type: "GET",
        url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/insertUser",
        data: {data:JSON.stringify(data)},
        dataType: "json",
        success:function (data){
            hideloader()
            showmodal("modalClimber")
        },
        error:function (data){
            closeloader()
            if (data['responseJSON']['status']=='Email'){
                alert('E-mail já cadastrado!')
            } else {
                alert("Erro!")
            }
          
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
                $(this).addClass('select_line')
            } else {
                $(this).css({'color':'#C5C5C5'})
                $(this).removeClass('select_line')
            }
            
        })
    
    console.log(num)
    console.log('teste')
})


form_level = [
    { label: 'Técnico', value: 'tecnico', alias: 'custom label for search' },
    { label: 'Bacharel', value: 'bacharel', description: 'custom description for label'},
    { label: 'Mestrado', value: 'mestrado' },
    { label: 'Doutorado', value: 'doutorado' },
    { label: 'Outro', value: 'other' }
  ]
  
    VirtualSelect.init({
    ele: '#curso_nivel',
    options: form_level,
    multiple: false,
    placeholder: 'Selecionar',
    searchPlaceholderText:'Procurar...'
  });

  form_gender = [
    
    { label: 'Homem cisgênero', value: 'homem', alias: 'custom label for search' },
    { label: 'Mulher cisgênero', value: 'mulher', description: 'custom description for label'},
    { label: 'Homem Transgênero', value: 'homemt' },
    { label: 'Mulher Transgênero', value: 'mulhert' },
    { label: 'Homem Transexual', value: 'homemts' },
    { label: 'Mulher Transexual', value: 'mulherts' },
    { label: 'Prefiro não responder', value: 'noanswer' },
    { label: 'Outro', value: 'other' }
  ]
  
    VirtualSelect.init({
    ele: '#gender',
    options: form_gender,
    multiple: false,
    placeholder: 'Selecionar',
    searchPlaceholderText:'Procurar...'
  });

  form_marital = [
    { label: 'Solteiro(a)', value: 'single', alias: 'custom label for search' },
    { label: 'Casado(a)', value: 'married', description: 'custom description for label'},
    { label: 'Divorciado(a)', value: 'divorcied' },
    { label: 'Viúvo(a)', value: 'widower' }
  ]
  
    VirtualSelect.init({
    ele: '#marital_status',
    options: form_marital,
    multiple: false,
    placeholder: 'Selecionar',
    searchPlaceholderText:'Procurar...'
  });

  $("#fotografo").change(function() {
    if(this.checked) {
        $("#fotografo_div").show()
    } else {
        $("#fotografo_div").hide()
    }
});

$("#designer").change(function() {
    if((this.checked)|($("#ilustrador").checked)) {
        $("#designer_div").show()
    } else {
        $("#designer_div").hide()
    }
});

$("#ilustrador").change(function() {
    if((this.checked)|($("#designer").checked)) {
        $("#designer_div").show()
    } else {
        $("#designer_div").hide()
    }
});

$(".menu_page_1").click(function(){
    
    $(".menu_page_"+idpage).addClass('menu_page_filled')
    $("#page"+idpage).hide();
    idpage=1
    $("#page"+idpage).show()
    $(".menu_page_"+idpage).addClass('menu_page_active')
    $(window).scrollTop($("#page"+idpage).offset().top);
})
$(".menu_page_2").click(function(){
    $(".menu_page_"+idpage).addClass('menu_page_filled')
    $("#page"+idpage).hide();
    idpage=2
    $("#page"+idpage).show()
    $(".menu_page_"+idpage).addClass('menu_page_active')
    $(window).scrollTop($("#page"+idpage).offset().top);
})
$(".menu_page_3").click(function(){
    $(".menu_page_"+idpage).addClass('menu_page_filled')
    $("#page"+idpage).hide();
    idpage=3
    $("#page"+idpage).show()
    $(".menu_page_"+idpage).addClass('menu_page_active')
    $(window).scrollTop($("#page"+idpage).offset().top);
})
$(".menu_page_4").click(function(){
    $(".menu_page_"+idpage).addClass('menu_page_filled')
    $("#page"+idpage).hide();
    idpage=4
    $("#page"+idpage).show()
    $(".menu_page_"+idpage).addClass('menu_page_active')
    $(window).scrollTop($("#page"+idpage).offset().top);
})

$(".pass").change(function(){
    if (($('#password_conf').val()!="")&($('#password').val()!="")){
    if (($('#password').val()==$("#password_conf").val())&($('#password').val()!="")&($('#password').val()!="")){
        $("#confpass").hide()
    } else {
        $("#confpass").show()
    }
}
})