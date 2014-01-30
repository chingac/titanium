function select(e){
    var selectedRow = e.row;
    selectedRow.backgroundColor = 'yellow';
    if($.helpViewHolder.children.length){
    	$.helpViewHolder.removeAllChildren();
    }    
    //*************add your view here*******************
    if (selectedRow.children[0].text == 'Introduction') {	
		$.helpViewHolder.add(Alloy.createController('introduction').getView());		
	} else if (selectedRow.children[0].text == 'Tips') {
		$.helpViewHolder.add(Alloy.createController('tips').getView());
	} else if (selectedRow.children[0].text == 'FAQ') {
		$.helpViewHolder.add(Alloy.createController('faq').getView());
	} else if (selectedRow.children[0].text == 'Privacy Policy') {
		$.helpViewHolder.add(Alloy.createController('privacyPolicy').getView());
	} else if (selectedRow.children[0].text == 'Feedback') {
		$.helpViewHolder.add(Alloy.createController('feedback').getView());
	} else{
}
	//**************************************************
};