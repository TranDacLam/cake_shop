$(document).ready(function() {
	$("#scroller").simplyScroll({
        orientation:'vertical',
        customClass:'vert'
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        dots: false,
        navText : ['<i class="fas fa-angle-left" aria-hidden="true"></i>','<i class="fas fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3,
                margin: 5
            },
            1000: {
                items: 4
            }
        }
    })
});