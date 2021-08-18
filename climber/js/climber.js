try {
    user = JSON.parse(sessionStorage['user'])
    if (user['socialname']==""){
        user['callname']=user['name'].split(' ')[0]
    } else {
        user['callname']=user['socialname'].split(' ')[0]
    }

getParameters(user)

} catch (e){
    window.location.replace("http://andescreation.com/beclimber");
}

$(".userVar").each(function() {
    if($(this).hasClass('textVar')){
        $(this).text(user[$(this).attr('id').substring(1)])
    }

    if($(this).hasClass('tagsVar')){
        tags = user[$(this).attr('id').substring(1)]
        that = this
        $.each(tags,function(i,j){
            if (j==true){
                $(that).append(
                    '<p class="tagtext" style="cursor:auto">'+i+'</p>'
                )
            }
        })
        $(that).append(
            '<p class="tagtext"><span class="editTag"><img src="climber/mountain/images/editpng.png"></span></p>'
        )
    }
    $('.editTag').click(function(){
        window.location.replace("http://andescreation.com/climber/tecnicas");
    })
})

function getParameters(user){
    $.ajax({
        type: "GET",
        url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/getParameters",
        data: {'email':user['email']},
        dataType: "json",
        success:function (data){
          sessionStorage['userParameters']=JSON.stringify(data)
      
        },
        fail:function (data){
          alert("error collection data!@")
        }
      });
}

function fillParameters(){
    data = JSON.parse(sessionStorage['userParameters'])
    return data
}

function updateUser(updates){
    $.ajax({
        type: "GET",
        url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/updateUser",
        data: {"data":JSON.stringify({'email':user['email'],'updates':updates})},
        dataType: "json",
        success:function (data){
            console.log("Updated!")
        },
        fail:function (data){
          alert("error updating data!")
        }
      });
}