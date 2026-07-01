jQuery(window).on('load', function () {
	jQuery('.uc-slider-cycle').cycle({
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
		after: function () {
			jQuery(this).parent().css('height', jQuery(this).height());
		},
		cleartypeNoBg: true
	});
});
