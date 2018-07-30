$(function() {

	 
    $(window).scroll(function () {
        var scroll_pos = $(this).scrollTop();
        if (scroll_pos > 200) {
            $(".barra").css('background', '#f8f9fa'); //*Transparente
        } else {
            $(".barra").css('background', 'transparent'); //*blanco
        }          
    });

    $('li a').on({
    	mouseenter: function(){
    		$(this).removeClass('gray');
    	},
    	mouseleave: function(){
    		$(this).addClass('gray');
    	}});

	
});
