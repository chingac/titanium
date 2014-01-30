function Controller() {
    function loadhelpview() {
        $.tipsView.removeAllChildren();
        $.tipsView.add(Alloy.createController("help").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tips";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.tips = Ti.UI.createView({
        id: "tips"
    });
    $.__views.tips && $.addTopLevelView($.__views.tips);
    $.__views.tipsView = Ti.UI.createView({
        id: "tipsView"
    });
    $.__views.tips.add($.__views.tipsView);
    $.__views.backButton = Ti.UI.createButton({
        left: "2%",
        top: "2%",
        width: "30px",
        height: "30px",
        backgroundImage: "/images/back.png",
        id: "backButton"
    });
    $.__views.tipsView.add($.__views.backButton);
    loadhelpview ? $.__views.backButton.addEventListener("click", loadhelpview) : __defers["$.__views.backButton!click!loadhelpview"] = true;
    $.__views.__alloyId113 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        text: "This is the tips view.",
        id: "__alloyId113"
    });
    $.__views.tipsView.add($.__views.__alloyId113);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.backButton!click!loadhelpview"] && $.__views.backButton.addEventListener("click", loadhelpview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;