/**********
 * 	This is the "news" view. It is displayed when the user clicks on 'News' in the menu.
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
	var news = db.execute('SELECT * FROM news');
	while (news.isValidRow()) {

		items.push({
			template : "newsTemplate", // set the template
			fname : {
				text : news.fieldByName("fname") // assign the values from the data
			},
			date : {
				text : news.fieldByName("date") // assign the values from the data
			},
			details : {
				text : news.fieldByName("text") // assign the values from the data
			}
		});
		news.next();
	}
	news.close();
	$.section.setItems(items);
	
}

//Open the database
var db = Ti.Database.open('data');

//Populate the listview
fillTable(db);
//Close database
db.close();
