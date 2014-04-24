/*
    iOS/Android API Normalizations for Appcelerator Titanium
*/
function OptionsMenu(opt){
  this.options=opt;

  if (Ti.Platform.osname==='android'){
    var activity = opt.parent.activity;

    // add menu to ActionBar
    activity.onCreateOptionsMenu = function(e){
      var menu = e.menu;

      opt.options.forEach(function(item,index){
        if (index < opt.options.length-1){
          var menuItem = menu.add({ 
            title: item.title,
            itemId: index, 
            icon:  item.icon,
            showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER
          });
          //console.log(item.title);
          menuItem.addEventListener("click", function(e) {
            // normalize callback so it returns e.index just like iOS
            opt.callback({index:index});
          });
        }
      });
    }
  }
}

OptionsMenu.prototype.show=function(cb){
  _that=this;

  // get only the title property
  var menuOptions=_.pluck(_that.options.options, 'title');

  if (Ti.Platform.osname === 'android'){
    menuOptions.pop(); // remove the destructive
  }
  
  var opts = {
    title       :   _that.options.title,
    options     :   menuOptions,
    destructive :   _that.options.destructive
  }

  var dialog = Ti.UI.createOptionDialog(opts);
  dialog.addEventListener('click',_that.options.callback);
  dialog.show();
}

exports.OptionsMenu=OptionsMenu;