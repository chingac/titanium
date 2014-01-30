function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.signup = Ti.UI.createView({
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    $.__views.__alloyId99 = Ti.UI.createTableViewRow({
        fontSize: "50",
        title: "Sign Up",
        id: "__alloyId99"
    });
    var __alloyId100 = [];
    __alloyId100.push($.__views.__alloyId99);
    $.__views.__alloyId101 = Ti.UI.createTableViewRow({
        id: "__alloyId101"
    });
    __alloyId100.push($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        left: "2%",
        width: Ti.UI.SIZE,
        text: "Email:",
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createTextField({
        backgroundColor: "gray",
        width: "50%",
        right: "5%",
        top: "10",
        id: "__alloyId103"
    });
    $.__views.__alloyId101.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createTableViewRow({
        id: "__alloyId104"
    });
    __alloyId100.push($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        left: "2%",
        width: Ti.UI.SIZE,
        text: "Password:",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createTextField({
        backgroundColor: "gray",
        width: "50%",
        right: "5%",
        top: "10",
        id: "__alloyId106"
    });
    $.__views.__alloyId104.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createTableViewRow({
        id: "__alloyId107"
    });
    __alloyId100.push($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        left: "2%",
        width: Ti.UI.SIZE,
        text: "Email Alerts:",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.emailSwitch = Ti.UI.createSwitch({
        top: "10",
        right: "5%",
        id: "emailSwitch",
        value: "false"
    });
    $.__views.__alloyId107.add($.__views.emailSwitch);
    $.__views.__alloyId109 = Ti.UI.createTableViewRow({
        id: "__alloyId109"
    });
    __alloyId100.push($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        left: "2%",
        width: Ti.UI.SIZE,
        text: "Push Alerts:",
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.pushSwitch = Ti.UI.createSwitch({
        top: "10",
        right: "5%",
        id: "pushSwitch",
        value: "false"
    });
    $.__views.__alloyId109.add($.__views.pushSwitch);
    $.__views.__alloyId111 = Ti.UI.createTableViewRow({
        id: "__alloyId111"
    });
    __alloyId100.push($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createButton({
        top: "10",
        title: "Confirm",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId98 = Ti.UI.createTableView({
        separatorColor: "transparent",
        backgroundColor: "white",
        data: __alloyId100,
        id: "__alloyId98"
    });
    $.__views.signup.add($.__views.__alloyId98);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;