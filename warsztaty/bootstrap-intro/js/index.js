var i = 0;
$(window).scroll(function() {
    $(".navbar").css("background-color", "cadetblue");
	clearTimeout($.data(this, 'scrollTimer'));
	$.data(this, 'scrollTimer', setTimeout(function() {
        $(".navbar").css("background-color", "transparent");
		i++;
	}, 250));
});
$("nav").hover(function(){
    $(".navbar").css("background-color", "cadetblue");
})
$("nav").mouseleave(function(){
    $(".navbar").css("background-color", "transparent");
})