function Controller() {
    function loadinfoview() {
        $.contactView.removeAllChildren();
        $.contactView.add(Alloy.createController("information").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.contact = Ti.UI.createView({
        id: "contact"
    });
    $.__views.contact && $.addTopLevelView($.__views.contact);
    $.__views.contactView = Ti.UI.createView({
        id: "contactView"
    });
    $.__views.contact.add($.__views.contactView);
    $.__views.backButton = Ti.UI.createButton({
        left: "2%",
        top: "2%",
        width: "30px",
        height: "30px",
        backgroundImage: "/images/back.png",
        id: "backButton"
    });
    $.__views.contactView.add($.__views.backButton);
    loadinfoview ? $.__views.backButton.addEventListener("click", loadinfoview) : __defers["$.__views.backButton!click!loadinfoview"] = true;
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        text: "This is the contact information view.",
        id: "__alloyId17"
    });
    $.__views.contactView.add($.__views.__alloyId17);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.backButton!click!loadinfoview"] && $.__views.backButton.addEventListener("click", loadinfoview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;