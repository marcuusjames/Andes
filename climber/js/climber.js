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
    return data
}

function updateUser(updates){
    $.ajax({
        type: "GET",
        url: "https://us-south.functions.appdomain.cloud/api/v1/web/marcus.james.pereira%40usp.br_dev/Users/updateUser",
        data: {'email':user['email'],'updates':updates},
        dataType: "json",
        success:function (data){
            console.log("Updated!")
        },
        fail:function (data){
          alert("error updating data!")
        }
      });
}