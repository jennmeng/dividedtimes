$(document).ready(function() {
	$(".international").on("click", function(event) {
		event.preventDefault();
			$(this).addClass("active");
			$("#slide-down").slideDown();
			$("#international-drop").show();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
		});
		$(".politics").on("click", function(event) {
		event.preventDefault();
			$(this).addClass("active");
			$("#slide-down").slideDown();
			$("#politics-drop").show();
			$("#international-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
		});
		$(".business").on("click", function(event) {
		event.preventDefault();
			$(this).addClass("active");
			$("#slide-down").slideDown();
			$("#business-drop").show();
			$("#politics-drop").hide();
			$("#international-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
		});
	$(".technology").on("click", function(event) {
		event.preventDefault();
			$(this).addClass("active");
			$("#slide-down").slideDown();
			$("#technology-drop").show();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#international-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
	});
	$(".culture").on("click", function(event) {
		event.preventDefault();
			$(this).addClass("active");
			$("#slide-down").slideDown();
			$("#culture-drop").show();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#international-drop").hide();
			$("#blogs-drop").hide();
		});
	$(".blogs").on("click", function(event) {
		event.preventDefault();
			$(this).addClass("active");
			$("#slide-down").slideDown();
			$("#blogs-drop").show();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#international-drop").hide();
		});
});