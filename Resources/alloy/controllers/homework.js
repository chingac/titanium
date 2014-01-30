function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homework";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.homework = Ti.UI.createView({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "homework"
    });
    $.__views.homework && $.addTopLevelView($.__views.homework);
    $.__views.__alloyId36 = Ti.UI.createView({
        id: "__alloyId36"
    });
    $.__views.homework.add($.__views.__alloyId36);
    var __alloyId37 = {};
    var __alloyId40 = [];
    var __alloyId42 = {
        type: "Ti.UI.Label",
        bindId: "desc",
        properties: {
            font: {
                fontSize: "15sp",
                fontWeight: "bold"
            },
            left: "2%",
            height: "30%",
            width: Ti.UI.SIZE,
            top: "5%",
            color: "yellow",
            shadowColor: "gray",
            shadowOffset: {
                x: 5,
                y: 5
            },
            bindId: "desc"
        }
    };
    __alloyId40.push(__alloyId42);
    var __alloyId44 = {
        type: "Ti.UI.Label",
        bindId: "dueday",
        properties: {
            font: {
                fontSize: "15sp",
                fontWeight: "bold"
            },
            left: "2%",
            height: "30%",
            width: Ti.UI.SIZE,
            top: "35%",
            color: "purple",
            bindId: "dueday"
        }
    };
    __alloyId40.push(__alloyId44);
    var __alloyId46 = {
        type: "Ti.UI.Label",
        bindId: "course",
        properties: {
            font: {
                fontSize: "15sp"
            },
            left: "2%",
            height: "30%",
            width: Ti.UI.SIZE,
            top: "65%",
            bindId: "course"
        }
    };
    __alloyId40.push(__alloyId46);
    var __alloyId39 = {
        properties: {
            name: "homeworktemplate",
            height: "200"
        },
        childTemplates: __alloyId40
    };
    __alloyId37["homeworktemplate"] = __alloyId39;
    var __alloyId47 = [];
    var __alloyId50 = [];
    $.__views.__alloyId51 = {
        properties: {
            height: "100dp",
            id: "__alloyId51"
        },
        desc: {
            text: "description1"
        },
        dueday: {
            text: "2010/2/11"
        },
        course: {
            text: "whatever"
        }
    };
    __alloyId50.push($.__views.__alloyId51);
    $.__views.__alloyId52 = {
        properties: {
            height: "100dp",
            id: "__alloyId52"
        },
        desc: {
            text: "description222222"
        },
        dueday: {
            text: "2999/9/9"
        },
        course: {
            text: "balabala"
        }
    };
    __alloyId50.push($.__views.__alloyId52);
    $.__views.__alloyId48 = Ti.UI.createListSection({
        id: "__alloyId48"
    });
    __alloyId47.push($.__views.__alloyId48);
    $.__views.__alloyId48.items = __alloyId50;
    $.__views.homeworklist = Ti.UI.createListView({
        sections: __alloyId47,
        templates: __alloyId37,
        id: "homeworklist",
        defaultItemTemplate: "homeworktemplate"
    });
    $.__views.__alloyId36.add($.__views.homeworklist);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;