$(function() {

	 
    $(window).scroll(function () {
        var scroll_pos = $(this).scrollTop();
        if (scroll_pos > 200) {
            $(".barra").css('background', '#f8f9fa'); //*Transparente
        } else {
            $(".barra").css('background', 'transparent'); //*blanco
        }          
    });

	
});
