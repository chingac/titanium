function loadhelpview(){
	$.faqView.removeAllChildren();
	$.faqView.add(Alloy.createController('help').getView());
}