$(document).ready(function() {

	// $(".container").hide()

// Trying to get mouseenter or click to prompt 
// content dispalying, attempted to set default
// for container to display: none but still didn't work
	// 	$("body").mouseenter(function() {
	// 		$(".container").show();	
	// 	});


// Fade out on mouseenter works but can't get
// fade in to work at all
	// 	$("body").mouseenter(function() {
	// 		$(".container").fadeOut(function() {
	// 			$("body").click(function() {
	// 				$(".container").fadeIn();
	// 			});
	// 		});
	// 	});




// This works but after click-hide, click show
// it seems to hide&show again before the slides
// and fades start?
	$("body").click(function() {
		$(".header").hide(function() {
			$("body").click(function() {
				$(".header").show(function() {
					$("body").click(function() {
						$(".header").slideUp(2000);
						$(".header").slideDown(2000);
						$("#crazy").fadeOut(1000);
						$("#crazy").fadeIn(1000);	
						$("#crazy").fadeOut(1000);
						$("#crazy").fadeIn(1000);
						$("#crazy").fadeOut(1000);
						$("#crazy").fadeIn(1000);
					});
				});
			});
		});
	});



	$(".content-1").hover(function() {
		$(".p-one").fadeOut(2000);
		$("")
	});


	
});
