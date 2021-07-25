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
                $(this).css({'color':'black'})
            } else {
                $(this).css({'color':'#C5C5C5'})
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

    $('.select2tags').select2({
    placeholder: this.ph,
    tags: true
    })
