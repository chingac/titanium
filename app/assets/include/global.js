Ti.App.shouldRefreshNews = true;
Ti.App.shouldRefreshInfo = true;

function createDb() {
	var db = Ti.Database.open('data');
	//Create News table
	db.execute('CREATE TABLE IF NOT EXISTS news(sid INTEGER PRIMARY KEY, timestamp INTEGER, date TEXT, fslug TEXT, fname TEXT, url TEXT, text TEXT);');
	//Create information table
	db.execute('CREATE TABLE IF NOT EXISTS information(sid INTEGER PRIMARY KEY, url TEXT, title TEXT, subtitle TEXT);');
	//close connection
	db.close();
}

function fillNewsTable(theUrl) {
	var db = Ti.Database.open('data');
	var xhr = Titanium.Network.createHTTPClient({});
	//Called when connection is established.
	xhr.onload = function() {
		db.execute("DELETE FROM news");
		//use json parser to get parse from 'GET'
		currentRemoteData = JSON.parse(this.responseText);
		for (var i = 0; i < currentRemoteData.length; i++) {

			db.execute("INSERT INTO news (sid, timestamp, date, fslug, fname, url, text) VALUES (?,?,?,?,?,?,?)", currentRemoteData[i]['sid'].toString(), currentRemoteData[i]['timestamp'].toString(), currentRemoteData[i]['date'].toString(), currentRemoteData[i]['fslug'].toString(), currentRemoteData[i]['fname'].toString(), (currentRemoteData[i]['url'] != null) ? currentRemoteData[i]['url'].toString() : "", currentRemoteData[i]['text'].toString());
		}
		Ti.App.shouldRefreshNews = false;
		db.close();
	};
	//Prepare the request
	xhr.open("GET", theUrl);
	//Request JSON header
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	//Send request
	xhr.send();
}

function fillInfoTable(theUrl) {
	var db = Ti.Database.open('data');
	var xhr = Titanium.Network.createHTTPClient({});
	//Called when connection is established.
	xhr.onload = function() {
		db.execute("DELETE FROM information");
		//use json parser to get parse from 'GET'
		currentRemoteData = JSON.parse(this.responseText);
		for (var i = 0; i < currentRemoteData.length; i++) {
			db.execute("INSERT INTO information (sid, url, title, subtitle) VALUES (?,?,?,?)", currentRemoteData[i]['sid'].toString(), currentRemoteData[i]['url'].toString(), currentRemoteData[i]['title'].toString(), currentRemoteData[i]['subtitle'].toString());
		}
		db.close();
		Ti.App.shouldRefreshInfo = false;

	};
	//Prepare the request
	xhr.open("GET", theUrl);
	//Request JSON header
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	//Send request
	xhr.send();
}

