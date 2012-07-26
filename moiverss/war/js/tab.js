$(function(){
	var tabs = jQuery('dl.tabs');
	tabsContent = jQuery('ul.tabs-content')
	tabs.each(function(i) {
	//Get all tabs
	var tab = jQuery(this).children('dd').children('a');
	tab.hover(function(e) {
	//Get Location of tab's content
	var contentLocation = jQuery(this).attr("href")
	contentLocation = contentLocation + "Tab";
	//Let go if not a hashed one
	if(contentLocation.charAt(0)=="#") {
	e.preventDefault();
	//Make Tab Active
	tab.removeClass('active');
	jQuery(this).addClass('active');
	//Show Tab Content
	jQuery(contentLocation).parent('.tabs-content').children('li').css({"display":"none"});
	jQuery(contentLocation).css({"display":"block"});
	}
	});
	}); 
})