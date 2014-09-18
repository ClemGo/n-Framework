/*!
* Clemens Goering - Notification (http://www.cgoering.de)
* Copyright 2013-2014 Clemens Goering / CGOERING
* Notification and information Framework
*/

function removeWindow(id, result){
	$( "#"+id+"" ).remove();
	return result;
}

function windowInteract(message,longMessage,button_left_value,button_right_value, color,effect){
var icon = iconSelector(color);	
	
var container = document.createElement("div");
container.className = "window-container";
container.id = "window-container";

//Top Area
var topArea = document.createElement("div");
topArea.className = "window-center-top";

var wtl = document.createElement("div");
wtl.className = "window-top-line theme-"+color+"";

var wtlicon = document.createElement("div");
wtlicon.className = "window-top-line-icon "+icon+"";

var wtlmessage = document.createElement("div");
wtlmessage.className = "window-top-line-message";

//Short top Message
var node =document.createTextNode(message);
wtlmessage.appendChild(node);


//Long Top Message
var wtm = document.createElement("div");
wtm.className = "window-top-message";
var nodelong =document.createTextNode(longMessage);
wtm.appendChild(nodelong);

var bottomArea = document.createElement("div");
bottomArea.className = "window-center-bottom";

wtl.appendChild(wtlicon);
wtl.appendChild(wtlmessage);

topArea.appendChild(wtl);
topArea.appendChild(wtm);


//Buttons
    var button_left = document.createElement("input");
	var button_right = document.createElement("input");
 
    //Assign different attributes to the element - left.
    button_left.setAttribute("type", "button");
    button_left.setAttribute("value", button_left_value.toUpperCase());
    button_left.setAttribute("name", "window-btn-ok");
	button_left.setAttribute("class", "window-button-left");
	button_left.onclick = function () {
		removeWindow('window-container', button_left_value);
		}
	
    //Assign different attributes to the element - left.
    button_right.setAttribute("type", "button");
    button_right.setAttribute("value", button_right_value.toUpperCase());
    button_right.setAttribute("name", "window-btn-cancel");
	button_right.setAttribute("class", "window-button-right");
	button_right.onclick = function () {
		removeWindow('window-container', button_left_value);
		}

	bottomArea.appendChild(button_left);
	bottomArea.appendChild(button_right);

var centerArea = document.createElement("div");
centerArea.className = "window-center-area";
centerArea.id = "window-center-area";
if(effect){
	centerArea.style.display = "none";
}
centerArea.appendChild(topArea);
centerArea.appendChild(bottomArea);
//Append
container.appendChild(centerArea);
document.body.appendChild(container);

		//Calling slide Function
		// if effect == true
		if(effect){
			window.setTimeout(slideWindow(), 100);
		}
}

function slideWindow(){
    $( "#window-center-area" ).slideDown( "slow", function() {
   });
}