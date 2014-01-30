function Controller() {
    function showhidemenu() {
        if (menuOpen) {
            moveTo = "0";
            menuOpen = false;
        } else {
            moveTo = "35%";
            menuOpen = true;
        }
        $.mainview.width = Ti.Platform.displayCaps.platformWidth;
        $.mainview.animate({
            left: moveTo,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
            duration: 300
        });
    }
    function select(e) {
        for (var i = 0; e.section.rows.length > i; i++) e.section.rows[i].backgroundColor = "#212429";
        var selectedRow = e.row;
        selectedRow.backgroundColor = "gray";
        $.mainbodyview.children.length && $.mainbodyview.removeAllChildren();
        if ("News" == selectedRow.children[0].text) {
            $.mainheaderlabel.setText("News");
            $.addbutton.visible = false;
            $.mainbodyview.add(Alloy.createController("news").getView());
        } else if ("Homework" == selectedRow.children[0].text) {
            $.mainheaderlabel.setText("Homework");
            $.addbutton.visible = true;
            $.mainbodyview.add(Alloy.createController("homework").getView());
        } else if ("Information" == selectedRow.children[0].text) {
            $.mainheaderlabel.setText("Information");
            $.addbutton.visible = false;
            $.mainbodyview.add(new Alloy.createController("information").getView());
        } else if ("Calendar" == selectedRow.children[0].text) {
            $.mainheaderlabel.setText("Calendar");
            $.addbutton.visible = false;
            $.mainbodyview.add(Alloy.createController("calendar").getView());
        } else if ("Classes" == selectedRow.children[0].text) {
            $.mainheaderlabel.setText("Classes");
            $.addbutton.visible = false;
        } else if ("Help" == selectedRow.children[0].text) {
            $.mainheaderlabel.setText("Help");
            $.addbutton.visible = false;
            $.mainbodyview.add(Alloy.createController("help").getView());
        } else if ("Sign Up" == selectedRow.children[0].text) {
            $.mainheaderlabel.setText("Sign Up");
            $.addbutton.visible = false;
            $.mainbodyview.add(Alloy.createController("signup").getView());
        }
        showhidemenu();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.menuview = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: "35%",
        left: "0%",
        id: "menuview"
    });
    $.__views.index.add($.__views.menuview);
    $.__views.menuheaderview = Ti.UI.createView({
        height: "9%",
        top: "0%",
        width: Ti.UI.FILL,
        backgroundColor: "purple",
        id: "menuheaderview"
    });
    $.__views.menuview.add($.__views.menuheaderview);
    $.__views.menuheaderlabel = Ti.UI.createLabel({
        font: {
            fontSize: "20sp"
        },
        id: "menuheaderlabel"
    });
    $.__views.menuheaderview.add($.__views.menuheaderlabel);
    $.__views.menubodyview = Ti.UI.createView({
        top: "9%",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#212429",
        id: "menubodyview"
    });
    $.__views.menuview.add($.__views.menubodyview);
    $.__views.__alloyId54 = Ti.UI.createTableViewRow({
        height: "35dp",
        id: "__alloyId54"
    });
    var __alloyId55 = [];
    __alloyId55.push($.__views.__alloyId54);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        color: "white",
        text: "News",
        id: "__alloyId56"
    });
    $.__views.__alloyId54.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createTableViewRow({
        height: "35dp",
        id: "__alloyId57"
    });
    __alloyId55.push($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        color: "white",
        text: "Calendar",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createTableViewRow({
        height: "35dp",
        id: "__alloyId59"
    });
    __alloyId55.push($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        color: "white",
        text: "Homework",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
        height: "35dp",
        id: "__alloyId61"
    });
    __alloyId55.push($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        color: "white",
        text: "Classes",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createTableViewRow({
        height: "35dp",
        id: "__alloyId63"
    });
    __alloyId55.push($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        color: "white",
        text: "Information",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createTableViewRow({
        height: "35dp",
        id: "__alloyId65"
    });
    __alloyId55.push($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        color: "white",
        text: "Sign Up",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createTableViewRow({
        height: "35dp",
        id: "__alloyId67"
    });
    __alloyId55.push($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        color: "white",
        text: "Help",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.menutableview = Ti.UI.createTableView({
        scrollable: false,
        separatorColor: "#212429",
        backgroundColor: "#212429",
        data: __alloyId55,
        id: "menutableview"
    });
    $.__views.menubodyview.add($.__views.menutableview);
    select ? $.__views.menutableview.addEventListener("click", select) : __defers["$.__views.menutableview!click!select"] = true;
    $.__views.mainview = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        zIndex: 10,
        left: "0%",
        id: "mainview"
    });
    $.__views.index.add($.__views.mainview);
    $.__views.mainheaderview = Ti.UI.createView({
        top: "0%",
        height: "9%",
        width: Ti.UI.FILL,
        backgroundColor: "purple",
        id: "mainheaderview"
    });
    $.__views.mainview.add($.__views.mainheaderview);
    $.__views.menubutton = Ti.UI.createButton({
        left: "2%",
        width: "11%",
        height: "70%",
        backgroundImage: "/images/Menu-icon.png",
        id: "menubutton"
    });
    $.__views.mainheaderview.add($.__views.menubutton);
    showhidemenu ? $.__views.menubutton.addEventListener("click", showhidemenu) : __defers["$.__views.menubutton!click!showhidemenu"] = true;
    $.__views.mainheaderlabel = Ti.UI.createLabel({
        font: {
            fontSize: "20sp"
        },
        text: "News",
        id: "mainheaderlabel"
    });
    $.__views.mainheaderview.add($.__views.mainheaderlabel);
    $.__views.addbutton = Ti.UI.createButton({
        right: "2%",
        width: "11%",
        height: "70%",
        visible: false,
        id: "addbutton"
    });
    $.__views.mainheaderview.add($.__views.addbutton);
    $.__views.mainbodyview = Ti.UI.createView({
        top: "9%",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "white",
        id: "mainbodyview"
    });
    $.__views.mainview.add($.__views.mainbodyview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.include("/include/global.js");
    var menuOpen = false;
    createDb();
    fillNewsTable("http://mypenhi.school2go.ca/m.json");
    fillInfoTable("http://mypenhi.school2go.ca/i.json?tag=school");
    $.index.open();
    $.mainbodyview.add(Alloy.createController("news").getView());
    __defers["$.__views.menutableview!click!select"] && $.__views.menutableview.addEventListener("click", select);
    __defers["$.__views.menubutton!click!showhidemenu"] && $.__views.menubutton.addEventListener("click", showhidemenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;