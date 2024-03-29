$('.login').click(function(){
    $('.noinvite').toggle()
    $('.invite').toggle()
})

$('.flag_off').click(function(){
    $('.flag_off').toggle()
    $('.flag_on').toggle()
    updateUser({'create':true})
    that = $(this).parent().children('.flag_on').children('.tooltiptext_on')
    that.show()
    that.fadeOut( 10000)

})

$('.flag_on').click(function(){
    $('.flag_off').toggle()
    $('.flag_on').toggle()
    updateUser({'create':false})
})



$(document).ready(function(){
    data = fillParameters()
    
    invitesClimbers(data)                    
    indProjects(data)            
    ownProjects(data)
    histProjects(data)
    if (user){
        $('.flag_off').hide()
        $('.flag_on').show()
    } else {
    $('.flag_off').show()
        $('.flag_on').hide()
    }
    clickfunctions()
    $('#indTel').mask('(00)000000000');
}
)

$("#inviteClimber").click(function(){
    inviteClimber()
})

function inviteClimber(){
    showmodal('modalInvite')
    $("#invite_number").text((invites_used+1).toString())
    $("#num_invites_invite").text(invites_available.toString())
    $("#invite_number_mobile").text((invites_used+1).toString())
    $("#num_invites_invite_mobile").text(invites_available.toString())
}

function indProjects(data){
    $.each(data['indProjects'],function(j,i){
        project = i['company']
        status = i['status']
        t = '<p class="l1" style="color: white;padding-top:30px">'+project+'</p>'
        t += '<table class="table_projects invite" style="padding-top: 15vh;width: 100%;"><tr>'
        if (status=='indicated'){
           t+='<td class="p3" style="color:#FFF">Indicação Recebida</td>' 
           t+='<td class="p3" style="color:#666666">Em Negociação</td>' 
           t+='<td class="p3" style="color:#666666">Status Final</td>' 
           t+='</table>'
           t+='<div class="progress_backline"><div class="progress_line" style="width:33%"></div></div>'
        } else if (status=='negociation') {
            t+='<td class="p3" style="color:#666666">Indicação Recebida</td>' 
            t+='<td class="p3" style="color:#FFF">Em Negociação</td>' 
            t+='<td class="p3" style="color:#666666">Status Final</td>'
            t+='</table>'
            t+='<div class="progress_backline"><div class="progress_line" style="width:66%"></div></div>'
        } else if (status=='doing'|status=='finished'|status=='payment') {
            t+='<td class="p3" style="color:#666666">Indicação Recebida</td>' 
            t+='<td class="p3" style="color:#666666">Em Negociação</td>' 
            t+='<td class="p3" style="color:#B585B4">Negócio Fechado!</td>'
            t+='</table>'
            t+='<div class="progress_backline"><div class="progress_line" style="width:100%"></div></div>'
        } else if (status=='rejected') {
            t+='<td class="p3" style="color:#666666">Indicação Recebida</td>' 
            t+='<td class="p3" style="color:#666666">Em Negociação</td>' 
            t+='<td class="p3"style="color:#CF684D">Proposta recusada</td>'
            t+='</table>'
            t+='<div class="progress_backline"><div class="progress_line" style="width:100%"></div></div>'
        }
        t+
        // <td class='number_line' style="padding-left: 0;">Construtora Richter</td>
        $("#indprojects_table").append(t)
        indprojects+=1

    })
    if (indprojects==0){
        $("#indprojects_0").show()
    } else {
        $("#indprojects_1").show()
    }
}



