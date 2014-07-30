// JavaScript Document
$(document).ready(function() {
	
	var withLightbox = true, imageContainerWidth = $('div#gallery img.galleryImg').size() * 80, imagesPosition = 0, imagesMaxRight = imageContainerWidth - 560;
	
	var lastImg = $('div#gallery img.galleryImg').size() - 1;
    
	
	$('<div id="bigImg"></div>').appendTo('div#gallery');
	$('<div class="imagesContainer"><div id="images"></div></div>').insertAfter('div#bigImg');
	if(lastImg > 6){
		$('<div id="arrows"><div id="left"></div><div id="right"></div></div>').insertAfter('div.imagesContainer')
		$('div#left').html('<p class="rlarrow">&#60;</p>')
		$('div#right').html('<p class="rlarrow">&#62;</p>')
	}
	
	$('div#gallery img.galleryImg').each(function(i, obj) {
        $('<div class="image"></div>')
			
			.append(obj)
			.appendTo('div#images')
			.css('background-image', "url('" + $(obj).attr('src') + "')")
			.attr('id', i);
		$(obj).hide();
    });
	

		if(withLightbox != true){
			$('div#bigImg').append('<img id="' + $('div#0').attr('id') + '" class="bImg" alt="" src="' + $('div#0 img').attr('src') + '" />');
		}else if(withLightbox == true){
			$('div#bigImg').append('<a id="' + $('div#0').attr('id') + '" class="bImg lightbox" alt="' + lastImg + '" href="' + $('div#0 img').attr('src') + '"><img id="' + $('div#0').attr('id') + '" class="bImg" alt="" src="' + $('div#0 img').attr('src') + '" /></a>');
		};
	$('img.bImg')
		.hide()
		.fadeIn(400);

		
	$('div.image').click(function(e){
		var id = $(this).attr('id');
		$('img.bImg').fadeOut(400)
		setTimeout(function(){
			$('img.bImg').remove();
			$('a.bImg').remove();
			if(withLightbox != true){
				$('div#bigImg').append('<img id="' + $('div#' + id + '').attr('id') + '" class="bImg" alt="" src="' + $('div#' + id + ' img').attr('src') + '" />');
			}else if(withLightbox == true){
				$('div#bigImg').append('<a id="' + $('div#' + id + '').attr('id') + '" class="bImg lightbox" alt="' + lastImg + '" href="' + $('div#' + id + ' img').attr('src') + '"><img class="bImg" alt="" src="' + $('div#' + id + ' img').attr('src') + '" /></a>');
			};
			$('img.bImg')
				.hide()
				.fadeIn(400);
			
		}, 400);
	});
	
	$(document).on('mouseenter', 'div#right', function(){
			if(imagesPosition < imagesMaxRight){
				imagesPosition = imagesPosition + 2;
				$('div#images').animate({'margin-left': -imagesPosition}, 10)
			}
		rotateLeft = setInterval(function(){
			if(imagesPosition < imagesMaxRight){
				imagesPosition = imagesPosition + 2;
				$('div#images').animate({'margin-left': -imagesPosition}, 10)
			}
		}, 10);
	});
	
	$(document).on('mouseleave', 'div#right', function(){
		clearInterval(rotateLeft);
	});
	
	$(document).on('mouseenter', 'div#left', function(){
			if(imagesPosition > 0){
				imagesPosition = imagesPosition - 2;
				$('div#images').animate({'margin-left': -imagesPosition}, 10)
			}
		rotateRight = setInterval(function(){
			if(imagesPosition > 0){
				imagesPosition = imagesPosition - 2;
				$('div#images').animate({'margin-left': -imagesPosition}, 10)
			}
		}, 10);
	});
	
	$(document).on('mouseleave', 'div#left', function(){
		clearInterval(rotateRight);
	});
});