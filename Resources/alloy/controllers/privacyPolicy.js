function Controller() {
    function loadhelpview() {
        $.privacyPolicyView.removeAllChildren();
        $.privacyPolicyView.add(Alloy.createController("help").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "privacyPolicy";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.privacyPolicy = Ti.UI.createView({
        id: "privacyPolicy"
    });
    $.__views.privacyPolicy && $.addTopLevelView($.__views.privacyPolicy);
    $.__views.privacyPolicyView = Ti.UI.createView({
        id: "privacyPolicyView"
    });
    $.__views.privacyPolicy.add($.__views.privacyPolicyView);
    $.__views.backButton = Ti.UI.createButton({
        left: "2%",
        top: "2%",
        width: "30px",
        height: "30px",
        backgroundImage: "/images/back.png",
        id: "backButton"
    });
    $.__views.privacyPolicyView.add($.__views.backButton);
    loadhelpview ? $.__views.backButton.addEventListener("click", loadhelpview) : __defers["$.__views.backButton!click!loadhelpview"] = true;
    $.__views.__alloyId96 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        text: "This is the privacy policy view.",
        id: "__alloyId96"
    });
    $.__views.privacyPolicyView.add($.__views.__alloyId96);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.backButton!click!loadhelpview"] && $.__views.backButton.addEventListener("click", loadhelpview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;