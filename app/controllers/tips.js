function loadhelpview(){
	$.tipsView.removeAllChildren();
	$.tipsView.add(Alloy.createController('help').getView());
}