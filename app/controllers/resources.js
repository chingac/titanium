function loadinfoview(){
	$.resourceView.removeAllChildren();
	$.resourceView.add(Alloy.createController('information').getView());
}