// JavaScript Document

$(document).ready(function () {
	
	var top, left, height, width, lastImg, startImg, nextImg, play, playing = false;
	
	function positionImageStartup() {
		top = ($(window).height() - $('#lightbox').height()) / 2,
		left = ($(window).width() - $('#lightbox').width()) / 2,
		height = $('img.currentImg').height(),
		width = $('img.currentImg').width()
		
		$('#lightbox')
			.css({
				'top': top,
				'left': left
			})
			.fadeIn();
	};
		
	
	function positionLightboxImage() {
		top = ($(window).height() - $('img.currentImg').height()) / 2,
		left = ($(window).width() - $('img.currentImg').width()) / 2,
		height = $('img.currentImg').height(),
		width = $('img.currentImg').width()
		
		$('#lightbox')
		  .animate({
			  'top': top/* + $(document).scrollTop()*/,
			  'left': left,
			  'height': height,
			  'width': width
		  })
		setTimeout(function(){
			$('img.currentImg').animate({'opacity': 1});
			addButtons();
		}, 500);
	}
	
	function removeLightbox() {
		if(playing === true){
			clearInterval(play);
			$('img#playButton').fadeOut(200, function(){
				$('img#playButton').attr('src', 'lightbox/img/play.png').fadeIn(200);
			});
			playing = false;
		}
		$('#overlay, #lightbox')
		  .fadeOut('slow', function() {
			  $(this).remove();
			  $('body').removeClass('noScroll');
		  });
	}
	
	//slideshow
	
	function slideshow() {
		playing = true;
		$('img#playButton').fadeOut(200, function(){
			$('img#playButton').attr('src', 'lightbox/img/stop.png').fadeIn(200);
		});
			
		play = setInterval(function(){
			if(Number($('img.currentImg').attr('id')) < Number(lastImg)){
				nextImg = Number($('img.currentImg').attr('id')) + 1;
				viewNextImg();
			}else if($('img.currentImg').attr('id') >= lastImg){
				nextImg = 0;
				viewNextImg();
			};
		}, 5000);
	};
		
	$(document).on('click', 'img#playButton', function(){
		if(playing === true){
			clearInterval(play);
			$('img#playButton').fadeOut(200, function(){
				$('img#playButton').attr('src', 'lightbox/img/play.png').fadeIn(200);
			});
			playing = false;
		}else if(playing === false){
			slideshow();
		}
	});

		//Add buttons
		
		function addButtons(){
			$('<div class="buttonContainer"><img class="marker" id="leftArrow" src="lightbox/img/left.png" /></div>')
				.appendTo('#lightbox')
				.css({
					'margin-top': -100-$('#lightbox').height()/2,
					'opacity': 0
				})
				.on('mouseenter', this, function(){
					$(this).animate({'opacity': 1}, 100);
				})
				.on('mouseleave', this, function(){
					$(this).animate({'opacity': 0}, 100);
				});
				
			$('<div class="buttonContainer"><img class="marker" id="rightArrow" src="lightbox/img/right.png" /></div>')
				.appendTo('#lightbox')
				.css({
					'margin-top': -100-$('#lightbox').height()/2,
					'margin-left': $('#lightbox').width()-200,
					'opacity': 0
				})
				.on('mouseenter', this, function(){
					$(this).animate({'opacity': 1}, 100);
				})
				.on('mouseleave', this, function(){
					$(this).animate({'opacity': 0}, 100);
				});
				
			$('<div class="closeContainer"><img class="marker" id="closeButton" src="lightbox/img/close.png" /></div>')
				.appendTo('#lightbox')
				.css({
					'margin-top': -$('#lightbox').height(),
					'margin-left': $('#lightbox').width()-200,
					'opacity': 0
				})
				.on('mouseenter', this, function(){
					$(this).animate({'opacity': 1}, 100);
				})
				.on('mouseleave', this, function(){
					$(this).animate({'opacity': 0}, 100);
				});

			$('<div class="closeContainer"><img class="marker" id="playButton" src="lightbox/img/play.png" /></div>')
				.appendTo('#lightbox')
				.css({
					'margin-top': -100,
					'opacity': 0
				})
				.on('mouseenter', this, function(){
					$(this).animate({'opacity': 1}, 100);
				})
				.on('mouseleave', this, function(){
					$(this).animate({'opacity': 0}, 100);
				});
				if(playing === true){
					$('img#playButton').attr('src', 'lightbox/img/stop.png');
				}

		};
		
		function viewNextImg(){
			$('img.currentImg')
				.animate({'opacity': 0}, 250, function(){
					$('img.currentImg').remove();
				});
				
			setTimeout(function(){
				$('<img>')
				  .attr({
					  'src': $('div#' + nextImg + ' img.galleryImg').attr('src'),
					  'class': 'currentImg',
					  'id': nextImg
				  })
				  .css({
					  'opacity': 0,
					  'max-height': $(window).height() - 100,
					  'max-width': $(window).width() - 100
				  })
				  .load(function() {
					positionLightboxImage();
				  })
				  .appendTo('#lightbox');
			}, 300);

		};

		$(document).on('click', 'img#closeButton', function(){
			  removeLightbox();
		});
		
		$(document).on('click', 'img#rightArrow', function(){
			if(Number($('img.currentImg').attr('id')) < Number(lastImg)){
				nextImg = Number($('img.currentImg').attr('id')) + 1;
				viewNextImg();
			}else if($('img.currentImg').attr('id') >= lastImg){
				nextImg = 0;
				viewNextImg();
			};
		});

		$(document).on('click', 'img#leftArrow', function(){
			if(Number($('img.currentImg').attr('id')) > 0){
				nextImg = Number($('img.currentImg').attr('id')) - 1;
				viewNextImg();
			}else if($('img.currentImg').attr('id') <= 0){
				nextImg = lastImg;
				viewNextImg();
			};
		});

	$(document).on("click", "a.lightbox", function(e) {
		startImg = this;
		lastImg = $(startImg).attr('alt');
		//Hide scrollbars!
		$('body').addClass('noScroll');
		
		$('<div id="overlay"></div>')
		  /*.css('top', $(document).scrollTop())*/
		  .css('opacity', '0')
		  .animate({'opacity': '0.5'}, 'slow')
		  .appendTo('body')
		  .click(function() {
			  removeLightbox();
		  });
				  
		
		$('<div id="lightbox"></div>')
		  .hide()
		  .appendTo('body')
		  .css({
			  'height': 200,
			  'width': 200
		  })
		 .fadeIn();

		positionImageStartup();
		
		setTimeout(function(){
				$('<img>')
				  .attr({
					  'src': $(startImg).attr('href'),
					  'class': 'currentImg',
					  'id': $(startImg).attr('id')
				  })
				  .css({
					  'opacity': 0,
					  'max-height': $(window).height() - 100,
					  'max-width': $(window).width() - 100
				  })
				  .load(function() {
					positionLightboxImage();
				  })
				  .appendTo('#lightbox');
		}, 500);			
			
		
		return false;
		
	});
});