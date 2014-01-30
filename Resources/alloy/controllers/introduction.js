function Controller() {
    function loadhelpview() {
        $.introductionView.removeAllChildren();
        $.introductionView.add(Alloy.createController("help").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "introduction";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.introduction = Ti.UI.createView({
        id: "introduction"
    });
    $.__views.introduction && $.addTopLevelView($.__views.introduction);
    $.__views.introductionView = Ti.UI.createView({
        id: "introductionView"
    });
    $.__views.introduction.add($.__views.introductionView);
    $.__views.backButton = Ti.UI.createButton({
        left: "2%",
        top: "2%",
        width: "30px",
        height: "30px",
        backgroundImage: "/images/back.png",
        id: "backButton"
    });
    $.__views.introductionView.add($.__views.backButton);
    loadhelpview ? $.__views.backButton.addEventListener("click", loadhelpview) : __defers["$.__views.backButton!click!loadhelpview"] = true;
    $.__views.__alloyId81 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        text: "This is the introduction view.",
        id: "__alloyId81"
    });
    $.__views.introductionView.add($.__views.__alloyId81);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.backButton!click!loadhelpview"] && $.__views.backButton.addEventListener("click", loadhelpview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;