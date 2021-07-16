try {
    user = JSON.parse(sessionStorage['user'])

getParameters(user)

} catch (e){
    window.location.replace("http://andescreation.com/beclimber");
}

$(".userVar").each(function() {
    if($(this).hasClass('textVar')){
        console.log(user[$(this).attr('id').substring(1)])
        $(this).text(user[$(this).attr('id').substring(1)])
    }

    if($(this).hasClass('tagsVar')){
        tags = user[$(this).attr('id').substring(1)]
        console.log(tags)
        that = this
        $.each(tags,function(i,j){
            console.log(i,j)
            if (j==true){
                $(that).append(
                    '<p class="tagtext">'+i+'</p>'
                )
            }
        })
    }
})

function getParameters(user){
    $.ajax({
        type: "GET",
        url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/getParameters",
        data: {'email':user['email']},
        dataType: "json",
        success:function (data){
          console.log(data)
          sessionStorage['userParameters']=JSON.stringify(data)
      
        },
        fail:function (data){
          alert("error collection data!@")
        }
      });
}

function fillParameters(){
    data = JSON.parse(sessionStorage['userParameters'])
    invites_used = 0
    invites_available = 0
    $.each(data['invites'],function(i,j){
        if(i['to']==null){
            invites_available+=1
        } else {
            invites_used+=1
        }
    })
    console.log(invites_used)
    console.log(invites_available)
    if (invites_used==0){
        $("#invite_0").show()
    } else {
        $("#invite_1").show()
        $("#num_climbers").text(invites_used.toString())
        $("#num_invites").text(invites_available.toString())
        $("#invite_1").show()
    }
}