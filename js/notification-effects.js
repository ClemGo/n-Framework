/*!
* Clemens Goering - Notification (http://www.cgoering.de)
* Copyright 2013-2014 Clemens Goering / CGOERING
* Notification and information Framework
*
* Javascript
* Slide and other Effects
*/

/*
* Color - Icon Selection
*/

/**
* Single Error Fields
*/
function clearErrors(outputId){
	var outputLength = document.getElementById(outputId).childNodes.length;
	if(outputLength > 0){
		for (var i = 0; i < outputLength; i++){
			document.getElementById(outputId).childNodes[i].remove();
		}
	}
	
}

function createErrorFixed(outputId, message, color){
	
	/**
	* Check if Output already has Error Notification Elements
	* Remove them to create a new Error
	*/
	clearErrors(outputId);
	/**
	* Create Error Field
	*/
	var divFixed = document.createElement("div");
	divFixed.className = "error-box-fixed theme-"+color+"";
	divFixed.id = "error-box-fixed";
	divFixed.onclick = function () { 
		$( "#error-box-fixed" ).toggle( "slide" );
		window.setTimeout("removeError('error-box-fixed')", 500);
		
	}
	
	/*
	* Span for auto-height-message
	*/
	var span = document.createElement("div");
	span.className = "span-message-autoheight";
	var node =document.createTextNode(message);
	span.appendChild(node);
	
	var divFixedMessage = document.createElement("div");
	divFixedMessage.className = "error-box-fixed-message";
	divFixedMessage.appendChild(span);
	
	//Textalign depending on message length
	if(message.length > 35){
		divFixedMessage.style.textAlign = "left";
	}else{
		divFixedMessage.style.textAlign = "center";
	}
	
	var divFixedIcon = document.createElement("div");
	divFixedIcon.className = "ebf-icon icon-circle "+iconSelector(color)+"";
	
	divFixed.appendChild(divFixedMessage);
	divFixed.appendChild(divFixedIcon);
	
	var output = document.getElementById(outputId);
	output.appendChild(divFixed);
}

function createExtendedErrorFixed(outputId, message, ext_message, color){
	
	/**
	* Check if Output already has Error Notification Elements
	* Remove them to create a new Error
	*/
	clearErrors(outputId);

	/**
	* Create Error Field
	*/
	var divFixed = document.createElement("div");
	divFixed.className = "error-box-fixed theme-"+color+"";
	divFixed.id = "error-box-fixed-extended";
	divFixed.onclick = function () { 
		$( "#error-box-fixed-extended" ).toggle( "slide" );
		window.setTimeout("removeError('error-box-fixed-extended')", 500);
		
	}
	
	/*
	* Span for auto-height-message
	*/
	var span = document.createElement("div");
	span.className = "span-message-autoheight";
	var node =document.createTextNode(message);
	span.appendChild(node);
	
	var divFixedMessage = document.createElement("div");
	divFixedMessage.className = "error-box-fixed-message";
	divFixedMessage.appendChild(span);
	
	//Textalign depending on message length
	if(message.length > 35){
		divFixedMessage.style.textAlign = "left";
	}
	
	var divFixedIcon = document.createElement("div");
	divFixedIcon.className = "ebf-icon icon-circle "+iconSelector(color)+"";
	
	var iconMessageContainer = document.createElement("div");
	iconMessageContainer.className = "message-icon-container";
	iconMessageContainer.appendChild(divFixedMessage);
	iconMessageContainer.appendChild(divFixedIcon);
		
	var spanExtended = document.createElement("div");
	spanExtended.className = "span-message-autoheight";
	var nodeExtended =document.createTextNode(ext_message);
	spanExtended.appendChild(nodeExtended);
		
	var divFixedExtended = document.createElement("div");
	divFixedExtended.className = "ebf-extended";
	divFixedExtended.id = "ebf-extended";
	divFixedExtended.appendChild(spanExtended);
	
	//Textalign depending on message length
	if(ext_message.length > 35){
		divFixedExtended.style.textAlign = "left";
	}
	
	var divFixedContainer = document.createElement("div");
	divFixedContainer.className = "ebf-drop-container";
	divFixedContainer.onclick = function slide(e) { 
		$("#ebf-extended").css('display')=='none' ? $("#ebf-extended").slideDown("slow") : $("#ebf-extended").slideUp("slow");
	
		if(document.getElementById("ebf-drop-down").style.display == "none"){
			document.getElementById('ebf-drop-down').style.display = "block";
			document.getElementById('ebf-drop-up').style.display = "none";
		}else{
			document.getElementById('ebf-drop-down').style.display = "none";
			document.getElementById('ebf-drop-up').style.display = "block";
		}
		e.stopPropagation();
	}
	
	var down = document.createElement("div");
	down.className = "ebf-drop-up icon-drop-down";
	down.id = "ebf-drop-down";
	down.style.display ="block";
	var up = document.createElement("div");
	up.className = "ebf-drop-up icon-drop-up";
	up.id = "ebf-drop-up";
	up.style.display ="none";
	
	var closeField = document.createElement("div");
	closeField.className = "ebf-close icon-close";
	closeField.id = "ebf-drop-close";
	closeField.onclick = function ext_close() { 
		$( "#error-box-fixed-extended" ).toggle( "slide" );
		window.setTimeout("removeError('error-box-fixed-extended')", 500);
		
	}
	
	divFixedContainer.appendChild(up);
	divFixedContainer.appendChild(down);
	divFixedContainer.appendChild(closeField);
	
	divFixed.appendChild(iconMessageContainer);
	divFixed.appendChild(divFixedExtended);
	divFixed.appendChild(divFixedContainer);
	
	var output = document.getElementById(outputId);
	output.appendChild(divFixed);
}


