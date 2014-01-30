function Controller() {
    function loadinfoview() {
        $.resourceView.removeAllChildren();
        $.resourceView.add(Alloy.createController("information").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "resources";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.resources = Ti.UI.createView({
        id: "resources"
    });
    $.__views.resources && $.addTopLevelView($.__views.resources);
    $.__views.resourceView = Ti.UI.createView({
        id: "resourceView"
    });
    $.__views.resources.add($.__views.resourceView);
    $.__views.backButton = Ti.UI.createButton({
        left: "2%",
        top: "2%",
        width: "30px",
        height: "30px",
        backgroundImage: "/images/back.png",
        id: "backButton"
    });
    $.__views.resourceView.add($.__views.backButton);
    loadinfoview ? $.__views.backButton.addEventListener("click", loadinfoview) : __defers["$.__views.backButton!click!loadinfoview"] = true;
    $.__views.__alloyId97 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        text: "This is the resources view.",
        id: "__alloyId97"
    });
    $.__views.resourceView.add($.__views.__alloyId97);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.backButton!click!loadinfoview"] && $.__views.backButton.addEventListener("click", loadinfoview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;