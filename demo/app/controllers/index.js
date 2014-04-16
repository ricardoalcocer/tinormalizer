function doClick(e) {
    OptionsMenu.show();
}

var TiNorm=require('com.alcoapps.normalizations');
var cancelIndex=3;
var OptionsMenu=new TiNorm.OptionsMenu({
	parent:$.index,
	title:"iOS Options Menu",
  	options:[
  		{title:'Option1',icon:"some_icon.png"},
  		{title:'Option2',icon:"some_icon.png"},
  		{title:'Option3',icon:"some_icon.png"},
  		{title:'Cancel',icon:"some_icon.png"}
  	],
  	destructive: cancelIndex,
  	callback:function(e){
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

$.index.open();
