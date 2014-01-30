function loadhelpview(){
	$.privacyPolicyView.removeAllChildren();
	$.privacyPolicyView.add(Alloy.createController('help').getView());
}