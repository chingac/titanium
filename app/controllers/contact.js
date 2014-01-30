function loadinfoview(){
	$.contactView.removeAllChildren();
	$.contactView.add(Alloy.createController('information').getView());
}
