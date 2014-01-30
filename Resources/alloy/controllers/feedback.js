function Controller() {
    function loadhelpview() {
        $.feedbackView.removeAllChildren();
        $.feedbackView.add(Alloy.createController("help").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feedback";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feedback = Ti.UI.createView({
        id: "feedback"
    });
    $.__views.feedback && $.addTopLevelView($.__views.feedback);
    $.__views.feedbackView = Ti.UI.createView({
        id: "feedbackView"
    });
    $.__views.feedback.add($.__views.feedbackView);
    $.__views.backButton = Ti.UI.createButton({
        left: "2%",
        top: "2%",
        width: "30px",
        height: "30px",
        backgroundImage: "/images/back.png",
        id: "backButton"
    });
    $.__views.feedbackView.add($.__views.backButton);
    loadhelpview ? $.__views.backButton.addEventListener("click", loadhelpview) : __defers["$.__views.backButton!click!loadhelpview"] = true;
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        text: "This is the feedback view.",
        id: "__alloyId19"
    });
    $.__views.feedbackView.add($.__views.__alloyId19);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.backButton!click!loadhelpview"] && $.__views.backButton.addEventListener("click", loadhelpview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;