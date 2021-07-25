user = JSON.parse(sessionStorage['user'])
$(".tagtext").click(function(){
    console.log('teste')
    $(this).toggleClass('tagclick')
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
            } else {
                $(this).css({'color':'#666'})
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
            console.log($radios)
            if($radios.is(':checked') === false) {
                $radios.filter('[value="'+user[$(this).attr('id')]+'"]').prop('checked', true);
            }
        });

    })