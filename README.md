# TiNormalizer

A CommonJS library to normalize several Titanium API calls.  This is not to fix a Titanium flaw or bug, but rather to provide an easier way of implementing certain features in the proper cross-platform way.  

> Titanium's task is to expose the platform SDK to JavaScript.  It's the developer responsibility to know exactly which one to use and which are analogous across platforms.

The API calls normalized with this library are those that provide a the same functionality, but are implemented in a very different way.

## Demo app
The demo app provided with this repo is also using my [ActionBarExtras Module](https://github.com/ricardoalcocer/actionbarextras) module to force showing the "menu inflater" on Android devices with hardware menu button.

## Options Menu

![http://s20.postimg.org/va2z75sb1/Ti_Norm_Options_Menu.gif](http://s20.postimg.org/va2z75sb1/Ti_Norm_Options_Menu.gif)

The OptionsMenu normalization uses the OptionDialog on iOS and Menus on Android, which are set to "SHOW_AS_ACTION_NEVER".  Through this method, Android will ignore the last item in the list, assuming it is the cancel (destructive) button.  It'll also use a single callback for both platforms and the event object is normalized to return e.index in both iOS and Android.

### Usage
	function doClick(e) {
		// to show the options on iOS
		OptionsMenu.show();
	}

	var TiNorm=require('com.alcoapps.normalizations');

	var cancelIndex=3;

	var OptionsMenu=new TiNorm.OptionsMenu({
		parent:$.index,									// so Android knows the Activity to use
		title:"iOS Options Menu",						// used by iOS
		options:[
	  		{title:'Option1',icon:"some_icon.png"},		// icon is not really required
			{title:'Option2',icon:"some_icon.png"},
			{title:'Option3',icon:"some_icon.png"},
			{title:'Cancel',icon:"some_icon.png"}
	  	],
	  	destructive: cancelIndex,						// index of the cancel button above
	  	callback:function(e){							// callback to use for all options
			switch (e.index){
				case 0:
					alert('Clicked on Option1');
					break;
	  			case 1:
					alert('Clicked on Option2');
					break;
	  			case 2:
					alert('Clicked on Option3');
					break;
			}
		}
	})


<!--## ActionBar ActionItems vs BarButtonItems-->


## License
MIT - [http://alco-mit-license.org](http://alco-mit-license.org)