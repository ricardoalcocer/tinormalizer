function Controller() {
    function doClick() {
        OptionsMenu.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var TiNorm = require("com.alcoapps.normalizations");
    var cancelIndex = 3;
    var OptionsMenu = new TiNorm.OptionsMenu({
        parent: $.index,
        title: "iOS Options Menu",
        options: [ {
            title: "Option1",
            icon: "some_icon.png"
        }, {
            title: "Option2",
            icon: "some_icon.png"
        }, {
            title: "Option3",
            icon: "some_icon.png"
        }, {
            title: "Cancel",
            icon: "some_icon.png"
        } ],
        destructive: cancelIndex,
        callback: function(e) {
            switch (e.index) {
              case 0:
                alert("Clicked on Option1");
                break;

              case 1:
                alert("Clicked on Option2");
                break;

              case 2:
                alert("Clicked on Option3");
            }
        }
    });
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;