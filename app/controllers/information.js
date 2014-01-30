/**********
 * 	This is the "information" view. It is displayed when the user clicks on 'News' in the menu.
 *
 *
 *
 * @auth dklein
 */


/**
 * This function fills the news listview with items from the database.
 *
 * @param {Object} db the database from which the data is being pulled
 */
function fillTable(db) {
	var items = [];
	var info = db.execute('SELECT * FROM information');
	while (info.isValidRow()) {

		items.push({
			template : "infoTemplate", // set the template
			title : {
				text : info.fieldByName("title") // assign the values from the data
			},
			subtitle : {
				text : info.fieldByName("subtitle") // assign the values from the data
			}
		});
		info.next();
	}
	info.close();
	$.section.setItems(items);
}

//Open the database
var db = Ti.Database.open('data');
//Populate the listview
fillTable(db);
//Close database
db.close();
