user = JSON.parse(sessionStorage['user'])

$(document).ready(function(){

    $.each($('.textfield'),function(){
        $(this).html(user[$(this).attr('id')])
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
        updateUser(data)
    
    }