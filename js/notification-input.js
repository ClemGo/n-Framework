/*!
 * Clemens Goering - Notification (http://www.cgoering.de)
 * Copyright 2013-2014 Clemens Goering / CGOERING
 * Notification and information Framework
 * INPU FIELDS
 * Position checking and generating Infos
*/
function iconSelector(color){
	var returnString = "";
	
	switch(color) {
	    case "green":
	        returnString = "icon-success";
	        break;
	    case "red":
	        returnString = "icon-cancel";
	        break;
	    case "yellow":
	        returnString = "icon-info";
	        break;
	    default:
			returnString = "icon-info";
	} 
	return returnString;
}

function getInputPosition(position, inputId, style){

	o = document.getElementById(inputId);
	    var leftValue =o.offsetLeft; 
		var topValue = o.offsetTop;
	    while (o=o.offsetParent)
	    	leftValue += o.offsetLeft;
	    o = document.getElementById(inputId);
	    while (o=o.offsetParent)
	    	topValue += o.offsetTop;
		
		//Add Width to leftValue for upper Right Position
		// if position == right
		if(position == "right"){
			var width = document.getElementById(inputId).offsetWidth;
			leftValue = leftValue + width + 11;
		}else{
			leftValue = leftValue - 260;
		}
		//Depending on Stlye change top position of Note
		if(style=="normal"){
			topValue = topValue - (document.getElementById(inputId).offsetHeight/2)
		}
		
	    return [leftValue,topValue];
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function createInputNote(inputId, position, message, color){
	//Check if Input field note already exists
	var existing = document.getElementById("in-box-container-"+inputId);
	if (existing != null){
		existing.remove();
	}
	
	var position = getInputPosition(position,inputId,'normal');
	//Select Icon depending on color
	var icon = iconSelector(color);
	
	var inputBox = document.createElement("div");
	inputBox.className = "in-message-box";
	var node =document.createTextNode(message);
	inputBox.appendChild(node);
	
	//Icon
	var inputIcon = document.createElement("div");
	inputIcon.className = "in-icon-area "+icon+"";
	
	
	//Container
	var inputContainer = document.createElement("div");
	inputContainer.className = "in-box-container i-theme-"+color+"";
	inputContainer.id = "in-box-container-"+inputId;
	

	inputContainer.style.left = position[0]+"px";
	inputContainer.style.top = position[1]+"px";
	//Add all to conatiner
	inputContainer.appendChild(inputBox);	
	inputContainer.appendChild(inputIcon);

	
	var inputField = document.getElementById(inputId);
	insertAfter(inputField, inputContainer);
}

function createSmallInputNote(inputId, position, message, color){
	//Check if Input field note already exists
	var existing = document.getElementById("in-box-container-small-"+inputId);
	if (existing != null){
		existing.remove();
	}
	
	var position = getInputPosition(position,inputId,'small');
	//Select Icon depending on color
	var icon = iconSelector(color);
	
	var inputBox = document.createElement("div");
	inputBox.className = "in-message-box-small";
	var node =document.createTextNode(message);
	inputBox.appendChild(node);
	
	//Container
	var inputContainer = document.createElement("div");
	inputContainer.className = "in-box-container-small i-theme-"+color+"";
	inputContainer.id = "in-box-container-small-"+inputId;
	

	inputContainer.style.left = position[0]+"px";
	inputContainer.style.top = position[1]+"px";
	//Add all to conatiner
	inputContainer.appendChild(inputBox);	

	
	var inputField = document.getElementById(inputId);
	insertAfter(inputField, inputContainer);
}