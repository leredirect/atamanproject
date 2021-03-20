$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 310,
    itemMargin: 25
  });

   $('.flexslider_foto').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 220,
    itemMargin: 30
  });

   $('#arrow1').on('click', function(){
    	$(this).toggleClass('arrow2');
    	$(".slide_2_cont").toggleClass('slide_2_cont2');
    });
   $('#arrow2').on('click', function(){
    	$(this).toggleClass('arrow2');
    	$(".reviews_block_oll").toggleClass('reviews_block_oll2');
    });
   $('.menu').on('click', function(){
      $(this).toggleClass('menu_active');
    });

$('#logo').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#slide_1').offset().top -50 }, 1000);
  e.preventDefault();
});
$('#serv1').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#cont1').offset().top -50 }, 1000);
  e.preventDefault();
});
$('#serv2').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#cont2').offset().top -50 }, 1000);
  e.preventDefault();
});
$('#serv3').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#cont3').offset().top -50 }, 1000);
  e.preventDefault();
});
$('#serv4').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#cont4').offset().top -50 }, 1000);
  e.preventDefault();
});
$('#serv5').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#cont5').offset().top -50 }, 1000);
  e.preventDefault();
});
$('#serv6').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#cont6').offset().top -50 }, 1000);
  e.preventDefault();
});

$('audio,video').mediaelementplayer();


  $('.fancybox').fancybox();


			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});


});
