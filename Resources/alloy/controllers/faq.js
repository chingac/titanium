function Controller() {
    function loadhelpview() {
        $.faqView.removeAllChildren();
        $.faqView.add(Alloy.createController("help").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "faq";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.faq = Ti.UI.createView({
        id: "faq"
    });
    $.__views.faq && $.addTopLevelView($.__views.faq);
    $.__views.faqView = Ti.UI.createView({
        id: "faqView"
    });
    $.__views.faq.add($.__views.faqView);
    $.__views.backButton = Ti.UI.createButton({
        left: "2%",
        top: "2%",
        width: "30px",
        height: "30px",
        backgroundImage: "/images/back.png",
        id: "backButton"
    });
    $.__views.faqView.add($.__views.backButton);
    loadhelpview ? $.__views.backButton.addEventListener("click", loadhelpview) : __defers["$.__views.backButton!click!loadhelpview"] = true;
    $.__views.__alloyId18 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        text: "This is the FAQ view.",
        id: "__alloyId18"
    });
    $.__views.faqView.add($.__views.__alloyId18);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.backButton!click!loadhelpview"] && $.__views.backButton.addEventListener("click", loadhelpview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;