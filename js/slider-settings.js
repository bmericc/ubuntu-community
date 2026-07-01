jQuery(window).on('load', function () {
	var $slider = jQuery('.uc-slider-cycle');
	$slider.cycle({
		fx: 'fade',
		pager: '#uc-slider-controllers',
		activePagerClass: 'active',
		timeout: 5000,
		speed: 800,
		pause: 1,
		pauseOnPagerHover: 1,
		width: '100%',
		containerResize: 0,
		fit: 1,
		cleartypeNoBg: true
	});

	jQuery('#uc-slider-prev').on('click', function (e) {
		e.preventDefault();
		$slider.cycle('prev');
	});

	jQuery('#uc-slider-next').on('click', function (e) {
		e.preventDefault();
		$slider.cycle('next');
	});
});
