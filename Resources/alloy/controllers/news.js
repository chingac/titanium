function Controller() {
    function fillTable(db) {
        var items = [];
        var news = db.execute("SELECT * FROM news");
        while (news.isValidRow()) {
            items.push({
                template: "newsTemplate",
                fname: {
                    text: news.fieldByName("fname")
                },
                date: {
                    text: news.fieldByName("date")
                },
                details: {
                    text: news.fieldByName("text")
                }
            });
            news.next();
        }
        news.close();
        $.section.setItems(items);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "news";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.news = Ti.UI.createView({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "news"
    });
    $.__views.news && $.addTopLevelView($.__views.news);
    $.__views.newsViewHolder = Ti.UI.createView({
        id: "newsViewHolder"
    });
    $.__views.news.add($.__views.newsViewHolder);
    var __alloyId82 = {};
    var __alloyId85 = [];
    var __alloyId87 = {
        type: "Ti.UI.Label",
        bindId: "fname",
        properties: {
            font: {
                fontSize: "15sp",
                fontWeight: "bold"
            },
            left: "2%",
            width: Ti.UI.SIZE,
            top: "5%",
            color: "black",
            bindId: "fname"
        }
    };
    __alloyId85.push(__alloyId87);
    var __alloyId89 = {
        type: "Ti.UI.Label",
        bindId: "date",
        properties: {
            font: {
                fontSize: "15sp",
                fontWeight: "bold"
            },
            left: "2%",
            width: Ti.UI.SIZE,
            top: "15%",
            color: "purple",
            bindId: "date"
        }
    };
    __alloyId85.push(__alloyId89);
    var __alloyId91 = {
        type: "Ti.UI.Label",
        bindId: "details",
        properties: {
            font: {
                fontSize: "15sp"
            },
            left: "2%",
            width: Ti.UI.SIZE,
            top: "30%",
            bindId: "details"
        }
    };
    __alloyId85.push(__alloyId91);
    var __alloyId84 = {
        properties: {
            name: "newsTemplate",
            height: "170"
        },
        childTemplates: __alloyId85
    };
    __alloyId82["newsTemplate"] = __alloyId84;
    var __alloyId92 = [];
    var __alloyId94 = [];
    $.__views.__alloyId95 = {
        template: "newsTemplate",
        properties: {
            id: "__alloyId95"
        }
    };
    __alloyId94.push($.__views.__alloyId95);
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    __alloyId92.push($.__views.section);
    $.__views.section.items = __alloyId94;
    $.__views.newsView = Ti.UI.createListView({
        sections: __alloyId92,
        templates: __alloyId82,
        id: "newsView"
    });
    $.__views.newsViewHolder.add($.__views.newsView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var db = Ti.Database.open("data");
    fillTable(db);
    db.close();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;