$("head").append('\
<link rel="icon" href="http://andescreation.com/images/logo_footer.png" type="image/ico" sizes="16x16">\
    <title>Andes Creation Capital</title>\
    ')
$("#nav-placeholder").append('\
    <nav class="vis_desktop navbar fixed-top navbar-expand-lg py-md-3" style="padding-left: 8%;padding-right: 11%;justify-content: space-between;background-color: #000000;font-size:1.125rem;height:12vh">\
        <a class="navbar-brand" href="http://andescreation.com/" style="padding-left:2rem;">\
            <img src="http://andescreation.com/images/logo.png" class="d-inline-block align-top logoimage" alt="">\
        </a>\
        <div id="_pages">\
            <div>\
                <ul class="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">\
                    <li class="nav-item">\
                        <a id="nav_about" href="http://andescreation.com/about" class="nav-link m-2 menu-item textmenu">Sobre</a>\
                    </li>\
                    <li class="nav-item">\
                        <a id="nav_contact" href="http://andescreation.com/contact" class="nav-link m-2 menu-item textmenu">Contato</a>\
                    </li>\
                    <li class="nav-item">\
                        <a href="http://andescreation.com/services" class="nav-link m-2 menu-item textmenu">Serviços</a>\
                    </li>\
                    <li class="nav-item">\
                        <a href="http://andescreation.com/beclimber" class="nav-link m-2 menu-item textmenu">Seja um Climber</a>\
                    </li>\
                </ul>\
            </div>\
        </div>\
    </nav>');


var d = new Date();
var n = d.getFullYear();
$("#footer").append('\
<div class="footer">\
            <div style="float: left;">\
                \
                <p class="f1" style="color: white;"><span style="padding-right:2vw"><img src="http://andescreation.com/images/logo_footer.png"></span>All Right Reserved '+n.toString()+' - Andes Creation Capital</p>\
            </div>\
            <div style="float: right;text-align: left;display:inline-block">\
                <p class="f1" style="color: white;">\
                <span style="padding-right:1vw">SIGA A GENTE</span></a>\
                <a href="https://www.facebook.com/andescreation/"><span><img src="http://andescreation.com/images/facebook.png"></span></a>\
                <a href="https://www.instagram.com/andescreation/"><span><img src="http://andescreation.com/images/instagram.png"></span></a>\
                <a href="https://www.linkedin.com/company/andesdesign/"><span><img src="http://andescreation.com/images/LinkedIn.png"></span></a></p>\
            </div>\
        </div>\
')