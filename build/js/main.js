const brandsSwiper = new Swiper("#brands-swiper", {
	slidesPerView: 6,
	slidesPerColumn: 2,
	grid: {
			rows: 2,
		},
	spaceBetween: 30,
	navigation: {
		nextEl: ".main-brands__arrows-next",
		prevEl: ".main-brands__arrows-prev",
	},
	pagination: {
		el: ".main-brands__bullets",
		clickable: true,
	},
});

