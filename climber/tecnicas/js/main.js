user = JSON.parse(sessionStorage['user'])
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
                $(this).css({'color':'white'})
                $(this).addClass('select_line')
            } else {
                $(this).css({'color':'#666'})
                $(this).removeClass('select_line')
            }
            
        })
    
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
    searchPlaceholderText:'Procurar...',
    selectedValue:user['curso_nivel']
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
    searchPlaceholderText:'Procurar...',
    selectedValue:user['gender']
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
    searchPlaceholderText:'Procurar...',
    selectedValue:user['marital_status']
  });

    $('.select2tags').select2({
    placeholder: this.ph,
    tags: true
    })


$(document).ready(function(){
    
    $.each($('.select2tags'),function(){
        that=this
        $.each(user[$(that).attr('id')],function(){
                var newOption = new Option(this, this, false, false);
                $(that).append(newOption).trigger('change');
            })
            $(that).val(user[$(that).attr('id')]).change()
        })

    $.each($('.textfield'),function(){
        $(this).val(user[$(this).attr('id')])
    })

    $(".tagsfield").each(function(){
        f = $(this).attr('id')
        $(this).children('.tagtext').each(function(){
              g=this
             if(user[f][$(this).text()]){   
                $(this).toggleClass('tagclick')
            }
        })
    })

    $(".radiofield").each(function(){
    
            var $radios = $('input[name='+$(this).attr('id').slice(0, -1)+']');
            if($radios.is(':checked') === false) {
                $radios.filter('[value="'+user[$(this).attr('id')]+'"]').prop('checked', true);
            }
        });
        $.each(user["typeclimber"],function(i,j){
            console.log(i,j)
            $("#"+i).prop('checked', j);
            if (j){
                if (i=="ilustrador"){
                    i="designer"
                }
                $("#"+i+"_div").show()
            }

        })
    

    

    $("#saveRep").click(function(){
        updateClimber()
        alert("Informações Atualizadas!")
    })

    })


    function updateClimber(){
        data = {}
        $(".textfield").each(function() {
            data[$(this).attr('id')]=$(this).val()
        })
        $(".datefield").each(function(){
            var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
            var dt = new Date($(this).val().replace(pattern,'$3-$2-$1'));
            data[$(this).attr('id')]=dt;
        })
        data['typeclimber'] = {}
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
        updateUser(data)
    
    }

    
$(".numbers_line").each(function(){
    f = $(this).attr('id')
    $.each($(this).find(".number_line"),function(){
        if ($(this).text()==user[f]){
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
                        $(this).css({'color':'white'})
                        $(this).addClass('select_line')
                    } else {
                        $(this).css({'color':'#666'})
                        $(this).removeClass('select_line')
                    }
                    
                })
        }
    })
    
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
