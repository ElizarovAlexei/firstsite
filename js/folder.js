$(document).ready(function(){


});

$('#ShowMenu').click (function () {
		if ($('#mobileMenu').is(':visible'))
			$('#mobileMenu').hide ();
		else
			$('#mobileMenu').show ().addClass('mobileMenu');
	});

$(document).scroll (function() {
	if ($(document).width() > 785) {
			if ($(document).scrollTop () > $('header').height () + 10)
			$('nav').addClass('fixed');
			else $('nav').removeClass('fixed');
	}
});

$(document).scroll (function() {
	if ($(document).scrollTop () > $('header').height () + 10){
		$('nav').css ('float', 'left');
		$('#navImg').show();
	} else {
		$('#navImg').hide();
	}


});

window.onresize = function (event) {
	$('#mobileMenu').hide ();
};


