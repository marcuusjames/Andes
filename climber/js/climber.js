try {
    user = JSON.parse(localStorage['user'])
} catch (e){
    window.location.replace("http://www.andescreation.com/climber/#");
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