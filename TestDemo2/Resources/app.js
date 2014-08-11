// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    title:'Window 1',
    backgroundColor:'#fff'
});

var abc = 100;

win.addEventListener('open',function(e)
{
   abc=abc+10;
   Ti.API.info("The value for the variable is:" + abc);
});

win.open();
