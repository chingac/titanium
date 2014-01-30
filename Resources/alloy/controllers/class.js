function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "class";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId1 = {};
    var __alloyId4 = [];
    var __alloyId6 = {
        type: "Ti.UI.Label",
        bindId: "descc",
        properties: {
            font: {
                fontSize: "15sp",
                fontWeight: "bold"
            },
            top: "5%",
            color: "yellow",
            shadowColor: "gray",
            shadowOffset: {
                x: 5,
                y: 5
            },
            bindId: "descc"
        }
    };
    __alloyId4.push(__alloyId6);
    var __alloyId8 = {
        type: "Ti.UI.Label",
        bindId: "duedayc",
        properties: {
            font: {
                fontSize: "15sp",
                fontWeight: "bold"
            },
            top: "35%",
            color: "purple",
            bindId: "duedayc"
        }
    };
    __alloyId4.push(__alloyId8);
    var __alloyId10 = {
        type: "Ti.UI.Label",
        bindId: "coursec",
        properties: {
            font: {
                fontSize: "15sp"
            },
            top: "65%",
            bindId: "coursec"
        }
    };
    __alloyId4.push(__alloyId10);
    var __alloyId3 = {
        properties: {
            name: "classtemplate",
            height: "200"
        },
        childTemplates: __alloyId4
    };
    __alloyId1["classtemplate"] = __alloyId3;
    var __alloyId11 = [];
    var __alloyId14 = [];
    $.__views.__alloyId15 = {
        descc: {
            text: "description1"
        },
        duedayc: {
            text: "2010/2/11"
        },
        coursec: {
            text: "whatever"
        },
        properties: {
            id: "__alloyId15"
        }
    };
    __alloyId14.push($.__views.__alloyId15);
    $.__views.__alloyId16 = {
        descc: {
            text: "description222222"
        },
        duedayc: {
            text: "2999/9/9"
        },
        coursec: {
            text: "balabala"
        },
        properties: {
            id: "__alloyId16"
        }
    };
    __alloyId14.push($.__views.__alloyId16);
    $.__views.__alloyId12 = Ti.UI.createListSection({
        id: "__alloyId12"
    });
    __alloyId11.push($.__views.__alloyId12);
    $.__views.__alloyId12.items = __alloyId14;
    $.__views.classlist = Ti.UI.createListView({
        sections: __alloyId11,
        templates: __alloyId1,
        id: "classlist",
        defaultItemTemplate: "classtemplate"
    });
    $.__views.classlist && $.addTopLevelView($.__views.classlist);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;