function ownProjects(data){
    ownprojects=0
    $.each(data['ownProjects'],function(j,i){
        idProject = i['id']
        company = i['company']
        status = i['status']
        bloq_creat = i['bloq_creat']
        services = i['services'].join()
        if (bloq_creat){
            b = "   <div class='tooltip_flag'><span idproject="+idProject+" class='lamp_off' style='display: none;'>\
            <img  src='./climber/mountain/images/lamp_off.png'>\
            <span class='tooltiptext'>Não consegue progredir na criação? \
            Avisa que a gente dá uma mão. </span>\
      </span></div>\
      <span idproject="+idProject+" class='lamp_on'><img src='./climber/mountain/images/lamp_on.png'></span>\
   "
        } else {
            b = "   <div class='tooltip_flag'><span idproject="+idProject+" class='lamp_off'>\
            <img  src='./climber/mountain/images/lamp_off.png'>\
            <span class='tooltiptext'>Não consegue progredir na criação? \
            Avisa que a gente dá uma mão. </span>\
      </span></div>\
      <span idproject="+idProject+" class='lamp_on' style='display: none;'><img src='./climber/mountain/images/lamp_on.png'></span>\
   "
        }
        if (status!='finished'){        
        t=''
        t += '<table class="table_projects invite" style="padding-top: 15vh;width: 100%;"><tr>'
        t+='<td class="p3" style="color:#FFF;font-weight: bold;">Projeto</td>' 
        t+='<td class="p3" style="color:#FFF;font-weight: bold;">Cliente</td>' 
        t+='<td class="p3" style="text-align:center;color:#FFF;font-weight: bold;">Bloqueio Criativo</td></tr>'

           t+='<td class="p3" style="color:#FFF">'+services+'</td>' 
           t+='<td class="p3" style="color:#FFF">'+company+'</td>' 
           t+='<td class="p3" style="text-align:center;color:#FFF">'+b+'</td>' 
           t+='</tr></table>'
        
        // <td class='number_line' style="padding-left: 0;">Construtora Richter</td>
        $("#ownprojects_table").append(t)
        ownprojects+=1
        }

    })
    if (ownprojects==0){
        $("#ownprojects_0").show()
    } else {
        $("#ownprojects_1").show()
    }
}



function histProjects(data){
    histprojects=0
    $.each(data['ownProjects'],function(j,i){
        company = i['company']
        status = i['status']
        services = i['services'].join()
        if (status=='finished'){

        
        t=''
        t += '<table class="table_projects invite" style="padding-top: 15vh;width: 100%;"><tr>'
           t+='<td class="p3" style="color:#FFF">'+services+'</td>' 
           t+='<td class="p3" style="color:#FFF">'+company+'</td>' 
           t+='<td class="p3" style="text-align:center;color:#FFF"><span class="link">Feedbacks</span></td>' 
           t+='</tr></table>'
        
        // <td class='number_line' style="padding-left: 0;">Construtora Richter</td>
        $("#histprojects_table").append(t)
        histprojects+=1
        }

    })
    if (histprojects==0){
        $("#histprojects_0").show()
    } else {
        $("#histprojects_1").show()
    }
}

function invitesClimbers(data){
    invites_used = 0
    invites_available = 0
    indprojects = 0
    next_invite=null
    $.each(data['invites'],function(i,j){
        if(j['to']==null){
            if (next_invite==null){
                next_invite=j['inviteID']
            }
            invites_available+=1
        } else {
            invites_used+=1
        }
    })

    if (invites_used==0){
        $("#invite_0").show()
    } else {
        $("#invite_1").show()
        $("#num_climbers").text(invites_used.toString())
        $("#num_invites").text(invites_available.toString())
        $("#invite_1").show()
    }

    $("#sendInvite").click(function(){
        filled = true
            dict = {
                "ID":next_invite,
                "user_to":$("#invite_name").val(),
                "user_email_to":$("#invite_email").val(),
                "user_from":user['name'].split(" ")[0],
                "message":$("#invite_msg").val()
                    
                },
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
                url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/inviteUser",
                data: {
                    "ID":next_invite,
                    "user_to":$("#invite_name").val(),
                    "user_email_to":$("#invite_email").val(),
                    "user_from":user['name'].split(" ")[0],
                    "message":$("#invite_msg").val()
                        
                    },
                dataType: "json",
                success:function (data){
                    setTimeout(() => { console.log("Enviando..."); }, 2000);
                    alert("Convite Enviado!")
                    location.reload();              
                },
                fail:function (data){
                  alert("error on sending invite! Check with administrator")
                }
              });
            }
    })

    $("#sendInvite_mobile").click(function(){
        filled = true
            dict = {
                "ID":next_invite,
                "user_to":$("#invite_name_mobile").val(),
                "user_email_to":$("#invite_email_mobile").val(),
                "user_from":user['name'].split(" ")[0],
                "message":$("#invite_msg_mobile").val()
                    
                },
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
                url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/inviteUser",
                data: {
                    "ID":next_invite,
                    "user_to":$("#invite_name_mobile").val(),
                    "user_email_to":$("#invite_email_mobile").val(),
                    "user_from":user['name'].split(" ")[0],
                    "message":$("#invite_msg_mobile").val()
                        
                    },
                dataType: "json",
                success:function (data){
                    setTimeout(() => { console.log("Enviando..."); }, 2000);
                    alert("Convite Enviado!")
                    location.reload();              
                },
                fail:function (data){
                  alert("error on sending invite! Check with administrator")
                }
              });
            }
    })
}

