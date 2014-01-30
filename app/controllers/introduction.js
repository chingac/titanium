function loadhelpview(){
	$.introductionView.removeAllChildren();
	$.introductionView.add(Alloy.createController('help').getView());
}