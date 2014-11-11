$('.youtube').click(function(){
    video = '<iframe width="100%" height="333" src="'+ $(this).attr('data-video') +'"></iframe>';
    $(this).replaceWith(video);
});

$('.height-first').css({
    'height': $('.height').height() - 90
});

$('.first-height').css({
    'height': $('.second-height').height() + 26
});

$('.third-height').css({
    'height': $('.second-height').height() + 26
});

if ($(window).width() < 960) {
}
else {
   $('.bg-knowledge').css({
	    'height': $('.bg-tongue').height() + 69
	});
}