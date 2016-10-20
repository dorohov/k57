var h_window = $(window).height(), 
	w_window = $(window).width(),

	h_navbar = $('.navbar-site').outerHeight(true),
	h_header = $('.header-site').outerHeight(true),
	w_news_preview = $('.news-item__preview').outerWidth(true),
	h_news_block = $('.news-block').outerHeight(true),
	h_footer = $('.footer-site').outerHeight(true),
	h_content_index = h_window - h_navbar,
	h_content_scroller = h_window - h_news_block, 
	h_content_scroller_sm = h_window - h_news_block - h_navbar - h_footer - 70, 
	h_content = h_window - h_navbar - h_footer;

if (device.tablet()) {
	$('.content-site').css("min-height", h_content_scroller_sm);
	$("._msp__block .scroller").mCustomScrollbar();
}
if (device.mobile() || device.tablet()) {
	$('.navbar').addClass('navbar-fixed-top');
	$('._ipc__link-block').appendTo('.content-block__cols-news');	 
	$('.address-block').appendTo('.navbar-nav__block');	 
	$('#ninja-slider').removeAttr('id');

	$('.owl-slider ul').owlCarousel({
		margin: 0,
		loop: true,
		items:1,	
		navText: [],
		//autoplay:true,
		smartSpeed: 500,
		autoplayTimeout:10000,
		nav: true,
		dots: false		
	});	 
} else {
	$('.content-site').css("height", h_content_scroller);
	$(".scroller").mCustomScrollbar();
}
$(".navbar-fixed-top").autoHidingNavbar();
$('.news-item__preview a').css("height", w_news_preview);