function Controller() {
    function fillTable(db) {
        var items = [];
        var info = db.execute("SELECT * FROM information");
        while (info.isValidRow()) {
            items.push({
                template: "infoTemplate",
                title: {
                    text: info.fieldByName("title")
                },
                subtitle: {
                    text: info.fieldByName("subtitle")
                }
            });
            info.next();
        }
        info.close();
        $.section.setItems(items);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "information";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.information = Ti.UI.createView({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "information"
    });
    $.__views.information && $.addTopLevelView($.__views.information);
    $.__views.infoViewHolder = Ti.UI.createView({
        id: "infoViewHolder"
    });
    $.__views.information.add($.__views.infoViewHolder);
    var __alloyId69 = {};
    var __alloyId72 = [];
    var __alloyId74 = {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
            font: {
                fontSize: "15sp",
                fontWeight: "bold"
            },
            left: "2%",
            width: Ti.UI.SIZE,
            top: "5%",
            color: "black",
            bindId: "title"
        }
    };
    __alloyId72.push(__alloyId74);
    var __alloyId76 = {
        type: "Ti.UI.Label",
        bindId: "subtitle",
        properties: {
            font: {
                fontSize: "15sp",
                fontWeight: "bold"
            },
            left: "2%",
            width: Ti.UI.SIZE,
            top: "15%",
            color: "purple",
            bindId: "subtitle"
        }
    };
    __alloyId72.push(__alloyId76);
    var __alloyId71 = {
        properties: {
            name: "infoTemplate",
            height: "50"
        },
        childTemplates: __alloyId72
    };
    __alloyId69["infoTemplate"] = __alloyId71;
    var __alloyId77 = [];
    var __alloyId79 = [];
    $.__views.__alloyId80 = {
        template: "newsTemplate",
        properties: {
            id: "__alloyId80"
        }
    };
    __alloyId79.push($.__views.__alloyId80);
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    __alloyId77.push($.__views.section);
    $.__views.section.items = __alloyId79;
    $.__views.infoView = Ti.UI.createListView({
        sections: __alloyId77,
        templates: __alloyId69,
        id: "infoView"
    });
    $.__views.infoViewHolder.add($.__views.infoView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var db = Ti.Database.open("data");
    fillTable(db);
    db.close();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;