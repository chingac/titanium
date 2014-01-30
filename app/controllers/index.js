Ti.include("/include/global.js");

var menuOpen = false;

function showhidemenu(e) {
	if (menuOpen) {
		moveTo = "0";
		menuOpen = false;
	} else {
		moveTo = "35%";
		menuOpen = true;
	}

	$.mainview.width = Ti.Platform.displayCaps.platformWidth;
	$.mainview.animate({
		left : moveTo,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration : 300
	});
};

function select(e) {

	for (var i = 0; i < e.section.rows.length; i++) {
		e.section.rows[i].backgroundColor = '#212429';
	}

	var selectedRow = e.row;
	selectedRow.backgroundColor = 'gray';
	if ($.mainbodyview.children.length) {
		$.mainbodyview.removeAllChildren();
	}
	//*************add your view here*******************
	if (selectedRow.children[0].text == 'News') {
		$.mainheaderlabel.setText('News');
		$.addbutton.visible = false;
		$.mainbodyview.add(Alloy.createController('news').getView());
	} else if (selectedRow.children[0].text == 'Homework') {
		$.mainheaderlabel.setText('Homework');
		$.addbutton.visible = true;
		$.mainbodyview.add(Alloy.createController('homework').getView());
	} else if (selectedRow.children[0].text == 'Information') {
		$.mainheaderlabel.setText('Information');
		$.addbutton.visible = false;
		$.mainbodyview.add(new Alloy.createController('information').getView());
	} else if (selectedRow.children[0].text == 'Calendar') {
		$.mainheaderlabel.setText('Calendar');
		$.addbutton.visible = false;
		$.mainbodyview.add(Alloy.createController('calendar').getView());
	} else if (selectedRow.children[0].text == 'Classes') {
		$.mainheaderlabel.setText('Classes');
		$.addbutton.visible = false;
		//$.mainbodyview.add(Alloy.createController('classes').getView());
	} else if (selectedRow.children[0].text == 'Help') {
		$.mainheaderlabel.setText('Help');
		$.addbutton.visible = false;
		$.mainbodyview.add(Alloy.createController('help').getView());
	} else if (selectedRow.children[0].text == 'Sign Up') {
		$.mainheaderlabel.setText('Sign Up');
		$.addbutton.visible = false;
		$.mainbodyview.add(Alloy.createController('signup').getView());
	}
	//**************************************************
	showhidemenu();
};

createDb();
fillNewsTable("http://mypenhi.school2go.ca/m.json");
fillInfoTable("http://mypenhi.school2go.ca/i.json?tag=school");


$.index.open();
$.mainbodyview.add(Alloy.createController('news').getView());
