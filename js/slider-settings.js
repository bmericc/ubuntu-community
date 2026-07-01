jQuery(window).on('load', function () {
	jQuery('.uc-slider-cycle').cycle({
		fx: 'fade',
		pager: '#uc-slider-controllers',
		activePagerClass: 'active',
		prev: '#uc-slider-prev',
		next: '#uc-slider-next',
		timeout: 5000,
		speed: 800,
		pause: 1,
		pauseOnPagerHover: 1,
		width: '100%',
		containerResize: 0,
		fit: 1,
		cleartypeNoBg: true
	});
});