/*
* Multiple Error Fields
*/
function createErrorFixed_multi(outputId, message, color){
	//Existing Fields
	var outputLength = document.getElementById(outputId).childNodes.length;
		
	var id = Math.floor((Math.random() * 10000) + 1);
	var divFixed = document.createElement("div");
	divFixed.className = "error-box-fixed-multi theme-"+color+"";
	var a = 0;
	var a = (outputLength*60);
	divFixed.marginTop = a+"px";
	divFixed.id = "error-box-fixed-"+id;
	divFixed.onclick = function () { 
		$( "#error-box-fixed-"+id+"" ).toggle( "slide" );
		window.setTimeout("removeError('error-box-fixed-"+id+"')", 500);
		
	}
	
	/*
	* Span for auto-height-message
	*/
	var span = document.createElement("div");
	span.className = "span-message-autoheight";
	var node =document.createTextNode(message);
	span.appendChild(node);
	
	var divFixedMessage = document.createElement("div");
	divFixedMessage.className = "error-box-fixed-message";
	divFixedMessage.appendChild(span);
	
	//Textalign depending on message length
	if(message.length > 35){
		divFixedMessage.style.textAlign = "left";
	}
	
	var divFixedIcon = document.createElement("div");
	divFixedIcon.className = "ebf-icon icon-circle "+iconSelector(color)+"";
	
	
	divFixed.appendChild(divFixedMessage);
	divFixed.appendChild(divFixedIcon);
	
	var output = document.getElementById(outputId);
	output.appendChild(divFixed);
}

function createExtendedErrorFixed_multi(outputId, message, ext_message, color){
	var id = Math.floor((Math.random() * 10000) + 1);
	var divFixed = document.createElement("div");
	divFixed.className = "error-box-fixed-multi theme-"+color+"";
	divFixed.id = "error-box-fixed-extended-"+id;
	
	/*
	* Span for auto-height-message
	*/
	var span = document.createElement("div");
	span.className = "span-message-autoheight";
	var node = document.createTextNode(message);
	span.appendChild(node);
	
	var divFixedMessage = document.createElement("div");
	divFixedMessage.className = "error-box-fixed-message";
	divFixedMessage.appendChild(span);
	
	//Textalign depending on message length
	if(message.length > 35){
		divFixedMessage.style.textAlign = "left";
	}
	
	var divFixedIcon = document.createElement("div");
	divFixedIcon.className = "ebf-icon icon-circle "+iconSelector(color)+"";
	
	var iconMessageContainer = document.createElement("div");
	iconMessageContainer.className = "message-icon-container";
	iconMessageContainer.appendChild(divFixedMessage);
	iconMessageContainer.appendChild(divFixedIcon);
	
	var spanExtended = document.createElement("div");
	spanExtended.className = "span-message-autoheight";
	var nodeExtended =document.createTextNode(ext_message);
	spanExtended.appendChild(nodeExtended);
	
	var divFixedExtended = document.createElement("div");
	divFixedExtended.className = "ebf-extended";
	divFixedExtended.id = "ebf-extended-"+id;
	divFixedExtended.appendChild(spanExtended);
	
	//Textalign depending on message length
	if(ext_message.length > 35){
		divFixedExtended.style.textAlign = "left";
	}
	
	var divFixedContainer = document.createElement("div");
	divFixedContainer.className = "ebf-drop-container";
	divFixedContainer.onclick = function (e) { 
		$("#ebf-extended-"+id).css('display')=='none' ? $("#ebf-extended-"+id).slideDown("slow") : $("#ebf-extended-"+id).slideUp("slow");
	
		if(document.getElementById("ebf-drop-down-"+id).style.display == "none"){
			document.getElementById('ebf-drop-down-'+id).style.display = "block";
			document.getElementById('ebf-drop-up-'+id).style.display = "none";
		}else{
			document.getElementById('ebf-drop-down-'+id).style.display = "none";
			document.getElementById('ebf-drop-up-'+id).style.display = "block";
		}
		e.stopPropagation();
	}
	
	var down = document.createElement("div");
	down.className = "ebf-drop-up icon-drop-down";
	down.id = "ebf-drop-down-"+id;
	down.style.display ="block";
	var up = document.createElement("div");
	up.className = "ebf-drop-up icon-drop-up";
	up.id = "ebf-drop-up-"+id;
	up.style.display ="none";
	
	var closeField = document.createElement("div");
	closeField.className = "ebf-close icon-close";
	closeField.id = "ebf-drop-close-"+id;
	closeField.onclick = function () { 
		$( "#error-box-fixed-extended-"+id ).toggle( "slide" );
		window.setTimeout("removeError('error-box-fixed-extended-"+id+"')", 500);
		
	}
	
	divFixedContainer.appendChild(up);
	divFixedContainer.appendChild(down);
	divFixedContainer.appendChild(closeField);

	
	divFixed.appendChild(iconMessageContainer);
	divFixed.appendChild(divFixedExtended);
	divFixed.appendChild(divFixedContainer);
	
	var output = document.getElementById(outputId);
	output.appendChild(divFixed);
}


function removeError(id){
	$( "#"+id+"" ).remove();
}


/*
* Slide Effects
*/

function fixedSlideIn(bId){
	$( "#"+bId+"" ).toggle( "slide" );
}