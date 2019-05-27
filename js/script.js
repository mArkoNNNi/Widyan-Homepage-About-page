$(document).ready(function(){
	$('.myonoffswitch').change(function(){
		if($(this).is(":checked")) {
			  $(this).parent().parent().addClass("checked");
				$('.market-insights').addClass("d-none");
				$('.charts-section').removeClass("d-none");
		} else {
			  $(this).parent().parent().removeClass("checked");
				$('.market-insights').removeClass("d-none");
				$('.charts-section').addClass("d-block");
		}
});


	$('.home-top-slider').slick({
			autoplay: true,
			arrows: false,
			dots: false,
			infinite: true,
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			touchThreshold: 100,
			fade: true,
	});

	$('.hero-slider').slick({
		autoplay: true,
		arrows: false,
		dots: false,
		infinite: true,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100,
		fade: true,
		lazyLoad: 'progressive',
	});

	$(".top-bar-close").click(function(){
		$(".top-bar").toggleClass("fade-out");
		$(".main").toggleClass("secondary");
		$(".navbar").toggleClass("secondary");
	});

	$('.navbar-toggler').click(function(){
		$(this).toggleClass('open');
	});

	$('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});

	$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  if (y > 100) {
	    $('.header').addClass("header-fixed");
			$('body').addClass("pos-relative");
	  } else {
	    $('.header').removeClass("header-fixed");
			$('body').removeClass("pos-relative");
	  }
	});

	// var header = $('.hero-slider');
	// var item = $('.bContainer');
	// var range = 200;
	//
	// $(window).on('scroll', function () {
	//
	//   var scrollTop = $(this).scrollTop(),
	//       height = header.outerHeight(),
	//       offset = height / 2,
	//       calc = 1 - (scrollTop - offset + range) / range;
	//
	//   item.css({ 'opacity': calc });
	//
	//   if (calc > '1') {
	//     item.css({ 'opacity': 1 });
	//   } else if ( calc < '0' ) {
	//     item.css({ 'opacity': 0 });
	//   }
	//
	// });


	//
	// $('.project-status-slider').slick({
	// 	autoplay: true,
	// 	infinite: true,
	// 	speed: 5000,
  //   autoplaySpeed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
	// 	arrows: false,
	// 	dots: true,
	// });
	//
	// $('.carousel').slick({
	// 	autoplay: true,
	// 	infinite: true,
  //   autoplaySpeed: 1000,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   pauseOnDotsHover: false,
  //   slidesToShow: 1,
  //   lidesToScroll: 1,
	// 	dots: false,
	// 	arrows: false,
	// 	variableWidth: true,
	// });
	//
	//
	$('.slider-for').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 arrows: false,
	 fade: true,
	 asNavFor: '.slider-nav',
	 infinite: true,
	 autoplay: true,
	});

	$('.slider-nav').slick({
	 vertical: true,
	 slidesToShow: 6,
	 slidesToScroll: 1,
	 asNavFor: '.slider-for',
	 dots: false,
	 arrows: false,
	 focusOnSelect: true,
	 infinite: true,
	 autoplay: true,
	 responsive: [
    {
      breakpoint: 767,
      settings: {
				vertical: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
	});

	$('.projects-slider-for').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 arrows: false,
	 fade: true,
	 asNavFor: '.projects-slider-nav',
	 infinite: true,
	 autoplay: true,
	});

	$('.projects-slider-nav').slick({
	 vertical: true,
	 slidesToShow: 6,
	 slidesToScroll: 1,
	 asNavFor: '.projects-slider-for',
	 dots: false,
	 arrows: false,
	 focusOnSelect: true,
	 infinite: true,
	 autoplay: true,
	 responsive: [
    {
      breakpoint: 767,
      settings: {
				vertical: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
	});

	AOS.init();


	$('#videoModal').on('shown.bs.modal', function () {
	  $('#bVideo-m')[0].play();
	})
	$('#videoModal').on('hidden.bs.modal', function () {
	  $('#bVideo-m')[0].pause();
	})

	$('#videoSaudiModal').on('shown.bs.modal', function () {
	  $('#bVideo-ms')[0].play();
	})
	$('#videoSaudiModal').on('hidden.bs.modal', function () {
	  $('#bVideo-ms')[0].pause();
	})

	$(".zoom-plus").click(function(){
	  $(".site-location-map-wrapper").addClass("zoom");
	});

	$(".zoom-minus").click(function(){
	  $(".site-location-map-wrapper").removeClass("zoom");
	});

	var vid = document.getElementById("bVideo-m");

	function enableMute() {
	  vid.muted = true;
	}

	function disableMute() {
	  vid.muted = false;
	}

	//masterplan
	$(".image-map-large").mapify({
		popOver: {
			content: function (zone) {
				return "<strong>" + zone.attr("data-title") + "</strong>" + " The Entertainment District will be home to 24 fun-filled rides and shows at our Theme Park, and 19 thrilling slides and attractions at our Water Park, all located inside Al Widyan.";
			},
			delay: 0.7,
			margin: "15px",
			height: "150px",
			width: "260px"
		},
	});
	var iconClass = [{
		name: 'icon-lamp',
		dataNbmembre: 1
	}, {
		name: 'icon-hat',
		dataNbmembre: 2
	}, {
		name: 'icon-m-bag',
		dataNbmembre: 3
	}, {
		name: 'icon-medical-bag',
		dataNbmembre: 4
	}, {
		name: 'icon-shopping-bag',
		dataNbmembre: 5
	}, {
		name: 'icon-carousel',
		dataNbmembre: 6
	}, {
		name: 'icon-m-home',
		dataNbmembre: 7
	}, {
		name: 'icon-kitchen',
		dataNbmembre: 8
	}, {
		name: 'icon-trees',
		dataNbmembre: 9
	}];
	iconClass.forEach(function (iconObj) {
		$("." + iconObj.name).hover(function () {
			$("#image-map-large area").eq(iconObj.dataNbmembre).focus().focus();
		});
	});

	//masterplan
	$(".image-map").mapify({
		popOver: {
			content: function (zone) {
				return "<strong>" + zone.attr("data-title") + "</strong>" + " The Entertainment District will be home to 24 fun-filled rides and shows at our Theme Park, and 19 thrilling slides and attractions at our Water Park, all located inside Al Widyan.";
			},
			delay: 0.7,
			margin: "15px",
			height: "150px",
			width: "260px"
		},
	});
	var iconClass = [{
		name: 'icon-lamp',
		dataNbmembre: 1
	}, {
		name: 'icon-hat',
		dataNbmembre: 2
	}, {
		name: 'icon-m-bag',
		dataNbmembre: 3
	}, {
		name: 'icon-medical-bag',
		dataNbmembre: 4
	}, {
		name: 'icon-shopping-bag',
		dataNbmembre: 5
	}, {
		name: 'icon-carousel',
		dataNbmembre: 6
	}, {
		name: 'icon-m-home',
		dataNbmembre: 7
	}, {
		name: 'icon-kitchen',
		dataNbmembre: 8
	}, {
		name: 'icon-trees',
		dataNbmembre: 9
	}];

	iconClass.forEach(function (iconObj) {
		$("." + iconObj.name).hover(function () {
			$("#image-map area").eq(iconObj.dataNbmembre).focus().focus();
		});
	});

	$('#map-toggle-1').change(function(){
		if($(this).is(":checked")) {
			  $('#map-1').removeClass('d-none');
		} else {
			  $('#map-1').addClass('d-none');
		}
	});

	$('#map-toggle-2').change(function(){
		if($(this).is(":checked")) {
			  $('#map-2').removeClass('d-none');
		} else {
			  $('#map-2').addClass('d-none');
		}
	});

	$('#map-toggle-3').change(function(){
		if($(this).is(":checked")) {
			  $('#map-3').removeClass('d-none');
		} else {
			  $('#map-3').addClass('d-none');
		}
	});

	$('#map-toggle-4').change(function(){
		if($(this).is(":checked")) {
			  $('#map-4').removeClass('d-none');
		} else {
			  $('#map-4').addClass('d-none');
		}
	});

	$('#map-toggle-5').change(function(){
		if($(this).is(":checked")) {
			  $('#map-5').removeClass('d-none');
		} else {
			  $('#map-5').addClass('d-none');
		}
	});

	$('.btn-1').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass("active show");
		$(".tab-1").toggleClass("active show");
	});
	$('.btn-2').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass("active show");
		$(".tab-2").toggleClass("active show");
	});
	$('.btn-3').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass("active show");
		$(".tab-3").toggleClass("active show");
	});
	$('.btn-4').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass("active show");
		$(".tab-4").toggleClass("active show");
	});
	$('.btn-5').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass("active show");
		$(".tab-5").toggleClass("active show");
	});
    $('.map-nav a').click(function (e) {
        e.preventDefault();
    });
	//for opening bootstrap tab from main nav
	$('.top-nav a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
		var target = this.href.split('#');
		$('.nav a').filter('[href="#'+target[1]+'"]').tab('show');
	})
	//for opening bootstrap tab as external link
	let selectedTab = window.location.hash;
	$('.nav-link[href="' + selectedTab + '"]' ).trigger('click');
	//smooth scroll for tabs when open them from top nav
	$("a.scroll-to-item ").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1200, function(){
				window.location.hash = hash;
			});
		}
	});

});
