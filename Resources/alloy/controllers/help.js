function Controller() {
    function select(e) {
        var selectedRow = e.row;
        selectedRow.backgroundColor = "yellow";
        $.helpViewHolder.children.length && $.helpViewHolder.removeAllChildren();
        "Introduction" == selectedRow.children[0].text ? $.helpViewHolder.add(Alloy.createController("introduction").getView()) : "Tips" == selectedRow.children[0].text ? $.helpViewHolder.add(Alloy.createController("tips").getView()) : "FAQ" == selectedRow.children[0].text ? $.helpViewHolder.add(Alloy.createController("faq").getView()) : "Privacy Policy" == selectedRow.children[0].text ? $.helpViewHolder.add(Alloy.createController("privacyPolicy").getView()) : "Feedback" == selectedRow.children[0].text && $.helpViewHolder.add(Alloy.createController("feedback").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "help";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.help = Ti.UI.createView({
        id: "help"
    });
    $.__views.help && $.addTopLevelView($.__views.help);
    $.__views.helpViewHolder = Ti.UI.createView({
        id: "helpViewHolder"
    });
    $.__views.help.add($.__views.helpViewHolder);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId20"
    });
    var __alloyId21 = [];
    __alloyId21.push($.__views.__alloyId20);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        top: "10px",
        text: "Introduction",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        bottom: "10px",
        text: "Learn about this app.",
        id: "__alloyId23"
    });
    $.__views.__alloyId20.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId24"
    });
    __alloyId21.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        top: "10px",
        text: "Tips",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        bottom: "10px",
        text: "Getting started",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId27"
    });
    __alloyId21.push($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        top: "10px",
        text: "FAQ",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        bottom: "10px",
        text: "Frequently Asked Questions",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId30"
    });
    __alloyId21.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        top: "10px",
        text: "Privacy Policy",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        bottom: "10px",
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId33"
    });
    __alloyId21.push($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        top: "10px",
        text: "Feedback",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        font: {
            fontSize: "10sp"
        },
        bottom: "10px",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.helptableview = Ti.UI.createTableView({
        data: __alloyId21,
        id: "helptableview"
    });
    $.__views.helpViewHolder.add($.__views.helptableview);
    select ? $.__views.helptableview.addEventListener("click", select) : __defers["$.__views.helptableview!click!select"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.helptableview!click!select"] && $.__views.helptableview.addEventListener("click", select);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;