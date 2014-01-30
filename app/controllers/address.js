function loadinfoview(){
	$.addressView.removeAllChildren();
	$.addressView.add(Alloy.createController('information').getView());
}