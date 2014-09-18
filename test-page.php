<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
	 <script src="//code.jquery.com/jquery-1.10.2.js"></script>
	<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
	<script src="js/notification-effects.js"></script>
	<script src="js/notification-input.js"></script>
	<script src="js/notification-window.js"></script>

    <!-- Custom styles for Notifications -->
    <link href="css/notification-main.css" rel="stylesheet">
	<link href="css/notification-icon.css" rel="stylesheet">
	<link href="css/notification-text-color.css" rel="stylesheet">
	<link href="css/notification-theme-color.css" rel="stylesheet">

  </head>

  <body>

					 <table class="notification-preview" style="margin:200px auto;">
					 	<tr>
							<td rowspan="7"><img src="images/notification-single.png"></img></td>
							<td>Multi</td>
							<td>Single</td>
							<td rowspan="7"><img src="images/notification-expand.png"></img></td>
						</tr>
					 	<tr>
							<td> <button class="btn btn-default" style="width:150px;"
								 onclick="createErrorFixed_multi('multi-output', 
								'Notification..', 'red');" >Multi-Single (red)</button></td>
							<td><button class="btn btn-default" style="width:150px;" onclick="createErrorFixed('output', 'Failure',
								 'red');" >Single (red)</button></td>
						</tr>
					 	<tr>
							<td> <button class="btn btn-default" style="width:150px;"
								 onclick="createErrorFixed_multi('multi-output', 
								'Notification..', 'green');" >Multi-Single (green)</button></td>
							<td><button class="btn btn-default" style="width:150px;" onclick="createErrorFixed('output', 'Success',
								 'green');" >Single (green)</button></td>
						</tr>
					 	<tr>
							<td> <button class="btn btn-default" style="width:150px;"
								 onclick="createErrorFixed_multi('multi-output', 
								'Message...', 'yellow');" >Multi-Single (yellow)</button></td>
							<td><button class="btn btn-default" style="width:150px;" onclick="createErrorFixed('output',
								 'Message...',
								 'yellow');" >Single (yellow)</button></td>
						</tr>
					 	<tr>
							<td> <button class="btn btn-default" style="width:150px;"
								 onclick="createErrorFixed_multi('multi-output', 
								'Notification..', 'white');" >Multi-Single (white)</button></td>
							<td><button class="btn btn-default" style="width:150px;" onclick="createErrorFixed('output', 'Info',
								 'white');" >Single (white)</button></td>
						</tr>
					 	<tr>
	  							<td><button class="btn btn-default" class="btn btn-default" style="width:150px;"
									 onclick="createExtendedErrorFixed_multi('multi-output', 
	  								'Mesage..', 'More..', 'white')" >
	  					  Multi Expand</button></td>
							<td><button class="btn btn-default" style="width:150px;" onclick="createExtendedErrorFixed('output',
								 'Message', 
								'More' , 'white')" >Single Expand</button></td>
							
						</tr>
					 	<tr>
	  							<td><button class="btn btn-default" class="btn btn-default" style="width:150px;"
									 onclick="createExtendedErrorFixed_multi('multi-output', 
	  								'Message', 'More..', 'green')" >
	  					  Multi Expand (green)</button></td>
							<td><button class="btn btn-default" style="width:150px;" onclick="createExtendedErrorFixed('output',
								 'Message', 
								'More' , 'green')" >Single Expand (green)</button></td>
							
						</tr>
					 </table>
					 
					 <p>
						 <button class="btn btn-default" style="width:150px;margin:0px 40%;" 
						 onclick="windowInteract('Lorem ipsum dolor sit amet, consectetur adipiscing elit','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur, augue vitae ornare varius, ante augue aliquam ','yes','no','red',false)" >Main Window</button>
					 </p>
					 
					 
					
					 <p>
						 <input type="input" id="inputField" 
						 onkeydown="if (event.keyCode == 13) createInputNote('inputField','right',this.value,'red')"
						 style="width:300px; margin:0px 40%;" value="test"/>
					 </p>
					 
				  
				 <div id="output" class="notification-output"></div>
				 
				 <div id="multi-output" class="notification-multi-output"></div>
				     	

  </body>
</html>
