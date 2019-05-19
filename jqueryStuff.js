$(document).ready(function() {
	$("article").slideDown(500);
	$(".tabButton").click(function() {
		var targURL = $(this).attr("href");
		if (targURL != undefined) {
        	$("article").slideUp(500, function() {location.href = targURL});
    	}
    });
});