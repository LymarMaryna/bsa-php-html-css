window.onload = function() {
    var menu_button = document.getElementById("mobile-menu-btn");
    var menu_close = document.getElementById("mobile-close-btn");

    menu_button.addEventListener( "click" , function() {
        document.getElementById("mobile-menu").style.left = '0';
    });

    menu_close.addEventListener( "click" , function() {
        document.getElementById("mobile-menu").style.left = '-100%';
    });
}

