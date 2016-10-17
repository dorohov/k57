
$(function() {
	
	var block = $('.scroll-page').eq(0);
	var scrolling;
	
	var can_scroll = function(timeout){
		if(timeout) {
			setTimeout(function(){
				scrolling = false;
			}, timeout);
		} else {
			scrolling = false;
		}
	};
	
	can_scroll();
	
	if(block.size() && !screenJS.isXS() && !screenJS.isSM() && !device.mobile() && !device.tablet()) {
		
		
		$(document.body).on('azbn.wheel', '.scroll-page', {}, function(event, obj){
			event.preventDefault();
			
			var cb = obj.callback;
			
			if(obj.next == block.find('.scroll-page__slide').length) {
				
			} else {
				
				//event.preventDefault();
				
				block.find('.scroll-page__slide')
					.filter('.active')
						.toggleClass('active')
					.end()
					.eq(obj.next)
						.toggleClass('active')
				;
				/*
				block.find('.scroll-page__indicators li')
					.filter('.active')
						.removeClass('active')
					.end()
					.eq(obj.next)
						.addClass('active')
				;
				*/
				
				//SS.set('__skw', obj.next);
				
			}
			
			cb();
		});
		
		
		$(document.body).on('wheel mousewheel DOMMouseScroll MozMousePixelScroll', '.scroll-page', {}, function(event) {
			//event.preventDefault();
			//diff:event.originalEvent.wheelDelta
			
			if(scrolling) {
				
				event.preventDefault();
				
				return;
				
			} else {
				
				scrolling = true;
				
				var diff = (-event.originalEvent.deltaY) || event.originalEvent.detail || event.originalEvent.wheelDelta;
				var slide = parseInt(block.attr('data-slide-id'));
				var next;
				
				console.warn(diff);
				
				if(diff > 0) {
					
					event.preventDefault();
					
					if(slide > 0) {
						
						next = slide - 1;
						block.attr('data-slide-id', next);
						block.trigger('azbn.wheel', [{diff:diff, next:next, callback:function(){
							can_scroll(1500);
						}}]);
						
					} else {
						
						can_scroll();
						
					}
					
				} else if(diff < 0) {
					
					if(slide < block.find('.scroll-page__slide').length - 1) {
						
						event.preventDefault();
						
						next = slide + 1;
						block.attr('data-slide-id', next);
						block.trigger('azbn.wheel', [{diff:diff, next:next, callback:function(){
							can_scroll(1500);
						}}]);
						
					} /*else if(slide == (block.find('.scroll-page__slide').length - 1)) {
						
						$('html, body').animate({
							scrollTop: ($('footer').eq(0).offset().top)
						}, 777, function(){
							can_scroll();
						});
						
					}*/ else {
						
						event.preventDefault();
						
						can_scroll();
						
					}
				} else {
					
					//event.preventDefault();
					
					can_scroll();
					
				}
				
				//can_scroll();
				
			}
			
		});
		
	} else {
		
	}
	
});

$(function(){
	
	$(document.body).on('mousemove', '.need-appear', {}, function(event){
		//console.log(event);
		
		var block = $(this);
		
		block.attr('data-hovered', 1);
		
		var e = {
			x : event.originalEvent.offsetX,
			y : event.originalEvent.offsetY,
		};
		
		var x0 = block.outerWidth(true) / 2;
		var y0 = block.outerHeight(true) / 2;
		
		var _x_d = (e.y - x0) / 14;
		var _y_d = - (e.x - y0) / 21;
		
		block
			.css({
				'transform' : 'rotateX(' + _x_d + 'deg) rotateY(' + _y_d + 'deg)',
			})
		;
		
		//console.log(m);
		
	});
	
	
	$(document.body).on('mouseenter', '.need-appear', {}, function(event){
		//console.log(event);
		
		var block = $(this);
		
		$('.need-appear[data-hovered="1"]')
			.css({
				'transform' : 'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg)',
			})
			.attr('data-hovered', 0);
		;
		
	});
	
	
})
