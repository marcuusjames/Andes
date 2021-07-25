user = JSON.parse(sessionStorage['user'])

$(document).ready(function(){

    $.each($('.textfield'),function(){
        $(this).html(user[$(this).attr('id')])
    })
    function dataAtualFormatada(d){
        var data = new Date(d),
            dia  = data.getUTCDate().toString().padStart(2, '0'),
            mes  = (data.getUTCMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
            ano  = data.getUTCFullYear();
        return dia+"/"+mes+"/"+ano;
    }
    $.each($('.datefield'),function(){
        $(this).html(dataAtualFormatada(user[$(this).attr('id')]))
    })

    $.each($('.i_textfield'),function(){
        $(this).val(user[$(this).attr('id').slice(6,50)])
    })
    $.each($('.i_datefield'),function(){
        $(this).val(dataAtualFormatada(user[$(this).attr('id').slice(6,50)]))
    })

    

    $("#saveRep").click(function(){
        updateClimber()
        alert("Informações Atualizadas!")
    })

    })

    $(".edittextfield").click(function(){
        n = $(this).attr("id").slice(0,-4)
        $("#"+n).hide()
        $("#i_"+n).show()
        $("#input_"+n).focus()

        $("#"+n+"Edit").hide()
        $("#"+n+"Save").show()
    })

    $(".saveEdit").click(function(){
        n = $(this).attr("id").slice(0,-4)
        if ($("#input_"+n).hasClass('datefield')){
            var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
            var dt = new Date($("#input_"+n).val().replace(pattern,'$3-$2-$1'));
            updates = {
                n:dt
            }
        } else {
            updates = {
                n:$("#input_"+n).val()
            }
        }
        console.log(updates)
        updateUser(updates)
        $("#"+n).show()
        $("#i_"+n).hide()

        $("#"+n+"Edit").show()
        $("#"+n+"Save").hide()
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