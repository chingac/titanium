function Controller() {
    function loadinfoview() {
        $.addressView.removeAllChildren();
        $.addressView.add(Alloy.createController("information").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "address";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.address = Ti.UI.createView({
        id: "address"
    });
    $.__views.address && $.addTopLevelView($.__views.address);
    $.__views.addressView = Ti.UI.createView({
        id: "addressView"
    });
    $.__views.address.add($.__views.addressView);
    $.__views.backButton = Ti.UI.createButton({
        left: "2%",
        top: "2%",
        width: "30px",
        height: "30px",
        backgroundImage: "/images/back.png",
        id: "backButton"
    });
    $.__views.addressView.add($.__views.backButton);
    loadinfoview ? $.__views.backButton.addEventListener("click", loadinfoview) : __defers["$.__views.backButton!click!loadinfoview"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontSize: "15sp"
        },
        text: "This is the address view.",
        id: "__alloyId0"
    });
    $.__views.addressView.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.backButton!click!loadinfoview"] && $.__views.backButton.addEventListener("click", loadinfoview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;