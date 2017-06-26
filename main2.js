$(document).ready(function() {


	$("body").click(function() {
		$(".header").hide(function() {
			$(".header").fadeIn(1000);
			$(".header").slideUp(100);
			$(".p-one").fadeOut(2000);
			$(".p-two").slideUp(3000);
			$(".p-five").fadeOut(1000);
			$(".content-2").animate( {
				width: 200
			}, 1000, function() {
				$(".content-2").animate( {
					width: 1900
				}, 5000);
			});
			$("img").animate( {
				opacity: 0
			}, 9000);
		});
	});


	
});
