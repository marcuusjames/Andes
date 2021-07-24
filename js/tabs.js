$("head").append('\
<link rel="icon" href="http://andescreation.com/images/andesblack.png" type="image/ico" sizes="16x16">\
    <title>Andes Creation Capital</title>\
    ')
    
$("#nav-placeholder").addClass('navbar_fixed')

$("#nav-placeholder").append('\
    <nav class="padding_std_2 vis_desktop navbar fixed-top navbar-expand-lg py-md-3" style="border-radius: 0;justify-content: space-between;background-color: #000000;font-size:1.125rem;height:12vh;    margin-bottom: -20px;">\
        <a class="navbar-brand" href="http://andescreation.com/" >\
            <img src="http://andescreation.com/images/logo.png" class="d-inline-block align-top logoimage" alt="">\
        </a>\
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\
        <span class="icon-bar" style="color:#FFF;z-index=4"><img src="http://andescreation.com/images/menu.png" height=30px></span>\
      </button>\
        <div class="nav_andes collapse navbar-collapse"  id="myNavbar">\
            <div>\
                <ul class="nav_andesul nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">\
                    <li class="nav-item">\
                        <a id="nav_about" href="http://andescreation.com/about" class="nav-link m-2 menu-item textmenu" style="display: table-cell;">Quem somos</a>\
                    </li>\
                    <li class="nav-item">\
                        <a id="nav_howwework" href="http://andescreation.com/howwework" class="nav-link m-2 menu-item textmenu" style="display: table-cell;">Como Fazemos</a>\
                    </li>\
                    <li class="nav-item">\
                        <a id="nav_services" href="http://andescreation.com/services" class="nav-link m-2 menu-item textmenu" style="display: table-cell;">Serviços</a>\
                    </li>\
                    <li class="nav-item">\
                        <a id="nav_climber" href="http://andescreation.com/beclimber" class="nav-link m-2 menu-item textmenu" style="display: table-cell;">Seja um Climber</a>\
                    </li>\
                    <li class="nav-item">\
                        <a id="nav_contact" href="http://andescreation.com/contact" class="nav-link m-2 menu-item textmenu" style="display: table-cell;">Contato</a>\
                    </li>\
                </ul>\
            </div>\
        </div>\
    </nav>');


var d = new Date();
var n = d.getFullYear();
$("#footer").append('\
<div class="padding_std_2 footer">\
            <div class="col1_footer">\
                \
                <p class="f1" style="color: white;"><span class="justmobile"><br></span><span style="padding-right:2vw"><img src="http://andescreation.com/images/logo_footer.png"></span><span class="justmobile"><br></span>All Right Reserved '+n.toString()+' <span class="justmobile" style="line-height:10px;"><br></span>- Andes Creation Capital</p>\
                <p class="f1" style="color: #666666;"><br><br>Capital Criativo em performance.</p>\
                <p class="f1" style="color: #666666;">contato@andescreation</p>\
                <p class="f1" style="color: #666666;">+55 47 996 586023</p>\
            </div>\
            <div class="col2_footer">\
                <p class="f1" style="color: white;">\
                <span style="padding-right:1vw"><span class="justmobile"><br><br></span>Siga a gente</span></a>\
                <a href="https://www.facebook.com/andescreation/"><span><img src="http://andescreation.com/images/facebook.png"></span></a>\
                <a href="https://www.instagram.com/andescreation/"><span><img src="http://andescreation.com/images/instagram.png"></span></a>\
                <a href="https://www.linkedin.com/company/andesdesign/"><span><img src="http://andescreation.com/images/LinkedIn.png"></span></a></p>\
                <p class="f1" style="color: #666666;"><br><br>Santa Catarina, Brasil</p>\
                <p class="f1" style="color: #666666;">São Paulo, Brasil</p>\
                <p class="f1" style="color: #666666;">Anywhere</p>\
            </div>\
        </div>\
')

function setWithExpiry(key, value, ttl) {
	const now = new Date()

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}


function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value
}
premodal=false
function showmodal(modal){
    if (premodal==false){
    $('body').append('<div class="premodal" style="display: none;"></div>')
    premodal=true
    }
    $("body").addClass("modal-open");
    $('.premodal').show()
    $('#'+modal).show()
}


function closemodal(modal){
    $("body").removeClass("modal-open");
    $('.premodal').hide()
    $('#'+modal).hide()
}

$(".exit").click(function(){
    console.log("exit")
    $(this).parents('.modalAndes').hide()
    $("body").removeClass("modal-open");
    $('.premodal').hide()
})
