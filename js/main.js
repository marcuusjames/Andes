$('.open_menu').click(function(){
    $(this).parent().find('.ac_menu_div').toggle('slow');
    $(this).parent().find('.plus_menu').toggle();
    $(this).parent().find('.minus_menu').toggle();
})