function clickfunctions(){
    $('.lamp_off').click(function(){
        idP = $(this).attr('idproject')
        $.each(data["ownProjects"],function(i,j){
            if (j['id']=idP){
                projectBloq=j
            }})
        showmodal("modalBloq")
    })

    $('.lamp_on').click(function(){
        idP = $(this).attr('idproject')
        $.each(data["ownProjects"],function(i,j){
            if (j['id']=idP){
                projectBloq=j
            }})
            showmodal("modalBloqRem")
    })

    $("#sendBloq").click(function(){
        data = {
            'climber':user['name'],
            'email':user['email'],
            'bloq':$("#bloq_creat").val(),
            'project':projectBloq['id'],
            'projectName':projectBloq['services'].join(),
            'projectComp':projectBloq['company'],
            'set':true
        }
        $.ajax({
            type: "GET",
            url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/blockCreat",
            data: {'data':JSON.stringify(data)},
            dataType: "json",
            success:function (data){
                alert("Bloqueio Enviado! Entraremos em contato logo!")
                closemodal('modalBloq')
                $("[idproject="+projectBloq['id']+"]").toggle()
            },
            fail:function (data){
              alert("error on sending message! Check with administrator")
            }
          });
    })
    $("#exitBloq").click(function(){
        closemodal('modalBloqRem')
    })
    $("#removeBloq").click(function(){
        data = {
            'climber':user['name'],
            'email':user['email'],
            'bloq':$("#bloq_creat").val(),
            'project':projectBloq['id'],
            'projectName':projectBloq['services'].join(),
            'projectComp':projectBloq['company'],
            'set':false
        }
        $.ajax({
            type: "GET",
            url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/blockCreat",
            data: {'data':JSON.stringify(data)},
            dataType: "json",
            success:function (data){
                alert("Bloqueio Removido!")
                closemodal('modalBloqRem')
                $("[idproject="+projectBloq['id']+"]").toggle()
            },
            fail:function (data){
              alert("error on sending message! Check with administrator")
            }
          });
    })

    $('#indCustomer').click(function(){
        data = {
            "climber":user['name'],
            "email_climber":user['email'],
            "company":$("#indCompany").val(),
            "tel":$("#indTel").val(),
            "responsable":$("#indResp").val(),
            "email":$("#indEmail").val(),
            "bonus":$('#indBonus:checked').val()
        }
        $.each( data, function( key, value ) {
            if (value==""){
            alert("Preecha todos os campos!");
            filled=false
            return false;
            };
            });
            if (filled){
        $.ajax({
            type: "GET",
            url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/newIndication",
            data: {'data':JSON.stringify(data)},
            dataType: "json",
            success:function (data){
                setTimeout(() => { console.log("Enviando..."); }, 2000);
                alert("Indicação Enviada!")
                location.reload(); 
            },
            error:function (data){
              alert("error on sending message! Check with administrator")
            }
          });
        }

    })

}