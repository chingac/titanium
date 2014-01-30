function createDb() {
    var db = Ti.Database.open("data");
    db.execute("CREATE TABLE IF NOT EXISTS news(sid INTEGER PRIMARY KEY, timestamp INTEGER, date TEXT, fslug TEXT, fname TEXT, url TEXT, text TEXT);");
    db.execute("CREATE TABLE IF NOT EXISTS information(sid INTEGER PRIMARY KEY, url TEXT, title TEXT, subtitle TEXT);");
    db.close();
}

function fillNewsTable(theUrl) {
    var db = Ti.Database.open("data");
    var xhr = Titanium.Network.createHTTPClient({});
    xhr.onload = function() {
        db.execute("DELETE FROM news");
        currentRemoteData = JSON.parse(this.responseText);
        for (var i = 0; currentRemoteData.length > i; i++) db.execute("INSERT INTO news (sid, timestamp, date, fslug, fname, url, text) VALUES (?,?,?,?,?,?,?)", currentRemoteData[i]["sid"].toString(), currentRemoteData[i]["timestamp"].toString(), currentRemoteData[i]["date"].toString(), currentRemoteData[i]["fslug"].toString(), currentRemoteData[i]["fname"].toString(), null != currentRemoteData[i]["url"] ? currentRemoteData[i]["url"].toString() : "", currentRemoteData[i]["text"].toString());
        Ti.App.shouldRefreshNews = false;
        db.close();
    };
    xhr.open("GET", theUrl);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send();
}

function fillInfoTable(theUrl) {
    var db = Ti.Database.open("data");
    var xhr = Titanium.Network.createHTTPClient({});
    xhr.onload = function() {
        db.execute("DELETE FROM information");
        currentRemoteData = JSON.parse(this.responseText);
        for (var i = 0; currentRemoteData.length > i; i++) db.execute("INSERT INTO information (sid, url, title, subtitle) VALUES (?,?,?,?)", currentRemoteData[i]["sid"].toString(), currentRemoteData[i]["url"].toString(), currentRemoteData[i]["title"].toString(), currentRemoteData[i]["subtitle"].toString());
        db.close();
        Ti.App.shouldRefreshInfo = false;
    };
    xhr.open("GET", theUrl);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send();
}

Ti.App.shouldRefreshNews = true;

Ti.App.shouldRefreshInfo = true;