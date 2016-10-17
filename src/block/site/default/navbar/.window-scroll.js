var topPos = $(document).scrollTop();		
var snb = $('.navbar-site');
if(snb.hasClass('scroll-sidebar')) {
	if(topPos < 100) {
		snb.removeClass('scroll-sidebar');
	} else {
		
		if(snb.hasClass('open-scroll-sidebar')) {
			snb.removeClass('open-scroll-sidebar');
		}
		
	}
} else {
	if(topPos > 100) {
		snb.addClass('scroll-sidebar');
		
	}
}