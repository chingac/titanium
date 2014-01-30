function loadhelpview(){
	$.feedbackView.removeAllChildren();
	$.feedbackView.add(Alloy.createController('help').getView());
}